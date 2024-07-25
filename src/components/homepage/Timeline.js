"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/home.module.css";
import { useState, useEffect } from "react";
import MobileTimeline from "./MobileTimeline";
const Timeline = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });
  const [phone, setPhone] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 568) {
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
    <div ref={ref}>
      <div className={styles.Timeline_wrapper}>
        <div className={`container ${styles.marginTopTimeLine}`}>
          <div className="row">
            <div className="col-lg-12">
              <p className={styles.orangeText}>Be the change. Be AschPro</p>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              {phone ?  <motion.h2
                className={styles.heading_tag111}
                initial={{ opacity: 0, x: -100 }}
                animate={
                  inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
                }
                transition={{ duration: 0.5 }}
              >
               Delivering Top Talent to Power Your Business
              </motion.h2> :  <motion.h2
                className={styles.heading_tag111}
                initial={{ opacity: 0, x: -100 }}
                animate={
                  inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
                }
                transition={{ duration: 0.5 }}
              >
                Delivering Top Talent to Power Your Business
                {/* Experience Our Industry <br />
                Expertise & Personalized
                <br /> Approach */}
              </motion.h2>}
             
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <motion.p
                className={styles.greyText1}
                initial={{ opacity: 0, x: 100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
              >
                Our Direct hiring procedure is set up to help us choose imaginative, passionate, and morally upright individuals. Your qualifications, experience, drive, and skills all play a part in our decision.
              </motion.p>
            </div>

            {phone ? (
              <MobileTimeline />
            ) : (
              <div className={styles.timeline}>
                <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-between">
                  <motion.div
                    className={styles.step}
                    initial={{ opacity: 0, y: 50 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                    }
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <div className={styles.number}>01</div>
                    <div className={styles.circle1}></div>
                    <motion.h6
                      className={`${styles.h_4} col-lg-8`}
                      initial={{ opacity: 0, x: -100 }}
                      animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
                      }
                      transition={{ duration: 0.5 }}
                    >
                     Screening 
                    </motion.h6>
                  </motion.div>
                  <motion.div
                    className={styles.step}
                    initial={{ opacity: 0, y: 50 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                    }
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <div className={styles.number}>02</div>
                    <div className={styles.circle2}></div>
                    <motion.h6
                      className={`${styles.h_4} col-lg-8 `}
                      initial={{ opacity: 0, x: -100 }}
                      animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
                      }
                      transition={{ duration: 0.5 }}
                    >
                      Assessments
                    </motion.h6>
                  </motion.div>
                  <motion.div
                    className={styles.step}
                    initial={{ opacity: 0, y: 50 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                    }
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <div className={styles.number}>03</div>
                    <div className={styles.circle3}></div>
                    <motion.h6
                      className={`${styles.h_4} col-lg-8 `}
                      initial={{ opacity: 0, x: -100 }}
                      animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
                      }
                      transition={{ duration: 0.5 }}
                    >
                      Evaluation 
                    </motion.h6>
                  </motion.div>
                  <motion.div
                    className={styles.step}
                    initial={{ opacity: 0, y: 50 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                    }
                    transition={{ delay: 0.9, duration: 0.5 }}
                  >
                    <div
                      className={`${styles.number} d-flex justify-content-center`}
                    >
                      04
                    </div>
                    <div className={styles.circle4}></div>
                    <motion.h6
                      className={`${styles.h_4} col-lg-8 offset-2`}
                      initial={{ opacity: 0, x: -100 }}
                      animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
                      }
                      transition={{ duration: 0.5 }}
                    >
                      Verification 
                    </motion.h6>
                  </motion.div>
                  <motion.div
                    className={styles.step}
                    initial={{ opacity: 0, y: 50 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                    }
                    transition={{ delay: 0.11, duration: 0.5 }}
                  >
                    <div className={styles.number}>05</div>
                    <div className={styles.circle5}></div>
                    <motion.h6
                      className={`${styles.h_4} col-lg-8 `}
                      initial={{ opacity: 0, x: -100 }}
                      animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
                      }
                      transition={{ duration: 0.5 }}
                    >
                     Documentation
                    </motion.h6>
                  </motion.div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
