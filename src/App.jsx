import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Biography from './pages/Biography'
import Listen from './pages/Listen'
import Gallery from './pages/Gallery'
import Organizer from './pages/Organizer'
import Contact from './pages/Contact'
// import Error from './pages/Error'

import './App.css'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/listen" element={<Listen />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/organizer" element={<Organizer />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/*" element={<Error />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
