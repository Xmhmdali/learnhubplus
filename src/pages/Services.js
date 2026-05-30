import React from 'react';

function Services() {
  return (
    <div>

      <div className="page-header">
        <h1>Our Services</h1>
        <p>Everything we offer to help you grow and succeed.</p>
      </div>

      <div className="section">
        <h2>What We Offer</h2>
        <div className="services-grid">

          <div className="service-card">
            <div className="service-icon">💻</div>
            <h3>Online Courses</h3>
            <p>Access over 200 courses across technology, design, business and more. All courses are self-paced so you can learn whenever you want.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">🎓</div>
            <h3>Certifications</h3>
            <p>Earn industry-recognized certificates when you complete a course. Add them to your LinkedIn profile or resume to stand out.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">👨‍🏫</div>
            <h3>Live Mentoring</h3>
            <p>Book one-on-one sessions with expert instructors who can guide you through difficult topics and help you reach your goals faster.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">💬</div>
            <h3>Community Forum</h3>
            <p>Join thousands of students in our active community. Ask questions, share projects and collaborate with peers from around the world.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3>Mobile Access</h3>
            <p>Learn on the go with our fully responsive platform. Access all your courses from any device including phones and tablets.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">📊</div>
            <h3>Progress Tracking</h3>
            <p>Track your learning progress with detailed dashboards. See how far you have come and what you still need to complete.</p>
          </div>

        </div>
      </div>

      <div className="stats">
        <div className="stat">
          <h2>200+</h2>
          <p>Courses Available</p>
        </div>
        <div className="stat">
          <h2>50+</h2>
          <p>Expert Instructors</p>
        </div>
        <div className="stat">
          <h2>30+</h2>
          <p>Countries Reached</p>
        </div>
        <div className="stat">
          <h2>Free</h2>
          <p>To Get Started</p>
        </div>
      </div>

    </div>
  );
}

export default Services;
