import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Example from "./materi/1-Styling/Example";

function App() {
  return (
		// ini buat ngerouting agar mempermudah merender tampilan
    <BrowserRouter>
      <Routes>
        <Route index element={<Example/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
