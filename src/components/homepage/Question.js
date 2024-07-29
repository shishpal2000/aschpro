'use client'
import React, { useState,useEffect } from "react";
import Image from "next/image";
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
      title: 'What makes Aschpro stand out from other recruitment companies?',
      content: 'Aschpro is easily recognizable for its tailored approach, professional knowledge of different sectors, and wide audience of candidates of the highest class. The staff of the company guarantees every customer an individual strategy that suits his or her hiring requirements.',
    },
    {
      title: 'How does Aschpro ensure the quality of its candidates?',
      content: 'We follow a strict selection process with a direct hiring procedure. However, the process includes in-depth interviews as well as skill tests plus a thorough background check. Thus, this makes sure we present only the top-most qualified and dependable candidates to our clients.',
    },
    {
      title: 'What industries does Aschpro specialize in?',
      content: 'Aschpro is focused on a direct hiring solution. Although, the diverse areas such as technology, finance, healthcare, and engineering, among others. Our recruiters have extensive knowledge of this industry thus effectively catering to all client needs.',
    },
    {
      title: 'How does Aschpro support companies during the hiring process?',
      content: 'From the first point of contact, when we provide advice and help find potential hires, through facilitating interviews, following-ups, and onboarding support, we’ve got you covered. However, we work with this from the start till you are settled in life. ',
    },
    {
      title: 'What kind of recruiting companies does Aschpro work with?',
      content: 'Aschpro collaborates with a broad spectrum of enterprises, ranging from small startups to large multinational corporations. We have perfected the art of recognizing specific obstacles and opportunities that come with different forms of organization.',
    },
    {
      title: 'Can Aschpro help with international recruitment?',
      content: 'Yes, Aschpro has wide experience in international recruitment. Because of our global network of candidates and thorough knowledge of cross-border hiring processes. So, we can source and place talent with direct hiring solutions across the world. Ensure that our clients enjoy a smooth recruitment experience.',
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
            <p className={styles.p}>Featured Question Answer</p>
            {
              phone ? <h2 className={` mt-4 ${styles.mainHeading}`}>
              
              Find Answers to Common Questions Here
            </h2> : <h2 className={`text-center mt-4 ${styles.mainHeading}`}>
              
            Find Answers to Common <br/> Questions Here
            </h2>
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
