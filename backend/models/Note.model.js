const mongoose = require('mongoose')

const notesSchema = {
  id: String,
  title: String,
  content: String,
}

module.exports = mongoose.model('Note', notesSchema)
