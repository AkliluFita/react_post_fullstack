import express from 'express'
import Post from '../models/Post.js'


const router = express()



//CREATE POST
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
      const savedPost = await newPost.save(); //save the post in DB
      res.status(200).json(savedPost); //send back the saved from DB to client
    } catch (err) {
      res.status(500).json(err);
    }
    
  });

  // GET ALL POSTS
  router.get('/', async (req, res) =>{
    try {
      const posts = await Post.find();
      res.status(200).json(posts)
      // console.log(posts);

  } catch (err) {
      res.status(500).json(err)
  }
  })

// GET SINGLE POST
  router.get("/:id", async (req, res) => {
    try {
      const singlePost = await Post.findById(req.params.id);
      res.status(200).json(singlePost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // UPDATE POST
  router.put('/:id', async (req, res) =>{
    try {
      const updatedPost = await Post.findByIdAndUpdate(req.params.id, 
        {$set:req.body},
        { new: true } //to see our updated item in postman
        )
      res.status(200).json(updatedPost)
  } catch (err) {
      res.status(501).json(err)
  }
  })

  // DELETE SINGLE POST
  router.delete('/:id', async (req, res) =>{
    try {
      const deletedPost = await Post.findByIdAndDelete(req.params.id)
      res.status(201).json(deletedPost)
  } catch (err) {
      res.status(500).json(err)
  }
  })


  export default router 