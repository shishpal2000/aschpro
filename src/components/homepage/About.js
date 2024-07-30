"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/home.module.css";
import Image from "next/image";
import about from "../../../public/images/homeAbout.png";
import Button from "../../components/button";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
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
              <Image src={about} alt="about" className={styles.blogImg} />
            </div>
          </motion.div>
          <motion.div
            className="col-lg-6 d-flex align-items-center justify-content-center"
            variants={itemVariantsRight}
          >
            <div className={styles.center_11}>
              <p className={styles.orangeText}>About Us</p>
              {phone ? (
                <h2 className={`${styles.heading_tag_about} ${styles.capitalize}`}>
                  We&rsquo;re your gateway to mastering staffing & recruitment
                </h2>
              ) : (
                <h2 className={`${styles.heading_tag_about} ${styles.capitalize}`}>
                  We&rsquo;re your gateway to mastering staffing & recruitment
                </h2>
              )}

              <p className={styles.greyText1}>
                There are hundreds of free and paid job boards in India, both locally and worldwide. But which of the vast array of job sites in India are the most effective for advertising? Put differently, where would you be more comfortable allocating a portion of your hiring budget or resources to draw in quality applicants?
              </p>
              <p className={styles.greyText2}>
                We&apos;ve compiled a handy list of the top job sites across the world to make it easier for you to find the best ones for your needs. Using our list of Indian job sites to select the ones that suit your industry and open positions is a good way to ensure that your recruiting mix is diverse.
              </p>
              <div className={styles.mtCustom} onClick={() => router.push("/about")}>
                <Button variant="primary">Know More &#8594;</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
