import express from 'express';
import db from './db/db'
require('dotenv').config();

const app = express();

//get all todos
app.get('/api/v1/todos', (req,res) => {
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully',
    todos: db
  })
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});