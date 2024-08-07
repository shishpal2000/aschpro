"use client";

import { usePathname } from "next/navigation";
import styles from '../../styles/blogDetails.module.css'
import React, { useEffect, useState } from "react";

const BlogSection = () => {
  const [blogData, setBlogData] = useState(null);
  const pathName = usePathname();

  useEffect(() => {
    if (pathName) {
      const slug = pathName.split("/").pop(); // Extract the slug from the pathname

      fetch(`https://aschpro.mediadynox.in/api/blog/${slug}`)
        .then(response => response.json())
        .then(data => setBlogData(data))
        .catch(error => console.error('Error fetching blog data:', error));
    }
  }, [pathName]);

  if (!blogData) {
    return ;
  }

  return (
    <div className={styles.careerWrapper}>
    <div className="container">
      <p className={styles.carryp1}>Features Blogs</p>
      <h1 className={styles.carryh1} style={{textTransform:'capitalize'}}>{blogData.title}</h1>
    </div>
  </div>
  )
}

export default BlogSection