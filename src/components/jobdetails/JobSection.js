"use client";

import { usePathname } from "next/navigation";
import styles from '../../styles/blogDetails.module.css'
import React, { useEffect, useState } from "react";

const JobSection = () => {
  const [jobData, setjobData] = useState(null);
  const pathName = usePathname();

  useEffect(() => {
    if (pathName) {
      const slug = pathName.split("/").pop(); // Extract the slug from the pathname

      fetch(`https://admin.aschpro.com/api/job/${slug}`)
        .then(response => response.json())
        .then(data => setjobData(data))
        .catch(error => console.error('Error fetching Job data:', error));
    }
  }, [pathName]);

  if (!jobData) {
    return ;
  }

  return (
    <div className={styles.careerWrapper}>
    <div className="container">
      <p className={styles.carryp1}>Careers Details</p>
      <h1 className={styles.carryjh1} style={{textTransform:'capitalize'}}>{jobData.role}</h1>
    <p className={styles.carryp2}>{jobData.job_id} | {jobData.location}</p>
    </div>

  </div>
  
  )
}

export default JobSection