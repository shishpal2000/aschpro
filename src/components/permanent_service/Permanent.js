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
                  PERMANENT STAFFING
                </h2>
              ) : (
                <h2 className={styles.heading_tag_about}>
                  PERMANENT STAFFING
                </h2>
              )}

              <p className={style.greyText1}>
              We the permanent staffing agency follows upskills to exaggerate their talents which contributes to enhancing the workforce and productivity.It helps the organisation cope with uncertain risks upskilling the talent acquisition services

              </p>
              <p className={style.greyText1}>
              Progressive economic conditions can be retained in Aschpro through the long-term talent acquisition process.Adequate skilled forces create permanent staffing for evolving wellbeing in the workplace.

              </p>

              <p className={style.greyText1}>
              The permanent staffing solutions creates a dynamic progress with flexibility for well maintenance, product delivery capability and adherence to requirements in the workplace.

              </p>
              
            </div>
          </motion.div>
        </div>
        <div className={style.greyBox2}>
        <div className="row">
            <div className="col-lg-3">
                <h3 className={style.ContractHeading}>Excellence in management</h3>
                <p className={style.ContractSubHeading}>Aschpro directly makes strong connections with external executives to recruit efficient people with advertisements. </p>
            </div>
            <div className="col-lg-3">
            <h3 className={style.ContractHeading}>Effective Service Strategies.</h3>
            <p className={style.ContractSubHeading}>Advanced programs in career opportunities create practical and real-world experiences for candidates to get insights into the industry. 
            </p>
            </div>
            <div className="col-lg-3">
            <h3 className={style.ContractHeading}>Delivering talent acquisition </h3>
            <p className={style.ContractSubHeading}>Permanent staffing in Aschpro is possible with the screening, assessments, evaluation, verification and documentation processes for higher workforces. </p>
            </div>
            <div className="col-lg-3">
            <h3 className={style.ContractHeading}>
Successful Service Approaches.
</h3>
            <p className={style.ContractSubHeading}>Permanent recruitment solutions deploy with customised hiring to meet the need of candidates, diversification and confidentiality process for the job. 
            </p>
            </div>
        </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Permanent;
