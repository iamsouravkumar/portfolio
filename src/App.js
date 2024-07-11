import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Skill from './components/Skill';
import Contact from './components/Contact';

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
      element: <><Navbar/><Skill /></>,
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
      <Footer/>
    </>
  );
}

export default App;
