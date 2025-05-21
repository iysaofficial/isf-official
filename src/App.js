import NavbarComp from "./components/NavbarComp";
import FooterComp from "./components/FooterComp";
import GalleryComp from './components/GalleryComp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutPage from './pages/about/AboutPage';


function App() {
  return (
    <>
    <NavbarComp></NavbarComp>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>     
        <Route path='/AboutPage' element={<AboutPage/>}/>
      </Routes>
    </Router>
    {/* <br></br>
    <br></br>
    <br></br>
    <br></br>
    <GalleryComp></GalleryComp>
    <br></br>
    <br></br>
    <br></br>
    <br></br> */}
    <FooterComp></FooterComp>
    </>
  );
}

export default App;
