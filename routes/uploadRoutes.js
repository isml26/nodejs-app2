const AWS = require('aws-sdk');
const uuid = require('uuid/v1');
const requireLogin = require('../middlewares/requireLogin');
const s3 = new AWS.S3({
    credentials:{
        accessKeyId:process.env.accessKeyId,
        secretAccessKey:process.env.secretAccessKey,
    },
    region:'eu-west-3'}   
);

module.exports = app =>{
    // generates presigned(using aws sdk) url for react app
    app.get('/api/upload',requireLogin,(req,res)=>{
        const key = `${req.user.id}/${uuid()}.jpeg`
        s3.getSignedUrl('putObject',{
            Bucket:'blog-for-everyone-33',
            ContentType:'image/jpeg',
            Key:key
        },(err,url)=>res.send({key,url}));
    });
};