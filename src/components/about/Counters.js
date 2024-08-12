"use client";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import styles from "../../styles/about.module.css";

const Counters = () => {
  const [phone, setPhone] = useState(false);

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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
    <div className={styles.Counter_wrapper} ref={ref}>
      <div className="container">
        {phone ? (
          <motion.div
            className="row"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="col-lg-3 col-md-3 col-sm-6">
              <h2 className={styles.count_h}>
                <CountUp end={300} duration={2.75} separator="," suffix="K+" />
              </h2>
              <p className={styles.count_p}>
                Stay up to date with the latest features, enhancements, and
                fixes.
              </p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <h2 className={styles.count_h}>
                <CountUp end={256} duration={2.75} suffix="+" />
              </h2>
              <p className={styles.count_p}>
                Effortlessly integrate our SaaS product with your existing
                systems.
              </p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <h2 className={styles.count_h}>
                <CountUp end={48} duration={2.75} suffix="+" />
              </h2>
              <p className={styles.count_p}>
                Tailor the SaaS product to fit your unique business processes.
              </p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <h2 className={styles.count_h}>
                <CountUp end={32} duration={2.75} separator="," suffix="M+" />
              </h2>
              <p className={styles.count_p}>
                Gain valuable insights and make data-driven decisions.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="row"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="col-lg-3 col-md-3 col-sm-6">
              <h2 className={styles.count_h}>
                <CountUp end={300} duration={2.75} separator="," suffix="K+" />
              </h2>
              <p className={styles.count_p}>
                Stay up to date with the latest features, enhancements, and
                fixes.
              </p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <h2 className={styles.count_h}>
                <CountUp end={256} duration={2.75} suffix="+" />
              </h2>
              <p className={styles.count_p}>
                Effortlessly integrate our SaaS product with your existing
                systems.
              </p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <h2 className={styles.count_h}>
                <CountUp end={48} duration={2.75} suffix="+" />
              </h2>
              <p className={styles.count_p}>
                Tailor the SaaS product to fit your unique business processes.
              </p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <h2 className={styles.count_h}>
                <CountUp end={32} duration={2.75} separator="," suffix="M+" />
              </h2>
              <p className={styles.count_p}>
                Gain valuable insights and make data-driven decisions.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Counters;
