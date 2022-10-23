const express = require('express')
const router = express.Router()
const Note = require('../models/Note.model')

// POST route to create a new note
router.route('/create').post((req, res) => {
  const newNote = new Note({
    id: req.body.id,
    title: req.body.title,
    content: req.body.content,
  })

  newNote.save()
  console.log('saved to DB: ', newNote)
})

// GET route to display existing notes
// Find all notes from the database and send them as a response in json format
router.route('/notes').get((req, res) => {
  Note.find()
    .lean()
    .then((foundNotes) => res.json(foundNotes))
    .catch((err) => console.log(err))
})

module.exports = router
