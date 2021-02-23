import './App.css';
import Header from "./Header";
import SectionMenu from "./SectionMenu";
import SectionArchives from "./SectionArchives";
import Footer from "./Footer";
import Modal from "./Modal";
import Carousel from "./Carousel";
import {useState} from "react";
import Images from './Images';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button onClick={()=> setShow(true)}>show modal</button>
      <Header/>
      <SectionMenu/>
      <SectionArchives/>
      <Images/>
      <Footer/>
    </div>
  );
}

export default App;
