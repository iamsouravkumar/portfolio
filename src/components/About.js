import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <>
      <div className="all">
        <div className="about-container container">
          <h1 style={{ color: "white", textAlign: "center", fontFamily: "poppins" }} className='about-h1'>About Me</h1>
          <hr className="hr" />
          <div className='container about'>
            
            <motion.div
              className="about-img"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              style={{ willChange: 'transform' }}><img src="../images/sourav-p.png" alt="Sourav" />
              </motion.div>

            <div className='about-text'><p>Hey, I am <span style={{ color: "#01E3F4" }}>Sourav</span> from <span style={{ color: "#01E3F4" }}>Ghaziabad, UttarPradesh.</span> I am a dedicated <span style={{ color: "#01E3F4" }}>Full Stack Developer</span> with expertise in building dynamic, responsive web applications. With a strong foundation in both front-end and back-end technologies, I thrive in creating seamless user experiences and efficient, scalable solutions. </p><p>My toolkit includes HTML, CSS, JavaScript, React, Node.js, and various other frameworks and libraries. Passionate about continuous learning and staying current with industry trends, I am committed to delivering high-quality code and innovative projects.</p></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About