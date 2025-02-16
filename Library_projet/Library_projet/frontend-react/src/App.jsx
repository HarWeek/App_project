import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddBook from "./books/AddBook";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addbook" element={<AddBook />} />
      </Routes>
    </div>
  );
}

export default App;
