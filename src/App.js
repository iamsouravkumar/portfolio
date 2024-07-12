import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import SkillSummary from './components/SkillSummary';
import ChatButton from './components/ChatButton';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home /></>,
    },
    {
      path: "/home",
      element: <><Navbar/><Home /></>,
    },
    {
      path: "/main",
      element: <><Navbar/><Main /></>,
    },
    {
      path: "/skill",
      element: <><Navbar/><SkillSummary /></>,
    },
    {
      path: "/about",
      element: <><Navbar/><About /></>,
    },
    {
      path: "/contact",
      element: <><Navbar/><Contact /></>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ChatButton/>
      <Footer/>
    </>
  );
}

export default App;
