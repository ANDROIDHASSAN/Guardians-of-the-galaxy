import React from 'react';
import Hassan from "../Images/hassanimage.jpeg";
import Rahul from "../Images/rahul.jpeg";
import Juber from "../Images/juber.jpeg";
import './About.css';

const About = () => {
  const teamMembers = [
    {
      image : Hassan,
      name: 'Hassan Kazi',
      role: 'Team Leader (Full Stack) ',
        description: 'Hassan is responsible for leading the team and managing Front End Developement using React.js and Three.js.',
    },
    {
      image: Rahul,
      name: 'Rahul Das',
      role: 'Backend Developer',
      description: 'Rahul is responsible for  managing backend development using Node.js and Express. He ensures that all API calls and server-side logic are flawless.',
    },
   
    {
      image: Juber,
      name: 'Juber Shaikh',
      role: 'Front End Developer',
      description: 'Juber is responsible for managing Front End Developement using React.js ',
    },

  ];

  return (
    <div className="about-container">
      <header>
        <h1>About Our Orrery Project</h1>
        <p>
          Our mission is to provide real-time tracking and visualization of near-Earth objects (NEOs). Using data from NASA’s Near-Earth Object Program, we’ve created an interactive Orrery that showcases the position of planets and NEOs in 3D space.
        </p>
      </header>

      <section className="team">
        <h2>Meet the Team</h2>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              {member.image && <img src={member.image} alt={member.name} className="profile-image" />}
              <h3>{member.role}</h3>
              <h4>{member.role}</h4>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>We hope our project helps you better understand and visualize the objects moving within our solar system. Stay tuned for more updates!</p>
      </footer>
    </div>
  );
};

export default About;
