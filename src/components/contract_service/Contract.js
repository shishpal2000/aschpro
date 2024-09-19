"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/home.module.css";
import style from "../../styles/services.module.css";
import Image from "next/image";
import contract from "../../../public/images/D2.jpg";

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
            <div className={styles.center_111}>
              <p className={style.orangeText}>Services</p>
              {phone ? (
                <h2 className={styles.heading_tag_about}>CONTRACT STAFFING </h2>
              ) : (
                <h2 className={styles.heading_tag_about}>CONTRACT STAFFING </h2>
              )}

              <p className={style.greyText1}>
                At Aschpro, we are a contract recruitment agency. Our particular
                solutions often involve temporary Contract staffing services.
                Therefore understand that we are operating in a highly dynamic
                business environment.
              </p>
              <p className={style.greyText1}>
                Our methods of working with contract staffing are different as
                we are meticulous and responsive to our clients needs. However,
                we commence with a detailed needs analysis to comprehend your
                requirements.
              </p>
              <p className={style.greyText1}>
                So , Simply give us a call today and we will show you how we can
                create a successful business with the right contract staffing
                solution.
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
              <h3 className={style.ContractHeading}>Flexibility</h3>
              <p className={style.ContractSubHeading}>
                Flexibility provides to scale your workforce quickly and
                cost-effectively for short-term needs.
              </p>
            </div>
            <div className="col-lg-3">
              <h3 className={style.ContractHeading}>Cost Efficiency</h3>
              <p className={style.ContractSubHeading}>
                Moreover, cost-efficient, reducing expenses on benefits and
                training for short-term hires.
              </p>
            </div>
            <div className="col-lg-3">
              <h3 className={style.ContractHeading}>Skills & Speed</h3>
              <p className={style.ContractSubHeading}>
                Furthermore, skill and speed ensures skilled professionals and
                speedy hiring for immediate business needs.
              </p>
            </div>
            <div className="col-lg-3">
              <h3 className={style.ContractHeading}>Risk Mitigation</h3>
              <p className={style.ContractSubHeading}>
                Additionally, Risk mitigation offers flexible, temporary
                solutions without long-term commitments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contract;
