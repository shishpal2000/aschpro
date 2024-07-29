'use client'
import React, { useState,useEffect } from "react";
import Image from 'next/image';

import styles from "../../styles/home.module.css";
import style from "../../styles/accordian.module.css";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.accordionItem}>
      <div className={style.accordionHeader} onClick={toggleAccordion}>
        <h3 className={`${style.accordionHeading} ${isOpen ? style.openHeading : style.closedHeading}`}>{title}</h3>
        <Image
          src={isOpen ? '/images/arrow-open.png' : '/images/arrow-close.png'}
          alt={isOpen ? 'Collapse' : 'Expand'}
          className={style.icon}
          width={15}
          height={15}
        />
      </div>
      {isOpen && <div className={style.accordionContent}>{content}</div>}
    </div>
  );
};

const Question = () => {
  const [phone, setPhone] = useState(false);
  const items = [
    {
      title: 'How does Aschpro help in finding a good career?',
      content: 'We fulfill your job search needs - Aschpro matches candidates to reliable employers in their fields. As such, candidates are assured of getting matched up with jobs that align with their competencies, professional aspirations as well as career aims in general thanks to our vast connections and workforce of seasoned recruiters.',
    },
    {
      title: 'What industries does Aschpro specialize in?',
      content: 'Aschpro specializes in a wide range of industries, including IT, finance, healthcare, engineering, and marketing, among others. Our well-rounded industry knowledge enables us to serve different job prospects and professional qualifications.',
    },
    {
      title: 'What is the process to register with Aschpro?',
      content: 'Signing up with Aschpro is not a complicated thing. Candidates should visit our site, attach their resumes, and complete a comprehensive profile. Our recruiters will contact them upon acceptance of their registration.',
    },
    {
      title: 'Does Aschpro offer any career advice or support services?',
      content: 'Aschpro indeed offers full-scale professional support services so you don’t have to worry again when it comes to building your career from scratch. This is aimed at helping employees improve their chances of being employed, so they should find it easy to find work.',
    },
    {
      title: 'How does Aschpro ensure the privacy of my personal information?',
      content: 'At Aschpro, we are concerned about data protection and confidentiality rules. As per our security measures, your data is safe from unauthorized access. So, please read our privacy policy very carefully ',
    },
    {
      title: 'Can Aschpro help with temporary or contract positions as well?',
      content: 'Yes Indeed! At AschPro we provide support not only for permanent positions but also for temporary or contract ones. We collaborate with temporary employers, freelancers, and contract workers matching their needs with our candidates’ expertise thus ensuring flexible career paths.',
    },
  ];

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
    <div className={styles.question_wrapper}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className={styles.p}>Everything You Need To Know </p>
            {
              phone ? (
                <h2 className={`mt-4 ${styles.mainHeading}`}>
                Any Query? Check Our FAQ First
                </h2>
              ) : (
                <h2 className={`text-center mt-4 ${styles.mainHeading}`}>
                Any Query? Check Our FAQ First
                </h2>
              )
            }
           
          </div>
          {items.map((item, index) => (
            <div key={index} className="col-lg-6 px-0">
              <div className={style.accordion}>
                <AccordionItem title={item.title} content={item.content} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
