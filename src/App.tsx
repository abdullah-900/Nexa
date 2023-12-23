import Homepage from "./pages/Homepage";
import Cartpage from "./pages/Cartpage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Checkoutpage from "./pages/Checkoutpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Cartpage" element={<Cartpage />} />
         <Route path="/Checkoutpage" element={<Checkoutpage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
