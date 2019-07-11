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

router.post('/:id/posts', async (req, res) => {
  const postInfo = { ...req.body, user_id: req.params.id };

  try {
    const post = await Posts.insert(postInfo);
    res.status(210).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error getting the post for the user',
    });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await Users.get();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving users'
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await Users.getById(req.params.id);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the user'
    });
  }
});

router.get('/:id/posts', async (req, res) => {
  try {
    const posts = await Users.getUserPosts(req.params.id);

    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error getting user posts',
    });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const user = await Users.update(req.params.id, req.body);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'The user could not be found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error updating the user',
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const count = await Users.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: 'The user has been destroyed' });
    } else {
      res.status(404).json({ message: 'The user could not be found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Can not destroy the user'
    });
  }
});

//custom middleware


function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
