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
              <motion.img src="../images/html.webp" 
              alt="HTML"
              
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{ willChange: 'transform', height: '150px', width: '150px' }} />
            </div>

            <div className='img-container'>
              <motion.img src="../images/css.webp" alt="CSS"
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{ willChange: 'transform', height: '150px', width: '150px' }} />
            </div>

            <div className='img-container'>
              <motion.img src="../images/js.webp" alt="Javascript"
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{ willChange: 'transform', height: '150px', width: '150px' }} />
            </div>

            <div className='img-container'>
              <motion.img src="../images/react.webp" alt="React.Js"
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{ willChange: 'transform', height: '180px', width: '180px' }} />
            </div>

            <div className='img-container'>
              <motion.img src="../images/node.webp" alt="Node.Js"
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{ willChange: 'transform', height: '180px', width: '180px' }} />
            </div>

            <div className='img-container'>
              <motion.img src="../images/tailwind.png" alt="Tailwind CSS" whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{ willChange: 'transform', height: '160px', width: '160px' }} />
            </div>
            
            <div className='img-container'>
              <motion.img src="../images/bootstrap.png" alt="Bootstrap" whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{ willChange: 'transform', height: '150px', width: '150px', borderRadius:'50%' }} />
            </div>

            <div className='img-container'>
              <motion.img src="../images/dbs.svg" alt="Database" whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{ willChange: 'transform', height: '140px', width: '140px' }} />
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Skill