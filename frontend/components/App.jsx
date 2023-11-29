import { Routes, Route, Link } from "react-router-dom";
import Form from "./Form";

export default function App({ home }) {
  console.log("Home", home);

  return (
    <div className="">
      <nav className="tw-p-3">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </div>
  );
}
