// routes/tasks.js
const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

// Get all tasks
router.get('/', function(req, res, next) {
  knex('tasks').where('user_id', req.user.id)
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => next(err));
});
// routes/tasks.js
// Existing imports and code

// Search and filter tasks
router.get('/search', function(req, res, next) {
    const { category, priority, due_date } = req.query;
    let query = knex('tasks').where('user_id', req.user.id);
  
    if (category) {
      query = query.andWhere('category', category);
    }
    if (priority) {
      query = query.andWhere('priority', priority);
    }
    if (due_date) {
      query = query.andWhere('due_date', due_date);
    }
  
    query.then(tasks => {
      res.json(tasks);
    }).catch(err => next(err));
  });
  
  
// Create new task
router.post('/', function(req, res, next) {
  const { title, description, category, priority, due_date } = req.body;
  knex('tasks').insert({
    user_id: req.user.id,
    title,
    description,
    category,
    priority,
    due_date
  }).then(() => {
    res.status(201).json({ message: 'Task created successfully' });
  }).catch(err => next(err));
});

module.exports = router;
