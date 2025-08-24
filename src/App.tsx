import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        // TODO3: เพิ่ม Route ไป Home ตรงนี้
        <Route path="/" element={} />
        // TODO4: เพิ่ม Route ไป UsersList ตรงนี้
        <Route path="/users" element={} />
      </Routes>
    </Router>
  );
}

export default App;
