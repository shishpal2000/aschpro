'use client'
import React, { useState } from "react";
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
  const items = [
    {
      title: 'What industries does AschPro specialize in?',
      content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.',
    },
    {
      title: 'How do you source candidates?',
      content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.',
    },
    {
      title: 'What kind of job openings do you offer?',
      content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.',
    },
    {
      title: 'How long does the recruitment process take?',
      content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.',
    },
    {
      title: 'What are your policies regarding confidentiality?',
      content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.',
    },
    {
      title: 'What makes us different from other agencies?',
      content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.',
    },
  ];

  return (
    <div className={styles.question_wrapper}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className={styles.p}>Featured Question Answer</p>
            <h3 className={`text-center mt-4 ${styles.mainHeading}`}>
              Frequently Asked Question You<br /> Should Know
            </h3>
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
