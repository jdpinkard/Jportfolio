import React from 'react'
import { getImageURL } from '../../utils'
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Justin</h1>
            <p className={styles.description}>I'm a full-stack developer with 2 months of experience using React, HTML, and CSS. Reach out if you'd like to learn more!</p>
            <a href="mailto:justin.d.pinkard@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageURL("hero/heroImage.png")} alt="hero image of Justin" className={styles.heroImg} />
        <div className={styles.toolbar} />
        <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero
