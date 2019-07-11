// code away!
require('dotenv').config()

const server = require('./server');

const port = process.env.PORT || 3333;

server.listen(port, () => {
  console.log('\n *** Magic Happening on http://localhost:3333 ***\n')
});