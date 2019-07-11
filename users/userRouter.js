const express = require('express');
const Users = require('./userDb');
const Posts = require('../posts/postDb');
const router = express.Router();


// async function validateUserId(req, res, next) {
//   let { id } = req.params;

//   if (isNaN(parseInt(id, 10))) {
//     res
//       .set('X-Invalid', 'Invalid-ID')
//       .status(400)
//       .json({ message: "Invalid user ID" });
//   }
// }

router.post('/', async (req, res) => {
  try {
    const user = await Users.insert(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error adding user'
    });
  }
});



//custom middleware


function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
