import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Popup from './Popup';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('iamsourav', 'template_email', formData, 'D2RcYQlTjBavPsi7G')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setPopupMessage('Message sent successfully!');
        setShowPopup(true);
        setFormData({
          name: '',
          email: '',
          message: '',
        });

      }, (error) => {
        console.log('FAILED...', error);
        setPopupMessage('Failed to send message.');
        setShowPopup(true);
      });
  };
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='container contact'>
      <h1 style={{ fontFamily: "sans-serif", textAlign:"center" }}>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Name:</label>
            <input type="text" className="form-control" id="exampleInputPassword1 message" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address:</label>
            <input type="email" className="form-control" id="exampleInputEmail1 email" name="email" aria-describedby="emailHelp" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message:</label>
            <textarea className="form-control" id="exampleFormControlTextarea1 message" name="message" type="message" rows="3" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <div className="button-group">
          <button type="submit" className="btn btn-primary">Send</button>
          </div>
        </form>
        {/* <div className="background">
          <div className="container-2 container">
            <div className="screen">
              <div className="screen-body">
                <div className="screen-body-item left">
                  <div className="app-title">
                    <span style={{ fontFamily: "sans-serif" }}>CONTACT</span>
                    <span style={{ fontFamily: "sans-serif" }}>US</span>
                  </div>
                  <div className="app-contact">CONTACT INFO : +91 8929174543</div>
                </div>
                <div className="screen-body-item">
                  <div className="app-form">
                    
                    <div className="app-form-group">
                      <input className="app-form-control" placeholder="NAME" type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="app-form-group">
                      <input className="app-form-control" placeholder="EMAIL ID" type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="app-form-group message">
                      <input className="app-form-control" placeholder="MESSAGE" id="message" name="message" value={formData.message} onChange={handleChange} required />
                    </div>
                    <div className="app-form-group-buttons">
                      <button type="submit" className="app-form-button">Send</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      {showPopup && <Popup message={popupMessage} onClose={closePopup} />}
    </div>
  );
};

export default Contact;