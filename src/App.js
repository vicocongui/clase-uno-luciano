import CardsContainer from "./components/CardsContainer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import logo from "./logo.svg";

function App() {
  return (
    <div className="h-full relative">
      {/* Navbar */}
      <Navbar />
      <Hero />
      <CardsContainer />

      {/* Hero */}
      {/* Grid de Cards */}
      {/* About */}
      {/* Footer */}
    </div>
  );
}

export default App;
