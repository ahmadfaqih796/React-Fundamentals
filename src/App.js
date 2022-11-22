import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Example from "./materi/1-useState/Example";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Example/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
