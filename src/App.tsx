import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Donate_Page from "./Pages/Donate";
function App() {
  return (
    <div className="w-full h-[100vh] bg-gray-800 font-poppins">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate_Page />} />
      </Routes>
    </div>
  );
}

export default App;
