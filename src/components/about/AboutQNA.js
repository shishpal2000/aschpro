"use client";
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
        <h3
          className={`${style.accordionHeading} ${
            isOpen ? style.openHeading : style.closedHeading
          }`}
        >
          {title}
        </h3>
        <Image
          src={isOpen ? "/images/arrow-open.png" : "/images/arrow-close.png"} // Adjust the path as necessary
          alt={isOpen ? "Collapse" : "Expand"}
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
      title: "What makes Aschpro one of the best recruiting companies?",
      content:
        "Aschpro sets itself apart as a leading recruitment firm by taking a holistic approach to hiring. Their methodology is based on state-of-the-art technologies and data analysis, which identifies the right candidates meeting specific skill sets while matching with organizational culture.",
    },
    {
      title:
        "How does Aschpro ensure they meet the right employees for my company?",
      content:
        "Aschpro's qualified team of experienced personnel lays out systematic plans to cater each of their clients. Through this approach, they pick the best candidates as per the employer's requirement. The company also uses AI technology to evaluate candidatures as well as job markets to help both the parties. ",
    },
    {
      title: "Why should my company choose Aschpro for our recruiting needs?",
      content:
        "Aschpro's qualified team of experienced personnel lays out systematic plans to cater each of their clients. Through this approach, they pick the best candidates as per the employer's requirement. The company also uses AI technology to evaluate candidatures as well as job markets to help both the parties. ",
    },
    {
      title: "What industries does Aschpro specialize in?",
      content:
        "Aschpro provides services to organisations from every kind of firm. From technology, finance, healthcare, engineering, to marketing, the team is designed to provide to all businesses. With the comprehensive understanding of all the departments, we can help you hire the best proffesionals. ",
    },
    {
      title: "How can Aschpro help improve my company’s recruitment process?",
      content:
        "With advanced technology and Aschpro's customised processes for each client, we promise to solve your recruitment and staffing concerns effeciently.  Additionally, we connect you with the best talent for the best results of your company. ",
    },
    {
      title:
        "What is the difference between Aschpro and other recruiting companies?",
      content:
        "One thing that sets Aschpro apart from its competitors is how it uses modern technology to find employees. Aschpro uses state-of-the-art artificial intelligence software. However, the big data analysis techniques and sound knowledge of different sectors provide unmatched personnel search services. Their emphasis on forging enduring ties with their customers and potential employees makes them stand out. Just by guaranteeing a continuous first-rate employment-matching undertaking.",
    },
  ];

  return (
    <div className={styles.question_wrapper}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className={styles.p}>Frequently Addressed Queries </p>

            {phone ? (
              <h3 className={` mt-4 ${styles.mainHeading}`}>
                Quick and Helpful Answers to Your Inquiries.
              </h3>
            ) : (
              <h3 className={`text-center mt-4 ${styles.mainHeading}`}>
                Quick and Helpful Answers to <br /> Your Inquiries.
              </h3>
            )}
          </div>
          {items.map((item, index) => (
            <div key={index} className="col-lg-6 px-0">
              {" "}
              {/* Add key prop here */}
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
