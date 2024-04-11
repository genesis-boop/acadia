import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import AddToDoPage from "./pages/AddToDoPage/AddToDoPage.jsx";
import NotesPage from "./pages/NotesPage/NotesPage.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-todo" element={<AddToDoPage />} />
          <Route path="/notes" element={<NotesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
