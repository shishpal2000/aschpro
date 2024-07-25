"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/home.module.css";
import style from "../../styles/services.module.css"
import Image from "next/image";
import rpo from "../../../public/images/rpo.png";


const Rpo = () => {
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
              <p className={styles.orangeText}>Services</p>
              {phone ? (
                <h2 className={styles.heading_tag_about}>
                  RPO Services
                </h2>
              ) : (
                <h2 className={styles.heading_tag_about}>
                  RPO Services
                </h2>
              )}

              <p className={styles.greyText1}>
              Our RPO services are crafted to deliver unparalleled recruitment solutions that align with your organizational goals and drive business success. Our services are designed to scale with your business needs, providing flexible solutions that adapt to changing market dynamics and hiring demands.

              </p>
              <p className={styles.greyText1}>
              We collaborate closely with your team to develop a customized recruitment strategy that targets the best-qualified candidates who not only possess the necessary skills and experience but also fit seamlessly into your organizational culture for the company&apos;s long-term success.

              </p>
              <p className={styles.greyText2}>
              The goal of AschPro is to not only meet but exceed your expectations, delivering superior RPO services that drive efficiency, reduce costs, and elevate your talent acquisition strategy. With our RPO services, you can focus on your core business activities while we handle the complexities of recruitment, ensuring you attract and retain the best talent in the industry.
              </p>
              
            </div>
          </motion.div>
          <motion.div
            className="col-lg-6 d-flex align-items-center justify-content-center px-1 py-2"
            variants={itemVariantsLeft}
          >
            <div className={styles.imageParentDiv}>
              <Image src={rpo} alt="about" className={styles.blogImg} />
            </div>
          </motion.div>
        </div>
        <div className={style.greyBox}>
        <div className="row">
            <div className="col-lg-3">
                <h4 className={style.ContractHeading}>Improve Talent Quality</h4>
                <p className={style.ContractSubHeading}>RPO providers are unbeatable in their ability to find and deliver quality talent for organizations. Transparency, frequent reporting, and unhindered access to recruiters.
                </p>
            </div>
            <div className="col-lg-3">
            <h4 className={style.ContractHeading}>Decrease Time-to-Fill</h4>
            <p className={style.ContractSubHeading}>Reducing the amount of time it takes to find great talent is another key benefit of an RPO partnership. Expertise, technology, and recruiting acumen.</p>
            </div>
            <div className="col-lg-3">
            <h4 className={style.ContractHeading}>Reduce Costs</h4>
            <p className={style.ContractSubHeading}>When calculating the cost of talent acquisition, a common mistake is to only review costs associated with department budgets. 
            </p>
            </div>
            <div className="col-lg-3">
            <h4 className={style.ContractHeading}>Increase Scalability</h4>
            <p className={style.ContractSubHeading}>Moving quickly to meet business demands is critical to a successful talent acquisition function. With an RPO, you will be able to scale your recruitment team. </p>
            </div>
        </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Rpo;
