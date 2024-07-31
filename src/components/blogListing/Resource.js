"use client"
import React, { useState, useEffect } from 'react';
import styles from "../../styles/home.module.css";
import Image from 'next/image';
import Button from '../../components/button';
import doubleArrow from "../../../public/images/double-arrow.png";
import Link from 'next/link';

const Resource = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    // Function to fetch data from API
    const fetchData = async () => {
      try {
        const response = await fetch('https://ad.aschpro.com/api/blogs'); // Replace with your API endpoint
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { day: '2-digit', month: 'long' }).format(date);
  };

  const Card = ({ category_name, dateofpublish, title, shortdesc, image, imgalt , url }) => {
    return (
      <div className={styles.blueBox}>
        <div className={styles.positionRelative}>
          <div className={styles.tag}>{category_name}</div>
          {/* Assuming blogImg is replaced with an actual image URL from API data */}
          <img src={`https://ad.aschpro.com/storage/${image}`} alt={imgalt} className={styles.blogImg} width={300} height={200} />
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
            Read More <Image className={styles.arrowImg} alt="arrow" src={doubleArrow} />
          </p></Link>
        </div>
      </div>
    );
  };

  return (
    <div className={`${styles.resource_wrapper}`}>
      <div className='container'>
        <div className='row resource_wrapper'>
          {cardData.map((card, index) => (
            <div key={index} className='col-lg-4'>
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resource;
