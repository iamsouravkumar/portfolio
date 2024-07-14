import React from 'react';

const SkillSummary = () => {
  return (
    <>
      <div className="all">
        <h1 style={{ color: "white", textAlign: "center", fontFamily: "calibri" }} className='container'>My Skills</h1>
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
        <div className='container skills-summary'>
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
          </ul>
        </div>
      </div>
    </>
  );
}

export default SkillSummary;
