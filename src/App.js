import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Parent from "./materi/2-Child-to-Parent/Parent";
import Beranda from "./materi/Beranda";
import Child from "./materi/2-Child-to-Parent/Child";
import Usestate from "./materi/2-UseState/Usestate";
import Example from "./materi/Example";

function App() {
  return (
    // ini buat ngerouting agar mempermudah merender tampilan
    <BrowserRouter>
      <Routes>
        <Route index element={<Example />} />
        <Route path="/styling" element={<Example />} />
        <Route path="/child-to-parent" element={<Parent />} />
        <Route path="/child" element={<Child />} />
        <Route path="/useState" element={<Usestate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
