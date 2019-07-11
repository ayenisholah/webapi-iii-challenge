const express = require('express');
const postsRouter = require('./posts/postRouter.js');
const userRouter = require('./users/userRouter.js');

//custom middleware
function logger(req, res, next) {
  console.log(`${req.method} to ${req.url} ${req.get('Origin')} on [${new Date().toISOString()}]`);
  next()
};

const server = express();
server.use(express.json());

server.use(logger)

server.use('/api/users', userRouter);
server.use('/api/posts', postsRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});


module.exports = server;
