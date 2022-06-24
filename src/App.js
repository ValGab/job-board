import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Jobs from "./components/Jobs";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="container">
          <Jobs />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
