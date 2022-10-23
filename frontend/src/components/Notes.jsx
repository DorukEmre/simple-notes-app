import { useEffect, useState } from 'react'
import axios from 'axios'

const Notes = () => {
  const [notes, setNotes] = useState([
    {
      title: '',
      content: '',
    },
  ])

  // Fetch the data
  // useEffect(() => {
  //   fetch('http://localhost:3001/notes')
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json()
  //       }
  //     })
  //     .then((jsonRes) => setNotes(jsonRes))
  // }, [])
  // console.log(notes)

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
      {notes
        ? notes.map((note) => (
            <>
              <h1>{note.title}</h1>
              <p>{note.content}</p>
            </>
          ))
        : ''}
    </div>
  )
}

export default Notes
