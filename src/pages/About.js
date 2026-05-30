import React from 'react';

function About() {
  return (
    <div>

      <div className="page-header">
        <h1>About LearnHub+</h1>
        <p>Our story, our mission and our team.</p>
      </div>

      <div className="content-section">

        <div className="block">
          <h2>Who We Are</h2>
          <p>LearnHub+ is an online learning platform dedicated to making quality education accessible to everyone. We believe that learning should not be limited by location, time or budget. Our platform offers a wide range of courses across technology, design, business and more.</p>
          <p>Founded in 2020, LearnHub+ has grown to serve over 10,000 students from more than 30 countries around the world.</p>
        </div>

        <div className="block">
          <h2>Our Mission</h2>
          <p>Our mission is simple: give everyone the tools they need to grow. Whether you are a student looking to boost your grades, a professional wanting to switch careers, or just someone curious about a new topic, LearnHub+ is here for you.</p>
        </div>

        <div className="block">
          <h2>Why Choose Us?</h2>
          <div className="why-grid">
            <div className="why-card">
              <h3>Expert Instructors</h3>
              <p>All our courses are taught by verified professionals with real industry experience.</p>
            </div>
            <div className="why-card">
              <h3>Learn at Your Pace</h3>
              <p>No deadlines, no pressure. Access your courses whenever it suits you.</p>
            </div>
            <div className="why-card">
              <h3>Certificates</h3>
              <p>Earn certificates upon completion that you can share on your resume or LinkedIn.</p>
            </div>
            <div className="why-card">
              <h3>Community Support</h3>
              <p>Join our student forums and get help from peers and instructors anytime.</p>
            </div>
          </div>
        </div>

        <div className="block">
          <h2>Meet The Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="avatar">MA</div>
              <h3>Mohamad Ali</h3>
              <p>Founder and Lead Developer</p>
            </div>
            <div className="team-card">
              <div className="avatar">SR</div>
              <h3>Sara Rami</h3>
              <p>Head of Content</p>
            </div>
            <div className="team-card">
              <div className="avatar">KJ</div>
              <h3>Karim Jamal</h3>
              <p>UI/UX Designer</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default About;
