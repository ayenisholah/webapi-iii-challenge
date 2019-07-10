const express = require('express');
// const postsRouter = require('./posts/postRouter.js')

//custom middleware

function logger(req, res, next) {
  console.log(`${req.method} to ${req.url} ${req.get('Origin')} on [${new Date().toISOString()}]`);
};

const server = express();
server.use(express.json());

server.use(logger)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});


module.exports = server;
