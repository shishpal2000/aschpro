"use client";

import { usePathname } from "next/navigation";
import styles from '../../styles/blogDetails.module.css';
import React, { useEffect, useState } from "react";

const JobSection = () => {
  const [jobData, setJobData] = useState(null);
  const pathName = usePathname();

  useEffect(() => {
    if (pathName) {
      const slug = pathName.split("/").pop(); // Extract the job ID from the pathname

      fetch(`https://api.aschpro.com/api/jobs/get-job/${slug}`)
        .then(response => response.json())
        .then(responseData => {
          if (responseData.success) {
            setJobData(responseData.data); // Access job details from the `data` property
          } else {
            console.error('Error: ', responseData.message);
          }
        })
        .catch(error => console.error('Error fetching Job data:', error));
    }
  }, [pathName]);

  if (!jobData) {
    return <p>Loading...</p>; // Display loading text while fetching data
  }

  return (
    <div className={styles.careerWrapper}>
      <div className="container">
        <p className={styles.carryp1}>Career Details</p>
        <h1 className={styles.carryjh1}>{jobData.role}</h1>
        <p className={styles.carryp2}>{jobData.jobId} | {jobData.location}</p>
      </div>
    </div>
  );
};

export default JobSection;
