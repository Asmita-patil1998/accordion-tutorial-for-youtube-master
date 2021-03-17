// src/App.js
import React from 'react';
import './App.css';
import CarouselComponent from './Carousel.js';
import CourseModules from './CourseModules';
import TableComponent from './TableComponent';
import VideoComponent from './VideoComponent';
import Navbar2 from './Navbar2'
import { Navbar } from 'react-bootstrap';
import ContactUs from './ContactUs'
// import ImageComponent from './ImageComponent';
function App() {
  return (
    <div className="App">
        <Navbar2></Navbar2>
      {/* <CarouselComponent ></CarouselComponent>
      <CourseModules></CourseModules>
      <TableComponent></TableComponent> */}
      <ContactUs></ContactUs>
      {/* <ContactUs></ContactUs> */}
      {/* <ImageComponent></ImageComponent> */}
      {/* <VideoComponent></VideoComponent> */}
     
    </div>
  );
}

export default App;