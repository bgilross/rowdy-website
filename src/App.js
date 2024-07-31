import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Sidenav from "./components/Sidenav";

function App() {
  return (
    <div className='App'>
      <Sidenav />
      <Sidebar />
      <Hero />
    </div>
  );
}

export default App;
