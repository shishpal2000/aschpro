"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/home.module.css";
import Image from "next/image";
import about from "../../../public/images/women3.jpg";
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
                <h2
                  className={`${styles.heading_tag_about} ${styles.capitalize}`}
                >
                  We&rsquo;re your gateway to mastering staffing & recruitment
                </h2>
              ) : (
                <h2
                  className={`${styles.heading_tag_about} ${styles.capitalize}`}
                >
                  We&rsquo;re your gateway to mastering staffing & recruitment
                </h2>
              )}

              <p className={styles.greyText1}>
                There are hundreds of job portals available in India, both free
                and paid. However it gets difficult to pick the most effective
                organisation to bring in the most quality applicants. Here comes
                in Aschpro. Here we tailor personally crafted lists and layouts
                to cater to our clients. With the use of modern technology and
                our top-tier recruitment specialists, we help both the employers
                and the employees.
              </p>
              <p className={styles.greyText2}>
                At Aschpro, everyone&rsquo;s needs are manufactured personally
                to deliver a high-quality plan for the client. We make sure to
                help you grow your work family with quality recruits who can
                further help the company to yeild great results.
              </p>
              <div
                className={styles.mtCustom}
                onClick={() => router.push("/about")}
              >
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
