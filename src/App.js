import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Bio from './components/Bio'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
// import ArtistOne from "./components/ArtistOne";
// import ArtistTwo from "./components/ArtistTwo";
// import ArtistThree from "./components/ArtistThree";
// import ArtistFour from "./components/ArtistFour";
// import ArtistFive from "./components/ArtistFive";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/bio" element={<Bio />} />
        </Routes>
      </Router>

      {/* <Navbar />
      <Sidebar />
      <Hero />
      <Bio />
      <ArtistOne />
      <ArtistTwo />
      <ArtistThree />
      <ArtistFour />
      <ArtistFive /> */}
    </div>
  )
}

export default App
