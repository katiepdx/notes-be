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

  // GET route
  .get('/', (req, res, next) => {
    Note
      .getAllNotes(req.body)
      .then(allNotes => res.send(allNotes))
      .catch(next)
  })

  // GET route
  .get('/:id', (req, res, next) => {
    Note
      .getNoteById(req.params.id)
      .then(oneNote => res.send(oneNote))
      .catch(next)
  })

  // PUT route
  .put('/:id', (req, res, next) => {
    Note
      .updateNoteById(req.params.id, req.body)
      .then(note => res.send(note))
      .catch(next)
  })

  // DELETE route
  .delete('/:id', (req, res, next) => {
    Note
      .deleteNoteById(req.params.id)
      .then(note => res.send(note))
      .catch(next)
  })
