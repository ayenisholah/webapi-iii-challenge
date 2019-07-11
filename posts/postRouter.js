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

router.get('/:id', (req, res) => {
  try {
    const post = await Posts.getById(re)
  }
});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

// custom middleware

function validatePostId(req, res, next) {

};

module.exports = router;