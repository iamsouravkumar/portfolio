import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { ReactTyped } from "react-typed";
import Skill from './Skill';
import About from './About';
import Contact from './Contact'
import SocialMedia from './SocialMedia';
import Portfolio from './Portfolio';
import { motion } from 'framer-motion'

const Main = () => {

    return (
        <>
            <div className='all'>
                <h1 className='main-h1'>
                    {" "}
                    <ReactTyped strings={["Hey, Welcome to My Portfolio."]} typeSpeed={100} />
                </h1>
                <div className='container main'>
                    <div className='intro'>
                        <motion.div 
                            className="main-img"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            style={{ willChange: 'transform' }}>
                            <img src="../images/sourav-p.png" alt="Sourav" />
                        </motion.div>
                        <div className="text" >
                            <div className='h-text'>
                                <h4>Hello, it's Me</h4>
                                <h1>Sourav Kumar</h1>
                                {/* <h4>And I'm a <span style={{ color: "#01E3F4" }}>Full Stack Developer</span></h4> */}
                                <h4>And <span style={{ color: "#01E3F4" }}>
                                    <TypeAnimation
                                        sequence={[
                                            "I'm a Developer.",
                                            1200,
                                            "I'm a Designer.",
                                            1200,
                                            "I'm a Programmer.",
                                            1200,
                                        ]}
                                        speed={40}
                                        repeat={Infinity}
                                        style={{ fontSize: '1.5rem' }}
                                    />
                                </span></h4>
                            </div>

                            <div className='main-text my-4'>Hi, I'm a FullStack Web Developer who loves bringing ideas to life on the web. From designing cool interfaces to making sure everything works perfectly behind the scenes, I enjoy every part of the process. Let's create something awesome together!</div>
                            <SocialMedia />

                        </div>
                    </div>
                </div>
            </div>
            <Skill />
            <Portfolio />
            <About />
            <Contact />
        </>
    )
}

export default Main