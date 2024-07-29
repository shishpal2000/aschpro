import React from 'react'
import styles from '../../styles/blogListing.module.css'

const BlogSection = () => {
  return (
    <div className={styles.careerWrapper}>
    <div className="container">
      <p className={styles.carryp1}>Browse Our Blogs</p>
      <h1 className={styles.carryh1} style={{textTransform:'capitalize'}} >Explore our news and resources to gain insights and knowledge.</h1>
  
    </div>
  </div>
  )
}

export default BlogSection