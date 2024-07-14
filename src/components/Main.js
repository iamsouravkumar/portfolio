import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { ReactTyped } from "react-typed";
import Skill from './Skill';
import About from './About';

const Main = () => {

    return (
        <>
        <div className='all'>
            <h1 style={{ color: "gold", fontFamily: "calibri", textAlign: "center", fontSize: "2rem", marginTop: "5rem" }} className='main-h1'>
                {" "}
                <ReactTyped strings={["Hey, Welcome to My Portfolio."]} typeSpeed={100} />
            </h1>
            <div className='container main'>
                <div className='intro'>
                <div className="main-img">
                        <img src="../images/sourav-p.png" alt="Sourav" />
                    </div>
                    <div className="text" >
                        <span className='h-text'>
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
                        </span>
                        <div>

                            <div className='main-text my-4'>Hi, I'm a full stack web developer who loves bringing ideas to life on the web. From designing cool interfaces to making sure everything works perfectly behind the scenes, I enjoy every part of the process. Let's create something awesome together!</div>
                            <div className="social">
                                <a href="http://facebook.com/sourav45k"><i className="fa-brands fa-facebook"></i></a>
                                <a href="https://instagram.com/iam_souravkumar"><i className="fa-brands fa-instagram"></i></a>
                                <a href="/"><i className="fa-brands fa-twitter"></i></a>
                                <a href="/"><i className="fa-brands fa-linkedin"></i></a>
                                <a href="http://github.com/iamsouravkumar"><i className="fa-brands fa-github"></i></a>
                            </div>
                            <a href="https://drive.google.com/file/d/1lWugghfGeuSW7RRuzstf0_N_Nh-_gtMN/view?usp=sharing"><button type="button" className="btn btn-success my-4" style={{ backgroundColor: "#01E3F4", color: "black", borderRadius: "5rem", border: "none", padding: "0.5rem" }}>Download CV</button></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <Skill/>
            <About/>
        </>
    )
}

export default Main