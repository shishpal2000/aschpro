"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from "../../styles/home.module.css"; // Adjust the path according to your project structure

const Industry = () => {
  const [phone, setPhone] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation every time the section comes into view
    threshold: phone ? 1 : 0.4
  });

  const containerVariants = {
    hidden: { opacity: phone ? 1 : 0, y: 50 },
    visible: {
      opacity: 1,
      y: phone ? 1 : 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: phone ? 1 : 0, y: 50 },
    visible: { opacity: 1, y: phone ? 1 : 0 },
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
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
    <div className={styles.industry_wrapper} ref={ref}>
      <motion.div
        className="container"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <div className="row">
          <p className={styles.pp1}>industry</p>
          {
            phone ? <h2 className={styles.h4}>Aschpro Enables Inspired Learning Across Industries </h2> : <h2 className={styles.h4}>Aschpro Enables Inspired Learning Across Industries </h2>
          }
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className='col-lg-3 col-md-4 col-sm-6'
              variants={itemVariants}
            >
              <div className={styles.icon_size}>
              
                <Image src={industry.icon} alt={industry.name} width={50} height={50} 
           />
                <h3 >{industry.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

const industries = [
  { icon: "/images/icon/ItService.png", name: "IT & Services"},
  { icon: "/images/icon/EneryLife.png", name: "Energy & Life sciences"},
  { icon: "/images/icon/ItCloud.png", name: "IT Cloud & Software"},
  { icon: "/images/icon/Security.png", name: "Cyber Security"},
  { icon: "/images/icon/Enterprice.png", name: "Enterprise Application" },
  { icon: "/images/icon/Financial.png", name: "Financial Services"},
  { icon: "/images/icon/Camera.png", name: "Artificial Intelligence"},
  { icon: "/images/icon/constraction.png", name: "Construction"},
  { icon: "/images/icon/Accounting.png", name: "Accounting" },
  { icon: "/images/icon/Healthfitness.png", name: "Health & Fitness"},
  { icon: "/images/icon/Music.png", name: "Music" },
  { icon: "/images/icon/Addmore.png", name: "Many More" },
];

export default Industry;
