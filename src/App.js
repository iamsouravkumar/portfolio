import './App.css';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import SkillSummary from './components/SkillSummary';
import ChatButton from './components/ChatButton';
import Portfolio from './components/Portfolio';
import { ToastContainer } from 'react-toastify';

function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <><Navbar/><Main /></>,
  //   },
  //   {
  //     path: "/home",
  //     element: <><Navbar/><Main /></>,
  //   },
  //   {
  //     path: "/portfolio",
  //     element: <><Navbar/><Portfolio/></>
  //   },
  //   {
  //     path: "/skill",
  //     element: <><Navbar/><SkillSummary /></>,
  //   },
  //   {
  //     path: "/about",
  //     element: <><Navbar/><About /></>,
  //   },
  //   {
  //     path: "/contact",
  //     element: <><Navbar/><Contact /></>,
  //   },
  // ]);

  return (
    <>
    <Router basename='/portfolio'>
      <div>
        <Navbar/>
        <Main/>
        <Portfolio/>
        <About/>
        <Contact/>
      <Routes>
      <Route path="/portfolio" element={<Main />} />
        <Route path="/home" element={<Main />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skill" element={<SkillSummary />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ToastContainer/>
      <ChatButton/>
      <Footer/>
      </div>
    </Router>
      {/* <RouterProvider router={router} />
      <ToastContainer/>
      <ChatButton/>
      <Footer/> */}
    </>
  );
}

export default App;