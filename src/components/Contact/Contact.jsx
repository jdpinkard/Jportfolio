import React from 'react'
import { getImageURL } from '../../utils'
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.subContainer}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <a href='mailto:justin.d.pinkard@gmail.com'><img src={getImageURL("contact/emailIcon.png")} alt="Email Icon" /></a>
                    <a href='mailto:justin.d.pinkard@gmail.com'>justin.d.pinkard@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <a href='https://www.linkedin.com/in/jdpinkard/' target="_blank"><img src={getImageURL("contact/linkedinIcon.png")} alt="LinkedIn Icon" /></a> 
                    <a href='https://www.linkedin.com/in/jdpinkard/' target="_blank">linkedin.com/in/jdpinkard</a>
                </li>
                <li className={styles.link}>
                    <a href='https://github.com/jdpinkard' target="_blank"><img src={getImageURL("contact/githubIcon.png")} alt="Github Icon" /></a>
                    <a href='https://github.com/jdpinkard' target="_blank">github.com/jdpinkard</a>
                </li>
            </ul>
        </div>
        <a href='https://www.figma.com/file/tkDs3aeBaqvF47hD063LSH/Untitled?type=design&node-id=0-1&mode=design&t=5ioyZdcqkmRG6uy7-0' target="_blank">Original Figma Design by CodeComplete</a>
    </footer>
  )
}

export default Contact
