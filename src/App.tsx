import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Board from "./pages/board";
import NotFound from "./pages/notfound";

function App() {
  return (
    <div className="w-screen h-dvh flex flex-col">
      <header className="bg-gray-300 w-full flex items-center justify-center p-5">
        <nav className="flex items-center justify-center space-x-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/board">Board</Link>
        </nav>
      </header>
      <main className="flex items-center justify-center h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/board" element={<Board />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
