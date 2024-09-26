import React from "react";
import styles from "../../styles/career.module.css";

const ServiceSection = () => {
  return (
    <div className={styles.careerWrapper}>
      <div className="container">
        <h1 className={styles.carryp1}>Contract Staffing</h1>
        <h1
          className={`${styles.carryh1} col-lg-6`}
          style={{ textTransform: "capitalize" }}
        >
          End-to-End Recruitment Solutions
        </h1>
      </div>
    </div>
  );
};

export default ServiceSection;
