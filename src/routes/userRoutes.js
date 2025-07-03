const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET all users
router.get('/users', userController.getAllUsers);

// GET a single user by ID
router.get('/users/:id', userController.getUserById);

// POST a new user
router.post('/users', userController.createUser);

// PUT to update a user by ID
router.put('/users/:id', userController.updateUser);

// DELETE a user by ID
router.delete('/users/:id', userController.deleteUser);

// Save user score
router.post('/users/score', userController.saveUserScore);

module.exports = router;