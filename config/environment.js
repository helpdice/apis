// const fs = require('fs');
// const rfs = require('rotating-file-stream');
// const path = require('path');

// const logDirectory = path.join(__dirname, '../production_logs');
// const doesLogsExist = fs.existsSync(logDirectory);
// if (!doesLogsExist) {
//   fs.mkdirSync(logDirectory);
// }

// const accessLogStream = rfs.createStream('access.log', {
//   interval: '1d', // rotate daily
//   path: logDirectory,
// });

const development = {
  name: 'development',
  port: parseInt(process.env.PORT, 10),
  per_page_result_count: 20,
  // map_api_key: process.env.MAP_API_KEY,
  // sms_sender: process.env.SMS_SENDER,
  // sms_key: process.env.SMS_KEY,
  // aws: {
  //   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  //   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  //   region: process.env.AWS_REGION,
  // },
  // pubnub: {
  //   testing: {
  //     publishKey: process.env.PUBNUB_TESTING_PUBLISH_KEY,
  //     subscribeKey: process.env.PUBNUB_TESTING_SUBSCRIBE_KEY,
  //   },
  //   production: {
  //     publishKey: process.env.PUBNUB_PRODUCTION_PUBLISH_KEY,
  //     subscribeKey: process.env.PUBNUB_PRODUCTION_SUBSCRIBE_KEY,
  //   },
  // },
  db: {
    name: process.env.DB,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    production_url: process.env.DB_LIVE_URL,
    test_url: process.env.DB_TEST_URL,
    local_url: process.env.DB_LOCAL_URL
  },
  jwt: Buffer.from('jwt_secret@key$1248').toString('base64'),
  bcrypt_salt_factor: 10,
  // morgan: {
  //   mode: 'dev',
  //   options: { stream: accessLogStream },
  // },
};

module.exports = development;
