'use client'
import React, { useEffect, useState } from "react";
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
  const items = [
    {
      title: 'How can Aschpro help with our recruitment needs?',
      content: 'As you look for someone in particular, Aschpro works with a lot of different people and will do whatever it takes to find the right one from within those groups.',
    },
    {
      title: 'What industries does Aschpro cater to?',
      content: 'We serve a broad spectrum of industries that contain technology, finance, and healthcare, among other. Our competence extends through different arenas to suit wide-ranging recruitment needs.',
    },
    {
      title: 'What is the best way to contact Aschpro?',
      content: 'During our opening hours, you can send us a message via the contact form on our website, drop us an email using XXXXX, or reach us through a phone call on XXXXXX.',
    },
    {
      title: 'Does Aschpro offer customized recruitment solutions?',
      content: 'Yes, we give you our word that we provide custom recruitment techniques according to the particular requirements of your organization thereby making certain the availability of the right person for the right job in your group.',
    },
    {
      title: 'How quickly can Aschpro start working on our recruitment needs?',
      content: 'As soon as you tell us your needs, we shall commence sourcing for employees. To kick off the process talk to us starting today!',
    },
    {
      title: 'Does Aschpro offer consulting services for recruitment strategy?',
      content: 'Yes, our services are focused on consulting with companies that are interested in maximizing their capacities to attract talent and select appropriate employees. Get in touch to find out how we can help your entity.',
    },
  ];

  return (
    <div className={styles.question_wrapper}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className={styles.p}>Learn More About Aschpro</p>
            {
              phone ? <h3 className={`mt-4 ${styles.mainHeading}`}>
            Get Answers to Your FAQs About Aschpro
            </h3> :  <h3 className={`text-center mt-4 ${styles.mainHeading}`}>
            Get Answers to Your FAQs <br/> About Aschpro
            </h3>
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
