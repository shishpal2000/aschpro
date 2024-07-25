"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/home.module.css";
import style from "../../styles/services.module.css";
import Image from "next/image";
import contract from "../../../public/images/contract.png";

const Contract = () => {
  const [phone, setPhone] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

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

  const itemVariantsLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut", delay: 0.2 },
    },
  };

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut", delay: 0.2 },
    },
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
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

  return (
    <motion.div
      className={styles.about_wrapper}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      ref={ref}
    >
      <div className="container">
        <div className={`row ${styles.about_row}`}>
          <motion.div
            className="col-lg-6 d-flex align-items-center justify-content-center"
            variants={itemVariantsRight}
          >
            <div className={styles.center_11}>
              <p className={style.orangeText}>Services</p>
              {phone ? (
                <h2 className={styles.heading_tag_about}>Contract Staffing</h2>
              ) : (
                <h2 className={styles.heading_tag_about}>Contract Staffing</h2>
              )}

              <p className={styles.greyText1}>
                We pride ourselves on delivering the best contract staffing
                services in the recruitment industry. By understanding your
                business goals, we curate a pool of talent that not only meets
                the job requirements.
              </p>
              <p className={styles.greyText1}>
                We leverage advanced sourcing techniques, comprehensive
                assessments, and detailed interviews to ensure that every
                candidate we present is highly skilled and perfectly aligned
                with your needs.
              </p>
              <p className={styles.greyText2}>
                Our services are designed to adapt to your evolving needs,
                providing you with the agility to scale your workforce
                efficiently to enhance your operational capabilities.
              </p>
              
            </div>
          </motion.div>
          <motion.div
            className="col-lg-6 d-flex align-items-center justify-content-center px-1 py-2"
            variants={itemVariantsLeft}
          >
            <div className={styles.imageParentDiv}>
              <Image src={contract} alt="about" className={styles.blogImg} />
            </div>
          </motion.div>
        </div>
        <div className={style.greyBox}>
          <div className="row">
            <div className="col-lg-3">
              <h4 className={style.ContractHeading}>
              Flexibility
              </h4>
              <p className={style.ContractSubHeading}>
              Easily scale your workforce up or down as per project demands without long-term commitments.

              </p>
            </div>
            <div className="col-lg-3">
              <h4 className={style.ContractHeading}>
              Cost-Efficiency
              </h4>
              <p className={style.ContractSubHeading}>
              Reduce overhead costs associated with permanent hires, such as benefits and training.

              </p>
            </div>
            <div className="col-lg-3">
              <h4 className={style.ContractHeading}>
              Skills & Speed
              </h4>
              <p className={style.ContractSubHeading}>
              Access a pool of specialized professionals and fast address with specific expertise. 


              </p>
            </div>
            <div className="col-lg-3">
              <h4 className={style.ContractHeading}>
              Risk Mitigation
              </h4>
              <p className={style.ContractSubHeading}>
              Minimize HR-related risks and legal liabilities associated with permanent employment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contract;
