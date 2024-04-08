import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import AddToDoPage from "./pages/AddToDoPage/AddToDoPage.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-todo" element={<AddToDoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
