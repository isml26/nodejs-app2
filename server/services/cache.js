const mongoose = require('mongoose');
const redis = require('redis');
const util = require('util');
const keys = require('../config/keys')
//const redisUrl = 'redis://127.0.0.1:6379';
console.log("intocache==",keys.redisUrl)
const client = redis.createClient(keys.redisUrl);
client.hget = util.promisify(client.hget); //trying to return promise instead making of using callback

//expects to return mongoose_model
const exec = mongoose.Query.prototype.exec;

// We are creating cache function inside mongoose_query
mongoose.Query.prototype.cache = function (options={}) {
    this.useCache = true;
    this.hashKey = JSON.stringify(options.key || '');
    return this;//to make this chainable function.
}

mongoose.Query.prototype.exec = async function () {
    if (!this.useCache) {
        return exec.apply(this, arguments);
    }
    // Its used to safely copy properties from one object to another
    // Copying second and third parameter to first parameter {}
    const key = JSON.stringify(Object.assign({}, JSON.parse(JSON.stringify(this.getQuery())), {
        collection: this.mongooseCollection.name
    }));
    // See if we have value or 'key' in redis
    const cacheValue = await client.hget(this.hashKey,key);
    // If do, return that and anything it comes out from redis return as JSON form
    if (cacheValue) {
        const doc = JSON.parse(cacheValue);
        return Array.isArray(doc) ? doc.map(
            d => new this.model(d)
        ) : this.model(doc);
    }
    // Otherwise, issue the query and store the result in redis
    const result = await exec.apply(this, arguments);

    client.hset(this.hashKey,key, JSON.stringify(result));
    client.expire(this.hashKey,60*60*24);
    return result;
}

module.exports = {
    clearHash (hashKey){
      client.del(JSON.stringify(hashKey));
    }
  };