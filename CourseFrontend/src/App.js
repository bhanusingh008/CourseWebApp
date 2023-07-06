import AddCourse from './components/AddCourse';
import Login from './components/Login';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import './components/style.css';
import SideBar from './components/Side-bar';
import Home from "./components/Home";
import AboutMe from './components/About';
import { Card } from 'react-bootstrap';
import Course from './components/Course';
import AllCourses from './components/AllCourses';
import { Col, Container, Row } from 'react-bootstrap';
import Header from './components/Header';import MiniDrawer from './components/Mui-nav';
;


function App() {

  const is_logged = false;

  return (
    <div style={{display:"flex", flexDirection:"column", height:"100vh"}}>
      <Header/>
    <div className='main' style={{display:"flex", flex:2, flexDirection:"row"}}>
      <Router>
      <SideBar/>
      <Container className='container'>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/add-course' element={<AddCourse />} exact />
          <Route path='/view-courses' element={<AllCourses/>} exact />
          <Route path='/about' element={<AboutMe />} exact />
          <Route path='/contact-me' element={<Contact />} exact />
          </Routes>
      </Container>
    </Router>
    </div>
    {/* <Login/> */}
    </div>
  );
};

export default App;
