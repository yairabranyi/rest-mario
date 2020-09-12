const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

//GET BACK ALL THE POSTS
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (error) {
    res.json({ message: err })
  }
})

//SUBMIT A POST
router.post('/', async (req, res) => {
  const post = new Post({
    //create a new postobject by the Post schema
    title: req.body.title,
    description: req.body.description
  })
  try {
    const savedPost = await post.save()
    res.json(savedPost)
  } catch (err) {
    res.json({ message: err })
  }
})

//GET BACK A SPECIFIC POST
router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId)
    res.json(post)
  } catch (err) {
    res.json({ errMessage: err })
  }
})

//DELETE A POST
router.delete('/:postId', async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId })
  res.json(removedPost)
  } catch (error) {
    res.json({ errMessage: err })
  }
})

module.exports = router
