import { useState } from 'react';
import { Link } from 'react-router-dom';
import kLogo from '../../assets/klogo.jpg';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false); // state to track whether the popup should be displayed

  const handlePopup = () => {
    setShowPopup(!showPopup); // toggle the state when the button is clicked
  };

  const [letterClass] = useState('text-animate');
  const nameArray = ['e', 'e', 'n', 'a', 'n'];
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={kLogo} alt="Developer" />
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
        </h1>
        <h2>
          Fullstack Developer / React Expert / Black-Belt in Google-fu
          <div className="about-container">
            <button onClick={handlePopup}>ABT ME</button> {/* Add a button to trigger the popup */}
            {showPopup && ( // render the popup container if the state is true
              <div className="popup-container">
                <h1>
                  <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15} />
                </h1>
                <p>
                  I am a front end developer with a passion for creating interactive user experiences. I have a strong foundation in
                  HTML, CSS, JavaScript, and various frameworks. I am constantly learning and implementing the latest tools and
                  techniques in web development to create innovative solutions.
                </p>
                <p>
                  As a confident and curious developer, I am continuously seeking opportunities to improve and enhance my skills.
                </p>
                <p>
                  As a humble frontend developer, I understand the importance of working collaboratively with teams and listening
                  to feedback to create the best user experiences. I am committed to constantly learning and improving my skills to
                  deliver the highest quality of work.
                </p>
              </div>
            )}
          </div>
          <Link to="/contact" className="btn btn-bottom-stripe btn-bottom-stripe--blue">
            Contact me
          </Link>
        </h2>
      </div>

      <div className="stage-cube-cont">
            <div className='cubespinner'>
              <div className='face1'>
                <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
              </div>
              <div className='face2'>
                <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
              </div>
              <div className='face3'>
                <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
              </div>
              <div className='face4'>
                <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
              </div>
              <div className='face5'>
                <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
              </div>
              <div className='face6'>
                <FontAwesomeIcon icon={faNodeJs} color='#215732'/>
              </div>
            </div>
          </div>
        </div>
      )
    }


export default Home