import React from 'react'

const Skill = () => {
  return (
    <>
      <h1 style={{ color: "white", textAlign: "center", fontFamily: "calibri" }} className='container skill-h1'>My Skills</h1>
      <div className='skill container'>
        <div className='img-container'>
          <img src="../images/html.png" alt="HTML" />
        </div>
        <div className='img-container'>
          <img src="../images/css.png" alt="CSS" />
        </div>
        <div className='img-container'>
          <img src="../images/js.webp" alt="CSS" />
        </div>
        <div className='img-container'>
          <img src="../images/react.png" alt="CSS" />
        </div>
        <div className='img-container'>
          <img src="../images/node.png" alt="CSS" />
        </div>
        <div className='img-container'>
          <img src="../images/db.png" alt="CSS" />
        </div>

      </div>
    </>
  )
}

export default Skill