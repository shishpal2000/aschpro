"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/mobileTimeLine.module.css";

const MobileTimeline = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });

  const steps = [
    "Application",
    "Interview & Assessments",
    "Additional Screening ",
    "Reference Check",
    "Selection & Offer",
  ];

  return (
    <div ref={ref} className={styles.timelineContainer}>
      <div className={styles.timeline}>
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={styles.step}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className={styles.number}>
              {`0${index + 1}`}
            </div>
            <div className={styles.circle}></div>
            <motion.h6
              className={styles.stepTitle}
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {step}
            </motion.h6>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MobileTimeline;
