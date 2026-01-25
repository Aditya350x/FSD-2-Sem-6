import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

export default function SinglePageApp() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home Exp-3</Link> |{" "}
        <Link to="/about">About Exp-3</Link> |{" "}
        <Link to="/contact">Contact Exp-3</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home Exp-3 />} />
        <Route path="/about" element={<About Exp-3 />} />
        <Route path="/contact" element={<Contact Exp-3/>} />
      </Routes>
    </BrowserRouter>
  );
}