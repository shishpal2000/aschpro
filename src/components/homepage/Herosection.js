"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/home.module.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faGear, faClipboard, faGem } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/button";
import { useRouter } from "next/navigation";

const Herosection = () => {
  const router = useRouter();
  const [phone, setPhone] = useState(false);
  const [buttonSize, setButtonSize] = useState("md");

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const sectionRef = useRef(null);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPhone(true);
        setButtonSize("sm");
      } else {
        setPhone(false);
        setButtonSize("md");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const shinyTextVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <header className={styles.hero_section_img} ref={sectionRef}>
        <div className="container py-1">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <p className={styles.p1_head_title}>
                FIND TOP TALENT FOR YOUR BUSINESS
              </p>
              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={shinyTextVariants}
                transition={{ duration: 1 }}
                className={styles.shinyText}
              >
                {/* {phone ? (
                  <h1 className={`${styles.head_title} ${styles.uppercase}`}>
                     We Help Companies To Find The Right Executive Talent 
                  </h1>
                ) : (
                  <h1 className={`${styles.head_title} ${styles.uppercase}`}>
                    We Help Companies To Find The Right Executive Talent
                  </h1>
                )} */}
                <h1
                  className={`${styles.head_title}`}
                  style={{ textTransform: "capitalize" }}
                >
                  Your Go-To for Jobs Candidates and Solutions
                </h1>
              </motion.div>
              {phone ? (
                <p className={styles.p2_head_title}>
                  We ensure everyone has an easy-to-use and cooperative
                  experience, including prospects, hiring managers, recruiters,
                  and candidates.
                </p>
              ) : (
                <p className={styles.p2_head_title}>
                  We ensure everyone has an easy-to-use and cooperative
                  experience, including <br /> prospects, hiring managers,
                  recruiters, and candidates.
                </p>
              )}

              <div className={styles.mtCustom}>
                <Button
                  size={buttonSize}
                  onClick={() => router.push("/services")}
                >
                  Our Services
                </Button>
                {/* <a href="#" className={styles.a_head} onClick={() => router.push("/about")}>
                  Learn More &#8594;
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.marginTop}>
        <div className={`container ${styles.marginTopHeroSection}`}>
          <motion.div
            className={styles.services_section}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "visible"}
          >
            <div className="row">
              <motion.div
                className="col-lg-4 col-md-4 col-sm-12"
                variants={itemVariants}
              >
                <div className="d-flex mx-4">
                  <div className={styles.icon}>
                    {/* <FontAwesomeIcon icon={faGear} className={styles.gayColor}/> */}
                  </div>
                  <div className={styles.center_22}>
                    <h6>Direct Hire</h6>
                    <p>
                      Easily connecting you to the top talent your business
                      requires.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="col-lg-4 col-md-4 col-sm-12"
                variants={itemVariants}
              >
                <div className="d-flex mx-4">
                  <div className={styles.icon}>
                    {/* <FontAwesomeIcon icon={faClipboard} className={styles.gayColor}/> */}
                  </div>
                  <div className={styles.center_22}>
                    <h6 className={styles.marginLeft}>Executive Search</h6>
                    <p className={styles.marginLeft}>
                      We are seeking for a leader who aligns with your vision
                      and goals.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="col-lg-4 col-md-4 col-sm-12"
                variants={itemVariants}
              >
                <div className="d-flex mx-4">
                  <div className={styles.icon}>
                    {/* <FontAwesomeIcon icon={faGem} className={styles.gayColor}/> */}
                  </div>
                  <div className={styles.center_22}>
                    <h6>Contract Staffing</h6>
                    <p>
                      We provide versatile staffing solutions as per business
                      requirements.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Herosection;
