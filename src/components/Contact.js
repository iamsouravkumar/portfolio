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
    <>
    <h1 style={{ color: "white", textAlign: "center", fontFamily: "calibri", marginTop: "5rem"}}>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="background">
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
                      <input className="app-form-control" placeholder="NAME" value="Please fill out the form For contact Us." />
                    </div>
                    <div className="app-form-group">
                      <input className="app-form-control" placeholder="NAME" type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="app-form-group">
                      <input className="app-form-control" placeholder="EMAIL ID" type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="app-form-group message">
                      <input className="app-form-control" placeholder="MESSAGE" id="message" name="message" value={formData.message} onChange={handleChange} required />
                    </div>
                    <div className="app-form-group buttons">
                      <button type="submit" className="app-form-button">Send</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      {showPopup && <Popup message={popupMessage} onClose={closePopup} />}
    </>
  );
};

export default Contact;