"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/home.module.css";
import Rectangle from "../../../public/images/homePartner.png";

const Partner = () => {
  const [phone, setPhone] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: phone ? 0.2 : 0.5, // Adjust this value to control the visibility threshold
  });
  // hidden
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setPhone(true);
      } else {
        setPhone(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imageVariants = {
    hidden: { opacity: phone ? 1 : 0, y: phone ? "" : -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const leftSectionVariants = {
    hidden: { opacity: phone ? 1 : 0, x: phone ? "" : -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const rightSectionVariants = {
    hidden: { opacity: phone ? 1 : 0, x: phone ? "" : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const boxVariants = {
    hidden: { opacity: phone ? 1 : 0, y: phone ? "" : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className={styles.partner_wrapper}
    >
      <div className="container">
        <div className={`row align-items-center ${styles.py_4} ${styles.px_4}`}>
          <motion.div
            className="col-lg-4 col-md-12 col-sm-12 align-self-center"
            variants={leftSectionVariants}
          >
            <p className={styles.heading1}>EMPLOYER BENEFITS</p>
            {phone ? (
              <h3 className={styles.main_heading}>Why Partner with aschpro?</h3>
            ) : (
              <h6 className={styles.main_heading}>
                Why Partner with <br /> aschpro?
              </h6>
            )}

            <motion.div variants={boxVariants} className={styles.benefit_card1}>
              <h3 className={styles.heading_1}>
                Tailored Recruitment Solutions
              </h3>
              {phone ? (
                <p className={styles.para_1}>
                  Customizing hiring services to meet your needs
                </p>
              ) : (
                <p className={styles.para_1}>
                  Customizing hiring services <br /> to meet your needs
                </p>
              )}
            </motion.div>
            <motion.div variants={boxVariants} className={styles.benefit_card2}>
              <h3 className={styles.heading_1}>
                Comprehensive Candidate Vetting
              </h3>
              {phone ? (
                <p className={styles.para_1}>
                  Doing thorough evaluation of the candidates
                </p>
              ) : (
                <p className={styles.para_1}>
                  Doing thorough evaluation of <br /> the candidates
                </p>
              )}
            </motion.div>
          </motion.div>
  
          <motion.div
            className={`col-lg-4 col-md-12 col-sm-12 ${styles.centeredImage}`}
            variants={imageVariants}
          >
            <div>
              <Image
                src={Rectangle}
                alt="Business Meeting"
                className="img-fluid"
              />
            </div>
          </motion.div>

          <motion.div
            className={`col-lg-4 col-md-12 col-sm-12 ${styles.py_4} px-4 d-flex justify-content-between flex-column`}
            variants={rightSectionVariants}
          >
            <motion.div variants={boxVariants} className={styles.benefit_card3}>
              <h3 className={styles.heading_1}>
                Access to a Diverse Talent Pool
              </h3>
              <p className={styles.para_1}>
                Broad range of qualified and diversified candidates
              </p>
            </motion.div>
            <motion.div variants={boxVariants} className={styles.benefit_card4}>
              <h3 className={styles.heading_1}>
                Dedicated Support and Partnership
              </h3>
              <p className={styles.para_1}>
                Committing proper assistance and collaboration
              </p>
            </motion.div>
            <motion.div variants={boxVariants} className={styles.benefit_card5}>
              <h3 className={styles.heading_1}>Benefit from Confidentiality</h3>
              {phone ? (
                <p className={styles.para_1}>
                  Ensure confidentiality amidst your job search.
                </p>
              ) : (
                <p className={styles.para_1}>
                  Ensure confidentiality amidst your job
                  <br /> search.
                </p>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Partner;
