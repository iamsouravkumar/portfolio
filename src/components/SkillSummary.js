import React from 'react';
import { motion } from 'framer-motion';

const SkillSummary = () => {
  return (
    <>
      <div className="all">
        <div className="skill-summary container">
          <h1 style={{ color: "white", textAlign: "center", fontFamily: "calibri" }} className='container'>My Skills</h1>
          <div className='skill container'>

            <div className='img-container'>
              <motion.img src="../images/html.webp" alt="HTML"
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
                style={{ willChange: 'transform', height: '150px', width: '150px', borderRadius: '50%' }} />
            </div>

            <div className='img-container'>
              <motion.img src="../images/dbs.svg" alt="Database" whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{ willChange: 'transform', height: '140px', width: '140px' }} />
            </div>

          </div>
          <div className='skills-def'>
            <ul>
              <li>
                <strong>HTML:</strong>
                <ul>
                  <li>2 years of experience</li>
                  <li>Proficient in creating well-structured web pages</li>
                  <li>Strong understanding of semantic HTML and accessibility standards</li>
                </ul>
              </li>
              <li>
                <strong>CSS:</strong>
                <ul>
                  <li>2 years of experience</li>
                  <li>Skilled in crafting responsive and visually appealing layouts</li>
                  <li>Expertise in using CSS frameworks like Bootstrap and Flexbox</li>
                </ul>
              </li>
              <li>
                <strong>JavaScript:</strong>
                <ul>
                  <li>6 months of experience</li>
                  <li>Capable of adding interactivity to web pages</li>
                  <li>Knowledge of ES6+ features and asynchronous programming</li>
                </ul>
              </li>
              <li>
                <strong>ReactJS:</strong>
                <ul>
                  <li>6 months of experience</li>
                  <li>Experienced in building dynamic user interfaces</li>
                  <li>Familiar with component-based architecture and state management</li>
                </ul>
              </li>
              <li>
                <strong>Node.js:</strong>
                <ul>
                  <li>6 months of experience</li>
                  <li>Proficient in building server-side applications</li>
                  <li>Knowledge of RESTful APIs and middleware</li>
                </ul>
              </li>
              <li>
                <strong>MongoDB:</strong>
                <ul>
                  <li>6 months of experience</li>
                  <li>Skilled in working with NoSQL databases</li>
                  <li>Experienced in creating and managing databases for full-stack applications</li>
                </ul>
              </li>
              <li>
                <strong>Tailwind CSS:</strong>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </li>
              <li>
                <strong>Bootstrap:</strong>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillSummary;
