import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formMsg, setFormMsg] = useState('');

  function sendMessage() {
    if (name === '' || email === '' || subject === '' || message === '') {
      alert('Please fill in all fields.');
      return;
    }
    setFormMsg('Thank you ' + name + '! Your message has been sent.');
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  }

  return (
    <div>

      <div className="page-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you. Send us a message!</p>
      </div>

      <div className="contact-section">

        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>Have a question about a course? Want to partner with us? Fill out the form and we will get back to you as soon as possible.</p>
          <p>📍 Beirut, Lebanon</p>
          <p>📧 info@learnhubplus.com</p>
          <p>📞 +961 70 000 000</p>
        </div>

        <div className="contact-form">
          <input
            type="text"
            placeholder="Your Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Send Message</button>
          {formMsg && <p className="form-msg">{formMsg}</p>}
        </div>

      </div>

    </div>
  );
}

export default Contact;
