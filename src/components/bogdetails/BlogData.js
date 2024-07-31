"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "../../styles/blogDetails.module.css";
import blogMiddleImage from "../../../public/images/blogDetailmiddle.png";

const BlogDetail = () => {
  const [blogData, setBlogData] = useState(null);
  const pathName = usePathname();

  useEffect(() => {
    if (pathName) {
      const slug = pathName.split("/").pop(); // Extract the slug from the pathname

      fetch(`https://ad.aschpro.com/api/blog/${slug}`)
        .then(response => response.json())
        .then(data => setBlogData(data))
        .catch(error => console.error('Error fetching blog data:', error));
    }
  }, [pathName]);

  if (!blogData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <div className={`container ${styles.py_5}`}>
          <div className="row w-80">
          <div className={styles.middleBlogImage}>
            <img src={`https://ad.aschpro.com/storage/${blogData.image}`} className={styles.middleBlogImage} alt={blogData.imgalt} />
            </div>

            <div className={styles.fontSize}>
            <p dangerouslySetInnerHTML={{ __html: blogData.description }}></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
