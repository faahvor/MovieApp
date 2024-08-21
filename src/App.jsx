import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { Error404 } from "./pages/Error";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* nested route */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<Error404/>} />
      </Routes>
      <footer className="text-center font-semibold">Created by Avuwa </footer>
    </div>
  );
}

export default App;
