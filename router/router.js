const express = require('express');
const router = express.Router();
const posts = require('../helper/posts.json')


const UsersController = require('../controller/UsersController');
const ProductController = require('../controller/ProductController');
const PostsController = require('../controller/PostsController');



router.post('/login', UsersController.LoginUser);
router.post('/signup', UsersController.SignUpUser);

module.exports = router;