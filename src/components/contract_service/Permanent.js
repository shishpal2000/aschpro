"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/home.module.css";
import style from "../../styles/services.module.css"
import Image from "next/image";
import permanent from "../../../public/images/permanent.png";


const Permanent = () => {
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
            className="col-lg-6 d-flex align-items-center justify-content-center px-1 py-2"
            variants={itemVariantsLeft}
          >
            <div className={styles.imageParentDiv}>
              <Image src={permanent} alt="about" className={styles.blogImg} />
            </div>
          </motion.div>
          <motion.div
            className="col-lg-6 d-flex align-items-center justify-content-center"
            variants={itemVariantsRight}
          >
            <div className={styles.center_11}>
              <p className={style.orangeText}>Services</p>
              {phone ? (
                <h2 className={styles.heading_tag_about}>
                  Permanent Staffing
                </h2>
              ) : (
                <h2 className={styles.heading_tag_about}>
                  Permanent Staffing
                </h2>
              )}

              <p className={styles.greyText1}>
              We excel in providing the best permanent staffing services in the recruitment industry. Our mission is to connect businesses with highly qualified candidates.  Our goal is to be a trusted partner in your talent acquisition strategy, providing insights and solutions that help 

              </p>
              <p className={styles.greyText2}>
              We recognize that finding the right permanent staff is crucial for the sustained growth and stability of your business. Our services are designed to provide you with a seamless hiring experience, from the initial consultation to the final placement. We focus on delivering candidates who possess the skills, experience, and cultural alignment necessary to thrive in your organization, thereby reducing turnover and enhancing team cohesion.

              </p>
              
            </div>
          </motion.div>
        </div>
        <div className={style.greyBox2}>
        <div className="row">
            <div className="col-lg-3">
                <h4 className={style.ContractHeading}>Employee for a Long Period</h4>
                <p className={style.ContractSubHeading}>Permanent staffing ensures that the employee will be with the company for a very long period.  </p>
            </div>
            <div className="col-lg-3">
            <h4 className={style.ContractHeading}>Management Stability</h4>
            <p className={style.ContractSubHeading}>Permanent staffing can lend a company stability. Because of knowing that employees will be there for the longer term.
            </p>
            </div>
            <div className="col-lg-3">
            <h4 className={style.ContractHeading}>Increase Efficiency</h4>
            <p className={style.ContractSubHeading}>The company culture will be built in a better manner over time as more employees are retained, happy, and productive.</p>
            </div>
            <div className="col-lg-3">
            <h4 className={style.ContractHeading}>Good Reputation</h4>
            <p className={style.ContractSubHeading}>The employer’s reputation also improves a good deal as permanent employees will leave behind positive reviews for the organization.
            </p>
            </div>
        </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Permanent;
