import "./App.css";
import SearchPage from "./components/SearchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./components/Title";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/title/:id" element={<Title />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
