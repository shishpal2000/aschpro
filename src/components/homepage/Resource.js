"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from "../../styles/home.module.css";
import Image from 'next/image';
import Button from '../../components/button';
import doubleArrow from "../../../public/images/double-arrow.png";
import { useRouter } from 'next/navigation';




const Card = ({ category_name, dateofpublish, title, shortdesc, image, imgalt , url }) => {

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { day: '2-digit', month: 'long' }).format(date);
  };
  const router = useRouter();
  return (
    <motion.div
      className={styles.blueBox}
      initial={{ opacity: 1, y: -20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.positionRelative}>
        <div className={styles.tag}>{category_name}</div>
        <img src={`https://aschpro.mediadynox.in/uploads/${image}`} alt={imgalt} className={styles.blogImg} />
        <div className={styles.tagDate}>
        <p className={styles.textStyle1}>{formatDate(dateofpublish)}</p>
        </div>
      </div>
      <div className={styles.align2}>
        <h4 className={styles.headingCustom}>{title}</h4>
        <div className={styles.head_description}>
          <p>{shortdesc}</p>
        </div>
        <Link href={`/blogs/${url}`} style={{ textDecoration: 'none' }}>
        <p className={`${styles.head_description} ${styles.read_more}`}>
          Read More<Image className={styles.arrowImg} alt="arrow" src={doubleArrow} />
        </p></Link>
      </div>
    </motion.div>
  );
};

const Resource = () => {


  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    // Function to fetch data from API
    const fetchData = async () => {
      try {
        const response = await fetch('https://aschpro.mediadynox.in/api/homeblogs'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCardData(data); // Assuming data is an array of objects similar to your cardData structure
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetch data function
  }, []); // Empty dependency array ensures useEffect runs once on component mount

  




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

  return (
    <div className={`${styles.resouce_wrapper}`}>
      <div className='container'>
        <div ref={sectionRef} className='row align-items-center'>
          <motion.div
            className='col-lg-7 col-md-6 col-sm-12'
            initial={{ opacity: 1, x: -100 }}
            animate={sectionInView ? { x: 0 } : { x: -100 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className={styles.align1}>
              <p className={styles.orangeText6}>Our Resource</p>
              <h2 className={styles.head_p}>Stay Updated With Our Though-Provoking  Latest Blogs</h2>
            </div>
          </motion.div>
          <motion.div
            className='col-lg-5 col-md-6 col-sm-12'
            initial={{ opacity: 1, x: 100 }}
            animate={sectionInView ? { x: 0 } : { x: 100 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className={styles.bg_align}>
              <p className={styles.greyText1}>Its AschPro Blog Promsie delivers Tips, Strategies, and Inspiration to help recruiters gain strong knowledge to hire and develop talent. </p>
              <div className={styles.btn_btn} onClick={() => router.push('/blogs')} style={{cursor:"pointer"}}>
                <Button variant='primary' >Discover All &#8594;</Button>
              </div>
            </div>
          </motion.div>
        </div>
        <div className='row resource_wrapper'>
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className='col-lg-4 col-md-6 col-sm-12'
              initial={{ opacity: 1, y: -30 }}
              animate={sectionInView ? { y: 0 } : { y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            >
              <Card {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resource;
