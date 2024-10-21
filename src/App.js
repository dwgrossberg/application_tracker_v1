import "./styles/pico.min.css";
import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Table from "./components/Table";
import Nav from "./components/Nav";
import LogLink from "./components/LogLink";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <LogLink />
        <div className="body">
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<Table />} />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
