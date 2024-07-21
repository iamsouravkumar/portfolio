import React, { useState, useEffect } from 'react'

const Footer = () => {

  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = window.scrollY;

    if (scrollTop + clientHeight >= scrollHeight - 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div >
      <div className={`footer ${sticky ? 'sticky' : ''}`}>
      <div className='footer-text'>Made with <span style={{ color: "red" }}>&#9829;</span> by Me. Copyright &copy; 2024 all rights reserved.</div></div>
    </div>
  )
}

export default Footer