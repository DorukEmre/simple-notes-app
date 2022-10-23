import { useEffect, useState } from 'react'
import axios from 'axios'

const Notes = () => {
  const [notes, setNotes] = useState([
    {
      id: '',
      title: '',
      content: '',
    },
  ])

  useEffect(() => {
    axios
      .get('http://localhost:3001/notes')
      .then((res) => {
        // console.log(res)
        setNotes(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="container">
      <h1>Notes page</h1>
      <div>
        {notes
          ? notes.map((note) => (
              <div key={note.id}>
                <h1>{note.title}</h1>
                <p>{note.content}</p>
              </div>
            ))
          : ''}
      </div>
    </div>
  )
}

export default Notes
