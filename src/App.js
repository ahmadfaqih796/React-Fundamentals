import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SpreadSyntaxAllow from "./materi/3. Spread Syntax Allows/Example";


function App() {
  return (
    // ini buat ngerouting agar mempermudah merender tampilan
    <BrowserRouter>
      <Routes>
        <Route index element={<SpreadSyntaxAllow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
