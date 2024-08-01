import Bio from "./components/Bio";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Sidebar />
      <Hero />
      <Bio />
    </div>
  );
}

export default App;
