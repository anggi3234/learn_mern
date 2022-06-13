import { Router } from 'express';

import bodyParser from 'body-parser';

import { getTodos, getTodo, addTodo, updateTodo, removeTodo } from '../controllers/todos/index'

const router = Router()
const jsonParser = bodyParser.json()

router.get('/api/todos', getTodos)

router.get('/api/todos/:id', getTodo)

router.post('/api/add-todo', jsonParser, addTodo)

router.put('/api/update-todos/:id', jsonParser, updateTodo)

router.delete('/api/remove-todos/:id', jsonParser, removeTodo)

export default router