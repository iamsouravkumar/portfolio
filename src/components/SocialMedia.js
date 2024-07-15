import React from 'react'

const SocialMedia = () => {
    return (
        <>
            <div className="wrapper">
                <div className="icon facebook">
                    <div className="tooltip">Facebook</div>
                    <span><a style={{color:"white"}} href="http://facebook.com/sourav45k"><i className="fa fa-facebook"></i></a></span>
                </div>
                <div className="icon twitter">
                    <div className="tooltip">Twitter</div>
                    <span><a style={{color:"white"}} href="/"><i className="fa fa-twitter"></i></a></span>
                </div>
                <div className="icon instagram">
                    <div className="tooltip">Instagram</div>
                    <span><a style={{color:"white"}} href="https://instagram.com/iam_souravkumar"><i className="fa fa-instagram"></i></a></span>
                </div>
                <div className="icon github">
                    <div className="tooltip">Github</div>
                    <span><a style={{color:"white"}} href="http://github.com/iamsouravkumar"><i className="fa fa-github"></i></a></span>
                </div>
                <div className="icon linkedin">
                    <div className="tooltip">LinkedIn</div>
                    <span><a style={{color:"white"}} href="http://"><i className="fa fa-linkedin"></i></a></span>
                </div>
            </div>
            <div className='button'>
                <a href="https://drive.google.com/file/d/1lWugghfGeuSW7RRuzstf0_N_Nh-_gtMN/view?usp=sharing"><button type="button" className="btn btn-success my-4" style={{ backgroundColor: "#01E3F4", color: "black", borderRadius: "5rem", border: "none", padding: "0.5rem" }}>Download CV</button></a>
            </div>
        </>
    )
}

export default SocialMedia