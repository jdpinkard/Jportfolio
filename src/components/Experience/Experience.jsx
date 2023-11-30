import React from 'react'
import { getImageURL } from '../../utils'
import styles from "./Experience.module.css"
import skills from "../../data/skills.json";
import experience from "../../data/experience.json";

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>{
          skills.map((skill, id) => {
            return <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageURL(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
          })
          }</div>
        <ul className={styles.experience}>
          {
            experience.map((experienceItem, id) => {
              return <li key={id} className={styles.experienceItem}>
                <img src={getImageURL(experienceItem.imageSrc)} alt={`${experienceItem.organization} Logo`} />
                <div className={styles.experienceItemDetails}>
                  <h3>{`${experienceItem.role}`}</h3>
                  <h3>{`@ ${experienceItem.organization}`}</h3>
                  <p>{`${experienceItem.startDate} - ${experienceItem.endDate}`}</p>
                  <ul>
                    {experienceItem.experiences.map((xp, id) => {
                      return <li key={id}>{xp}</li>
                    })}
                  </ul>
                </div>
              </li>
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default Experience
