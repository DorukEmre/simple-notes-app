import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Notes from './components/Notes'
import CreateNote from './components/CreateNote'

function App() {
  // Navbar, always displayed
  // Navigate between the 3:
  // Home
  // Notes
  // Create Note

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/notes" element={<Notes />}></Route>
          <Route path="/create" element={<CreateNote />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
