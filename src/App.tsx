import Homepage from "./pages/Homepage";
import Cartpage from "./pages/Cartpage";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Cartpage" element={<Cartpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
