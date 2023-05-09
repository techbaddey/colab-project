import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import MyQuote from "./Components/Qoutes";
import Project from "./Components/Project";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/quotes" element={<MyQuote />} />
      </Routes>
    </>
  );
}

export default App;
