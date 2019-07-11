const express = require('express');
const Posts = require('./postDb.js');
const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const posts = await Posts.get();
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving posts'
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const post = await Posts.getById(req.params.id);

    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving post'
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const count = await Posts.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: 'The Post has been destroyed' });
    } else {
      res.status(404).json({ message: 'The post could not be found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Can not destroy the post'
    });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const post = await Posts.update(req.params.id, req.body);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: 'The post could not be found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error updating post'
    });
  }
});

// custom middleware

function validatePostId(req, res, next) {

};

module.exports = router;