"use client";

import { usePathname } from "next/navigation";
import styles from '../../styles/blogDetails.module.css';
import React, { useEffect, useState } from "react";

const BlogSection = () => {
  const [blogData, setBlogData] = useState(null);
  const pathName = usePathname();

  useEffect(() => {
    if (pathName) {
      const slug = pathName.split("/").pop(); 

      if (slug) {
        fetch(`https://ashpro-backend.onrender.com/api/blogs/get-blog/${slug}`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => setBlogData(data.data))
          .catch(error => console.error('Error fetching blog data:', error));
      } else {
        console.error('Slug is undefined');
      }
    }
  }, [pathName]);

  if (!blogData) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.careerWrapper}>
      <div className="container">
        <p className={styles.carryp1}>Features Blogs</p>
        <h1 className={styles.carryh1} style={{ textTransform: 'capitalize' }}>{blogData.title}</h1>
      </div>
    </div>
  );
};

export default BlogSection;
