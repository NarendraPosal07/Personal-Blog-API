const Post = require('../models/blogModel');

// Create a new post
const createPost = async (req, res) => {
    try {
        const post = new Post({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author,
            image: req.file ? req.file.path : null
        });
        await post.save();
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all posts
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get a post by ID
const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.json(post);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a post by ID
const updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                content: req.body.content,
                author: req.body.author,
                image: req.file ? req.file.path : req.body.image
            },
            { new: true }
        );
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.json(post);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a post by ID
const deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.json({ message: 'Post deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost
}
