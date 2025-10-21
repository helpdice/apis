const mongoose = require('mongoose');
const env = require('./environment');

const isTestServer = true;
const isLocalSerer = false;
const URL = isTestServer ? isLocalSerer ? env.db.local_url : env.db.test_url : env.db.production_url;

const db = mongoose.connection;

db.on('connecting', () =>
  console.log('Connecting to Database........................')
);

db.on('error', console.error.bind(console, 'Error connecting to the MongoDB'));

db.once('open', () => {
  console.log(`Connected to the Database :: MongoDB`);
});

db.on('disconnected', () => {
  // mongoose
  //   .connect(`mongodb://localhost/${env.db.name}`, {
  //     // user: env.db.user,
  //     // pass: env.db.password,
  //     keepAlive: true,
  //     keepAliveInitialDelay: 300000,
  //   })
  //   .catch(err =>
  //     console.error('[DATABASE_CONNECTION_ERR]: on disconnected', err.response)
  //   );
  mongoose
    .connect(URL)
    .catch(err =>
      console.error('[DATABASE_CONNECTION_ERR]: on disconnected', err.response)
    );
});

// mongoose
//   .connect(`mongodb://localhost/${env.db.name}`, {
//     // user: 'trackkarOwner',
//     // pass: 'trackkarOwner@16',
//     keepAlive: true,
//     keepAliveInitialDelay: 300000,
//   })
//   .catch(connectionErr => {
//     console.error('[DATABASE_CONNECTION_ERR]: ', connectionErr);
//   });
mongoose.connect(URL, {keepAlive: true, keepAliveInitialDelay: 300000,}).catch(connectionErr => {
  console.error('[DATABASE_CONNECTION_ERR]: ', connectionErr);
});
