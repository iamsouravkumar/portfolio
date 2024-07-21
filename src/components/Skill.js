import React from 'react'
import { motion } from 'framer-motion'
const Skill = () => {
  return (
    <>
      <div className="all">
        <div className="skill-container container">
          <h1 className='skill-h1'>My Skills</h1>
          <hr className="hr" />
          <div className='skill container'>

            <div className='img-container'>
              <motion.img src="../images/html.png" alt="HTML"
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{ willChange: 'transform' }} />
            </div>

            <div className='img-container'>
              <motion.img src="../images/css.png" alt="CSS"
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{ willChange: 'transform' }} />
            </div>

            <div className='img-container'>
              <motion.img src="../images/js.webp" alt="Javascript"
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{ willChange: 'transform' }} />
            </div>

            <div className='img-container'>
              <motion.img src="../images/react.png" alt="React.Js"
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{ willChange: 'transform' }} />
            </div>

            <div className='img-container'>
              <motion.img src="../images/node.png" alt="Node.Js"
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{ willChange: 'transform' }} />
            </div>

            <div className='img-container'>
              <motion.img src="../images/dbs.svg" alt="Database" whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{ willChange: 'transform' }} />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Skill