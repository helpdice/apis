require('dotenv').config();
const express = require('express');
// const logger = require('morgan');
const cors = require('cors');
// const http = require('http');
const serverless = require('serverless-http');
const env = require('./config/environment');
require('./config/mongoose');
const app = express();
// const PORT = env.port;
app.use(cors({
    origin: ['https://ui.helpdice.com', 'http://localhost:3000', 'http://localhost:3001', 'http://localhost:5173', 'http://localhost:5174'], // frontend URLs
    credentials: true
}));

// Setup the location server to be used with socket.io
// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: '*',
//   },
// });

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
// app.use(cookieParser());

// app.use(logger(env.morgan.mode, env.morgan.options));

// Routes
app.use('/', require('./routes')); // loading router


module.exports = app;
module.exports.handler = serverless(app);
// server.listen(PORT, err => {
//   if (err) {
//     console.error(`Error is setting up the server: ${err}`);
//   }

//   console.log(`The server is up and running at port: ${PORT}`);
// });
