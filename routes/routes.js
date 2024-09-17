const express = require('express');
const router = express.Router();
const blogController = require('../controllers/controller');
const upload = require('../middlwares/middlwares')

router.post('/', upload.single('image'), blogController.createPost);
router.get('/', blogController.getPosts);
router.get('/:id', blogController.getPostById);
router.put('/:id', upload.single('image'), blogController.updatePost);
router.delete('/:id', blogController.deletePost);

module.exports = router;
