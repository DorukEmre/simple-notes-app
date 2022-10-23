const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

app.use(cors())
app.use(express.json())

// connect to mongoose
mongoose.connect(process.env.DB_STRING)

// routes
app.use('/', require('./routes/note.route'))

app.listen(3001, () => {
  console.log('express server running on port 3001, http://localhost:3001/')
})
