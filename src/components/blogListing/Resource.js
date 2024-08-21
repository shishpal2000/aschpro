"use client"
import React, { useState, useEffect } from 'react';
import styles from "../../styles/home.module.css";
import Image from 'next/image';
import doubleArrow from "../../../public/images/double-arrow.png";
import Link from 'next/link';

const Resource = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.aschpro.com/api/blogs/get-all-blog');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setCardData(data?.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { day: '2-digit', month: 'short' }).format(date);
  };
  

  const Card = ({ title, createdAt, blog_image, content, url }) => {
    return (
      <div className={styles.blueBox}>
        <div className={styles.positionRelative}>
          <img src={`https://api.aschpro.com/${blog_image}`} alt={title} className={styles.blogImg} width={300} height={200} />
          <div className={styles.tagDate}>
            <p className={styles.textStyle1}>{formatDate(createdAt)}</p>
          </div>
        </div>
        <div className={styles.align2}>
          <h4 className={styles.headingCustom}>{title}</h4>
          <div className={styles.head_description}>
          <p>{content.substring(0, 150)}{content.length > 150 ? "..." : ""}</p>
        </div>
          <Link href={`/blogs/${url}`} style={{ textDecoration: 'none' }}>
            <p className={`${styles.head_description} ${styles.read_more}`}>
              Read More <Image className={styles.arrowImg} alt="arrow" src={doubleArrow} />
            </p>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className={`${styles.resource_wrapper}`}>
      <div className='container'>
        <div className='row resource_wrapper'>
          {Array.isArray(cardData) && cardData.map((card, index) => (
            <div key={index} className='col-lg-4'>
              <Card
                title={card.title}
                createdAt={card.createdAt}
                blog_image={card.blog_image}
                content={card.content}
                url={card._id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resource;
