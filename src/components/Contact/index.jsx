import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState } from 'react'
import { useRef } from 'react'
import emailjs from "@emailjs/browser"
import Loader from 'react-loaders'

const Contact = () => {
    const [letterClass] = useState('text-animate')
    const form = useRef()
  
  
    const sendEmail = (e) => {
      e.preventDefault()
  
      emailjs
        .sendForm('gmail', 'template_cddizdl', form.current, '_5gksSPJkT1Z7mK6m')
        .then(
          () => {
            alert('Message successfully sent!')
            window.location.reload(false)
          },
          () => {
            alert('Failed to send the message, please try again')
          }
        )
    }
  
    return (
      <>
        <div className="container contact-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={10}
              />
            </h1>
            
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input placeholder="Name" type="text" name="name" required />
                  </li>
                  <li className="half">
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      required
                    />
                  </li>
                  <li>
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    />
                  </li>
                  <li>
                    <textarea
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
        
      <Loader type="pacman" />
      </>
    )
}

export default Contact
