'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image"; // Corrected import statement
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
          src={isOpen ? '/images/arrow-open.png' : '/images/arrow-close.png'} // Adjust the path as necessary
          alt={isOpen ? 'Collapse' : 'Expand'}
          className={style.icon}
          width={20} // Specify width
          height={20} // Specify height
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
      title: 'What makes Aschpro one of the best recruiting companies?',
      content: 'Aschpro sets itself apart as a leading recruitment firm by taking a holistic approach to hiring. Their methodology is based on state-of-the-art technologies and data analysis, which identifies the right candidates meeting specific skill sets while matching with organizational culture.',
    },
    {
      title: 'How does Aschpro ensure they meet the right employees for my company?',
      content: "They use automated tools based on AI technology to evaluate candidate profiles as well as forecast job performance matching with the organization's culture. Through this methodical approach, only the best candidate will be presented to your organization. They use automated tools based on AI technology to evaluate candidate profiles as well as forecast job performance matching with the organization's culture. Through this methodical approach, the best candidate will choose to meet the best performance.",
    },
    {
      title: 'Why should my company choose Aschpro for our recruiting needs?',
      content: 'Your business ought to consider Aschpro since they present a recruitment experience that’s efficient and personalized. Efficient recruitment teams at Aschpro understand your requisites along with organizational objectives. Therefore, when you opt for Aschpro you save money and time because we deliver high-quality services and have high placement rates which means that you will get good employees.',
    },
    {
      title: 'What industries does Aschpro specialize in?',
      content: 'In the fields of technology, finance, healthcare, engineering, and marketing, Aschpro has specialists. The specialists of Aschpro have a comprehensive understanding of these fields hence they can identify exactly what type of expertise you will require when hiring any professional in your industry.',
    },
    {
      title: 'How can Aschpro help improve my company’s recruitment process?',
      content: 'Leveraging advanced technology and experienced recruiters enhances Aschpro’s recruitment process by making it easier. They make them attract, screen out & select candidates. Thus attracting high-quality employees since others would always aim higher. This would ensure smoothness in the recruitment with a well-coordinated hiring process from beginning to end.',
    },
    {
      title: 'What is the difference between Aschpro and other recruiting companies?',
      content: 'One thing that sets Aschpro apart from its competitors is how it uses modern technology to find employees. Aschpro uses state-of-the-art artificial intelligence software. However, the big data analysis techniques and sound knowledge of different sectors provide unmatched personnel search services. Their emphasis on forging enduring ties with their customers and potential employees makes them stand out. Just by guaranteeing a continuous first-rate employment-matching undertaking.',
    },
  ];

  return (
    <div className={styles.question_wrapper}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className={styles.p}>Frequently Addressed Queries </p>

            {
              phone ? <h3 className={` mt-4 ${styles.mainHeading}`}>
              Quick and Helpful Answers to Your Inquiries. 
            </h3>: <h3 className={`text-center mt-4 ${styles.mainHeading}`}>
            Quick and Helpful Answers to <br/> Your Inquiries. 
            </h3>
            }
            
          </div>
          {items.map((item, index) => (
            <div key={index} className="col-lg-6 px-0"> {/* Add key prop here */}
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
