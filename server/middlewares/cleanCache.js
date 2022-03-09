const {clearHash} = require('../services/cache');

module.exports = async(req,res,next)=>{
    await next();//wait until route handler finishes job
    clearHash(req.user.id);
};