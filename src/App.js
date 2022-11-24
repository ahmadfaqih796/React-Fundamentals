import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Example from "./materi/1-Styling/Example";
import Parent from "./materi/2-Child-to-Parent/Parent";

function App() {
  return (
		// ini buat ngerouting agar mempermudah merender tampilan
    <BrowserRouter>
      <Routes>
        <Route index element={<Example/>} />
				<Route path="/styling" element={<Example/>} />
				<Route path="/child-to-parent" element={<Parent/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
