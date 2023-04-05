import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  const projects = [
    {
      id: 1,
      title: 'Weather Dashboard',
      description: 'A weather app that displays the current weather and a 5-day forecast.',
      image: 'weather.jpg',
      link: 'https://flayouth.github.io/Weather-Dashboard/',
      github: null,
    },
    {
      id: 2,
      title: 'Team Profile Generator',
      description: 'A Node.js command-line application that generates an HTML page displaying information about a software engineering team.',
      image: 'teamgen.png',
      link: 'https://github.com/flayouth/team-profile-generator',
      github: 'https://github.com/flayouth/team-profile-generator',
    },
    {
      id: 3,
      title: 'Random Password Generator',
      description: 'A web application that generates a random password based on user input.',
      image: 'password.jpg',
      link: 'https://flayouth.github.io/Random-Password-Generator/',
      github: 'https://github.com/flayouth/Random-Password-Generator',
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </a>
          </div>
        ))}
      </div>
      <div className="github-links">
        {projects.map((project) => (
          <div key={project.id} className="github-link">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
