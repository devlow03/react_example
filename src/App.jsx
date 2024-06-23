import Home from "./pages/Home";
import Nav from "./components/Nav";
import Search from "./pages/Search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ImageSlider from "./components/ImageSlider";
function App() {
  return (
    <Router>
      <Nav />
      <ImageSlider/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search/>}/>

      </Routes>
    </Router>
  );
}

export default App;
