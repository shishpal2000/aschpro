"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from "../../styles/home.module.css";
import Image from 'next/image';
import Button from "../../components/button";
import doubleArrow from "../../../public/images/double-arrow.png";
import { useRouter } from 'next/navigation';

const Card = ({
  title,
  short_desc,
  blog_image,
  url,
}) => {
  return (
    <motion.div
      className={styles.blueBox}
      initial={{ opacity: 1, y: -20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.positionRelative}>
        <img
          src={`https://api.aschpro.com/${blog_image}`}
          alt={title}
          className={styles.blogImg}
        />
      </div>
      <div className={styles.align2}>
        <h4 className={styles.headingCustom}>{title}</h4>
        <div className={styles.head_description}>
          <p>{short_desc?.substring(0, 150)}{short_desc?.length > 150 ? "..." : ""}</p>
        </div>
        <Link href={`/blogs/${url}`} style={{ textDecoration: "none" }}>
          <p className={`${styles.head_description} ${styles.read_more}`}>
            Read More
            <Image className={styles.arrowImg} alt="arrow" src={doubleArrow} />
          </p>
        </Link>
      </div>
    </motion.div>
  );
};

const Resource = () => {
  const [cardData, setCardData] = useState([]);
  const router = useRouter();
  const [phone, setPhone] = useState(false);
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: false,
    threshold: phone ? 1 : 0.2,
  });

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.aschpro.com/api/blogs/get-all-blog");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCardData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={`${styles.resouce_wrapper}`}>
      <div className="container">
        <div ref={sectionRef} className="row align-items-center">
          <motion.div
            className="col-lg-7 col-md-6 col-sm-12"
            initial={{ opacity: 1, x: -100 }}
            animate={sectionInView ? { x: 0 } : { x: -100 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className={styles.align1}>
              <p className={styles.orangeText6}>Our Resource</p>
              <h2 className={styles.head_p}>
                Stay Updated With Our Thought Provoking Latest Blogs
              </h2>
            </div>
          </motion.div>
          <motion.div
            className="col-lg-5 col-md-6 col-sm-12"
            initial={{ opacity: 1, x: 100 }}
            animate={sectionInView ? { x: 0 } : { x: 100 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className={styles.bg_align}>
              <p className={styles.greyText1}>
                The blog section at Aschpro helps you plan strategies and
                inspire recruiters to gain insights into the hiring and staffing
                process and news.
              </p>
              <div
                className={styles.btn_btn}
                onClick={() => router.push("/blogs")}
                style={{ cursor: "pointer" }}
              >
                <Button variant="primary">Discover All &#8594;</Button>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="row resource_wrapper">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="col-lg-4 col-md-6 col-sm-12"
              initial={{ opacity: 1, y: -30 }}
              animate={sectionInView ? { y: 0 } : { y: -30 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
            >
              <Card title={card.title}
                createdAt={card.createdAt}
                blog_image={card.blog_image}
                short_desc={card.short_desc}
                url={card._id} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resource;
