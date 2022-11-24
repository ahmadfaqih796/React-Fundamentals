import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Example from "./materi/1-Styling/Example";
import Parent from "./materi/2-Child-to-Parent/Parent";
import Beranda from "./materi/Beranda";
import Child from "./materi/2-Child-to-Parent/Child";

function App() {
  return (
    // ini buat ngerouting agar mempermudah merender tampilan
    <BrowserRouter>
      <Routes>
        <Route index element={<Beranda />} />
        <Route path="/styling" element={<Example />} />
        <Route path="/child-to-parent" element={<Parent />} />
        <Route path="/child" element={<Child />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
