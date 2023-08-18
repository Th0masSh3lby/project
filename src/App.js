import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  return (
    <BrowserRouter basename={"/"}>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/:id`} element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
