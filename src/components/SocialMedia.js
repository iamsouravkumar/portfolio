import React from 'react'
import { motion } from 'framer-motion'

const SocialMedia = () => {
    return (
        <>
            <div className="wrapper">
                <div className="icon facebook">
                    <div className="tooltip">Facebook</div>
                    <span><a style={{ color: "white" }} href="http://facebook.com/iamsourav2005"><i className="fa fa-facebook"></i></a></span>
                </div>
                <div className="icon twitter">
                    <div className="tooltip">Twitter</div>
                    <span><a style={{ color: "white" }} href="/"><i className="fa fa-twitter"></i></a></span>
                </div>
                <div className="icon instagram">
                    <div className="tooltip">Instagram</div>
                    <span><a style={{ color: "white" }} href="https://instagram.com/iam_souravkumar"><i className="fa fa-instagram"></i></a></span>
                </div>
                <div className="icon github">
                    <div className="tooltip">Github</div>
                    <span><a style={{ color: "white" }} href="http://github.com/iamsouravkumar"><i className="fa fa-github"></i></a></span>
                </div>
                <div className="icon linkedin">
                    <div className="tooltip">LinkedIn</div>
                    <span><a style={{ color: "white" }} href="http://"><i className="fa fa-linkedin"></i></a></span>
                </div>
            </div>
            <div>
                <a href="https://drive.google.com/file/d/1fzafJU2RK6XrIF5_0iEcf9ntvHAWKvxL/view?usp=sharing"><motion.button 
                type="button" 
                className="my-4 button" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{ willChange: 'transform' }}>Download CV</motion.button></a>
            </div>
        </>
    )
}

export default SocialMedia
