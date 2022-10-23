import { useState } from 'react'
import axios from 'axios'
import { nanoid } from 'nanoid'

const CreateNote = () => {
  const [input, setInput] = useState({
    id: '',
    title: '',
    content: '',
  })

  function handleChange(event) {
    const { name, value } = event.target
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      }
    })
  }

  // When we click button, we POST the information we just inputted:
  // - address of the backend server
  // - data we will send: 'newNote'
  function handleClick(event) {
    event.preventDefault()
    const newNote = {
      id: nanoid(),
      title: input.title,
      content: input.content,
    }
    axios.post('/create', newNote).catch((err) => console.log(err))
  }

  return (
    <div className="container">
      <h1>Create Note page</h1>
      <form>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="title"
            value={input.title}
            autoComplete="off"
            placeholder="Note title"
            className="form-control"
          ></input>
        </div>
        <div className="form-group">
          <textarea
            onChange={handleChange}
            name="content"
            value={input.content}
            autoComplete="off"
            placeholder="Note content"
            className="form-control"
          ></textarea>
        </div>
        <button onClick={handleClick} className="btn btn-lg btn-info">
          Add note
        </button>
      </form>
    </div>
  )
}

export default CreateNote
