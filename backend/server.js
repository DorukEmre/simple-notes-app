const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const path = require('path')
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// connect to mongoose
mongoose.connect(process.env.DB_STRING)

// routes
app.use('/', require('./routes/note.route'))

// If we are in production environment, use static client files, and use main 'index.html' file
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'))
  // General route applicable to any URL
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`express server on port ${PORT}, http://localhost:${PORT}/`)
})
