require('dotenv').config();
const OSS = require('ali-oss');
const oss_region = process.env.OSS_REGION;
const oss_access_key_id = process.env.OSS_ACCESS_KEY_ID;
const oss_access_key_secret = process.env.OSS_ACCESS_KEY_SECRET;
const oss_bucket = process.env.OSS_BUCKET;
const client = new OSS({
    region: oss_region,
    accessKeyId: oss_access_key_id,
    accessKeySecret: oss_access_key_secret,
    bucket: oss_bucket,
});

module.exports = { client }