import React from 'react'
import ProjectCard from './ProjectCard';

const Project = () => {
  const myProjects = [
    {
      title: 'Weather App with daily and hourly forecasts.',
      description: 'It is an API-based weather app that shows the real-time weather across the world. it also shows the daily and hourly forecasts. it contains all the features that a weather app must have such as humidity, wind speed, heat index, etc.',
      image: '../images/weather.jpg',
      link: 'https://iamsouravkumar.github.io/weather_forecast_app/'
    },
    {
      title: 'iNoteBook - Notes on Cloud.',
      description: 'It is a cloud-based note-saving or MERN project. where users can easily add, edit, delete, and access their notes quickly and easily from anywhere in the world as it uses cloud database storage.',
      image: '../images/note.jpg',
      link: 'https://github.com/iamsouravkumar/iNoteBook_Notes_on_Cloud'
    },
    {
      title: 'News App - API Based',
      description: 'It is an API-based web app that uses the external API for fetching the news and shows to the user. it also contains categories that enable the user to choose their desired category.',
      image: '../images/news.jpg',
      link: 'https://github.com/iamsouravkumar/news_app'
    },
    {
      title: 'Data Visualisation Dashboard',
      description: 'It is a graphical representation project that fetches data from their API (backend) and shows it to the user in the form of a pie chart. it also includes filter functionality tht enables user to filter data.',
      image: '../images/ddb.jpg',
      link: 'https://github.com/iamsouravkumar/data_visualisation_dashboard'
    },
    {
      title: 'Personal Portfolio',
      description: 'It is my personal portfolio website totally made up of React reusable components. here you can check my skills and projects on this website',
      image: '../images/portfolio.jpg',
      link: 'https://iamsourav.netlify.app'
    },
    {
      title: 'Demo School Website',
      description: 'It is a version of a demo school website made with react and all the data present in the website are the demo data and are not related to any real data.',
      image: '../images/school.jpg',
      link: 'https://github.com/iamsouravkumar/school_website_react_js'
    },
    {
      title: 'Texter - Text Manipulator',
      description: 'It is a text editor tool that contains all the functionality that a text editor tool must have. with the help of its features, users can easily manipulate their text.',
      image: '../images/text.jpg',
      link: 'https://texterr.netlify.app'
    }
  ];
  return (
    <>
      <div className="all">
        <div className="container portfolio">
          <h1 className='portfolio-h1'>My Projects</h1>
          <hr className='hr' />
          <div className="portfolio-grid">
            {myProjects.map(project => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
