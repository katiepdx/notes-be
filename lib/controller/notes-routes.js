// routes go here

// Express routing
const { Router } = require('express')
// Note model for methods 
const Note = require('../model/notes-model')

module.exports = Router()
  // POST route
  .post('/', (req, res, next) => {
    Note
      .createNote(req.body)
      .then(note => res.send(note))
      .catch(next)
  })
