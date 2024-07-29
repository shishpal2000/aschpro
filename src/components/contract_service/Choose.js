"use client";
import React, { useEffect, useState } from "react";
import styles from "../../styles/services.module.css";
import homeStyle from "../../styles/home.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import line from "../../../public/images/line.png";
import glassIcon from "../../../public/images/glassicon-2.png";
import vector from "../../../public/images/Vector 1.png";
import send from "../../../public/images/Send.png";
import test from "../../../public/images/test.png";
import blogImg from "../../../public/images/blog-img.png";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";
import Link from "next/link";
import doubleArrow from "../../../public/images/double-arrow.png";

const Card = ({
  category_name,
  dateofpublish,
  title,
  shortdesc,
  image,
  imgalt,
  url,
}) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "long",
    }).format(date);
  };
  const router = useRouter();
  return (
    <motion.div
      className={homeStyle.blueBox1}
      initial={{ opacity: 1, y: -20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={homeStyle.positionRelative}>
        <div className={homeStyle.cartTop}>
          <p className={homeStyle.contentType}> {title}</p>

          <p className={homeStyle.contentTypeChild}>{shortdesc}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Choose = () => {
  const [phone, setPhone] = useState(false);
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: false,
    threshold: phone ? 1 : 0.2,
  });

  const cardData = [
    {
      title: "Extensive Talent Network",
      shortdesc:
        "Furthermore, our vast network of skilled professionals across the industry provides you the top talent.",
    },
    {
      title: "Proven Proficiency",
      shortdesc:
        "Moreover, the quest for more skilled professionals and the maturity of our means have acquired us an expertise.",
    },
    {
      title: "Dedicated Client Support",
      shortdesc:
        "On top of that, we assure your contentment by backing you up from the get-go through the whole contract period.",
    },
  ];

  return (
    <div className={`${styles.greyBgOne} ${styles.pdCustom}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-5">
            <div className={styles.positionSticky}>
              <p className={`${styles.blueText} ${styles.orangeText}`}>
                POINTS
              </p>
              <h2
                className={`${styles.fsWeight700} ${homeStyle.heading_tag_about}`}
              >
                Why Choose Us
              </h2>
              <p className={`${styles.customTextColor} ${homeStyle.greyText1}`}>
                We uphold our ongoing support and communication throughout the
                contract staffing period to guarantee smooth and productive
                interaction.
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
