import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';

const ProjectCard = ({ title, description, image, link }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="portfolio-card"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        style={{ willChange: 'transform' }}
        onClick={() => setModalOpen(true)}
      >
        <div className="portfolio-info">
          <img className='portfolio-image' src={image} alt={title} />
          <h3>{title}</h3>
          <p>{description.length > 100 ? description.slice(0, 100) + '...' : description}</p>
        </div>
      </motion.div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        content={
          <>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="modal-btn"><button className='btn btn-success'><a href={link} target="_blank" rel="noopener noreferrer">View Project</a></button>
            <button className="btn btn-success" onClick={()=>setModalOpen(false)}>Close</button></div>
          </>
        }
      />
    </>
  );
};

export default ProjectCard;