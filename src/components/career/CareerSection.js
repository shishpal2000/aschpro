import React from 'react'
import styles from '../../styles/career.module.css'

const CareerSection = () => {
  return (
    <div className={styles.careerWrapper}>
    <div className="container ">
      {/* <p className={styles.carryp1}>we align opportunities with visionary leaders</p> */}
      <p className={styles.carryp1}>Your Path to Succes </p>
      {/* <h2 className={styles.carryh1}>Driving organizational and industry<br/> success through leadership</h2> */}
      <h1 className={styles.carryh1} style={{textTransform:'capitalize'}}>Aschpro: Connecting Talent with Top Employers for a Brighter Future</h1>
    </div>
  </div>
  )
}

export default CareerSection