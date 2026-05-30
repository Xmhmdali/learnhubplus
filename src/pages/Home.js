import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>

      <div className="hero">
        <h1>Learn Anything, Anytime.</h1>
        <p>Explore courses taught by expert instructors and take your skills to the next level.</p>
        <Link to="/services" className="btn">Browse Courses</Link>
      </div>

      <div className="section">
        <h2>Popular Courses</h2>
        <div className="course-grid">

          <div className="card">
            <h3>Web Development</h3>
            <p>Learn HTML, CSS and JavaScript and build real websites from scratch.</p>
            <span className="tag">Beginner</span>
          </div>

          <div className="card">
            <h3>Data Science</h3>
            <p>Understand data, statistics and machine learning fundamentals.</p>
            <span className="tag">Intermediate</span>
          </div>

          <div className="card">
            <h3>UI/UX Design</h3>
            <p>Design user-friendly interfaces for web and mobile apps.</p>
            <span className="tag">Beginner</span>
          </div>

          <div className="card">
            <h3>Mobile Development</h3>
            <p>Build Android and iOS apps using React Native.</p>
            <span className="tag">Advanced</span>
          </div>

          <div className="card">
            <h3>Cybersecurity</h3>
            <p>Learn ethical hacking and network security basics.</p>
            <span className="tag">Intermediate</span>
          </div>

          <div className="card">
            <h3>Cloud Computing</h3>
            <p>Master AWS and Google Cloud platforms and services.</p>
            <span className="tag">Advanced</span>
          </div>

        </div>
      </div>

      <div className="stats">
        <div className="stat">
          <h2>10,000+</h2>
          <p>Students Enrolled</p>
        </div>
        <div className="stat">
          <h2>200+</h2>
          <p>Courses Available</p>
        </div>
        <div className="stat">
          <h2>50+</h2>
          <p>Expert Instructors</p>
        </div>
        <div className="stat">
          <h2>95%</h2>
          <p>Satisfaction Rate</p>
        </div>
      </div>

    </div>
  );
}

export default Home;
