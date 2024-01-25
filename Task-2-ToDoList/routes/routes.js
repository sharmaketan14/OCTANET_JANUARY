const express = require('express');
const router = express.Router();
const contrl = require('../controllers/controller.js');

router.get('/todo',contrl.getAllTodo);

router.post('/todo',contrl.insertTodo);

router.patch('/todo/:id',contrl.updateTodo);

router.delete('/todo/:id',contrl.deleteTodo);

module.exports = router;