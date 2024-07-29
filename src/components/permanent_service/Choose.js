import React from "react";
import styles from "../../styles/services.module.css";
import homeStyle from "../../styles/home.module.css";
import Image from "next/image";
import line from "../../../public/images/line.png";
import glassIcon from "../../../public/images/glassicon-2.png";
import vector from "../../../public/images/Vector 1.png";
import send from "../../../public/images/Send.png";
import test from "../../../public/images/test.png";
const Choose = () => {
  const cardData = [
    {
      title: "Permanent Expertise",
      shortdesc:
        "Aschpro is recognisable due to following audiences, staff needs, background checks and individual strategies for hiring.",
    },
    {
      title: "Inspirational technology ",
      shortdesc:
        "IT services should be creative and dynamic, so Aschpro enables IT Cloud, AI, Construction, Accounting and Enterprise applications.",
    },
    {
      title: "Worldwide Recruitment",
      shortdesc:
        "Aschpro’s global network supports in creating a knowledge and cross-border recruitment process to hire international candidates.",
    },
  ];
  return (
    <div className={`${styles.greyBgOne} ${styles.pdCustom}`}>
      <div className="container">
        <div className={`row ${styles.phonepadding}`}>
          <div className="col-lg-6 col-md-5">
            <div className={styles.positionSticky}>
              <p className={`${styles.blueText} ${styles.orangeText}`}>
                POINTS
              </p>
              <h1
                className={`${styles.fsWeight700} ${homeStyle.heading_tag_about}`}
              >
                Why follow us
              </h1>
              <p className={`${styles.customTextColor} ${homeStyle.greyText1}`}>
                We follow talent strategy, confidentiality and partnershing for
                improving our IT services. Business transformation solutions
                also include achieving talented employees to follow our values.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className={`row `}>
          {/* {cardData.map((card, index) => (
              <motion.div
                key={index}
                style={{ width: "30%" }}
                className="col-lg-4 col-md-6 col-sm-12"
                initial={{ opacity: 1, y: -30 }}
                animate={sectionInView ? { y: 0 } : { y: -30 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
              >
                <Card {...card} />
              </motion.div>
            ))} */}
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={homeStyle.serviceCart}>
              {cardData.map((card, index) => {
                return (
                  <div key={index} className={homeStyle.cartTop}>
                    <h3 className={homeStyle.contentType}>{card.title}</h3>
                    <p className={homeStyle.contentTypeChild}>
                      {card.shortdesc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Choose;
