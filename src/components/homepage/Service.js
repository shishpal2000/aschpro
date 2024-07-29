"use client";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/home.module.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faThumbsUp, faIndustry, faAward } from "@fortawesome/free-solid-svg-icons";

const Service = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className={`${styles.pd_wrapper} ${styles.positionRelative}`}>
      <div className="container" ref={ref}>
        <motion.div
          className={`row ${styles.marginTopService}`}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <div className="col-lg-6 col-md-12 col-sm-12">
            <motion.img
              src="images/Left.png"
              alt=""
              className="img-fluid"
              variants={imageVariants}
            />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <motion.div className={styles.bg_card_w} variants={textVariants}>
              <p className={styles.orangeText}>Direct Hiring Solutions</p>
              <h2 className={`${styles.heading_tag_about} ${styles.capitalize}`}>
              Move Faster and Hire Smarter with an advanced aschpro Hiring Platform for modern workspace
              </h2>
              <p className={styles.greyText1}>
              Learn, Leap and Lead! Embrace Endless Possibilities, we specialize in sourcing top candidates with sought-after skills and extensive experience, from accountants to CFOs.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className={styles.services_section1}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <motion.div
                className={`${styles.services_box1} d-flex py-2`}
                variants={itemVariants}
              >
                <div className={`${styles.icon} ${styles.marginRightCustom}`}>
                {/* <FontAwesomeIcon icon={faThumbsUp} className={styles.gayColor} /> */}
                    
                  </div>
                  <div>
                <h3 className={styles.h3}>Practical Approach</h3>
                <p className={styles.greyText222}>
                  Join a practical course on real-world application for success
                </p>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <motion.div
                className={`${styles.services_box1} d-flex py-2`}
                variants={itemVariants}
              >
                <div className={`${styles.icon} ${styles.marginRightCustom}`}>
                {/* <FontAwesomeIcon  icon={faIndustry} className={styles.gayColor} /> */}
               
                  </div>
                  <div>
                <h3 className={styles.h3}>Industry Insights</h3>
                <p className={styles.greyText222}>
                  Stay ahead with strategic insights and navigate industry
                  shifts
                </p>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <motion.div
                className={`${styles.services_box1} d-flex py-2`}
                variants={itemVariants}
              >
                <div className={`${styles.icon} ${styles.marginRightCustom}`}>
                {/* <FontAwesomeIcon  icon={faAward} className={styles.gayColor} /> */}
               
                  </div>
                  <div>
                <h3 className={styles.h3}>Career Opportunities</h3>
                <p className={styles.greyText222}>
                  aschpro advanced programs lead to various rewarding career
                  paths
                </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
