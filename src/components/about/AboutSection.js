import React from "react";
import styles from '../../styles/about.module.css'

const AboutSection = () => {
  return (
    <div className={styles.aboutWrapper}>
      <div className="container ">
        <p className={styles.aboutpp}>About Aschpro</p>
        <h1 className={styles.abouthhh} style={{textTransform:'capitalize'}}>Empowering businesses personalized recruitment solutions</h1>
      </div>
    </div>
  )
}

export default AboutSection;