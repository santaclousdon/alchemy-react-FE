import { Routes, Route } from "react-router-dom";
import HomeOne from "./pages/HomeOne";
import HomeTwo from "./pages/HomeTwo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<HomeOne />} />
        <Route path="/home1" element={<HomeOne />} />
        <Route path="/home2" element={<HomeTwo />} />
      </Routes>
    </div>
  );
}

export default App;
