"use client";
import React, { useEffect, useState } from "react";
import styles from "../../styles/about.module.css";
import aboutStyles from "../../styles/about.module.css";
import Image from "next/image";
import about from "../../../public/images/men-women.jpg";
import Button from "../../components/button";
import { useRouter } from "next/navigation";

const AboutUs = () => {
  const [phone, setPhone] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
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
    <div className={styles.about_wrapper}>
      <div className="container">
        <div className={`row ${styles.marginTop}`}>
          {/* <div className={`col-lg-6 ${styles.px_1}`}>
            <Image src={about} className={aboutStyles.blogImg} alt="About" />
          </div> */}

          <div className="col-lg-6 d-flex">
            <div className={styles.imageParentDiv}>
              <Image src={about} alt="about" className={styles.blogImg} />
            </div>
          </div>

          <div className="col-lg-6">
            <div className={styles.center_11}>
              <p className={aboutStyles.neworangetext}>About Us</p>
              {phone ? (
                <h2
                  className={`${aboutStyles.aboutheading} ${aboutStyles.capitalize}`}
                >
                  {/* Elevating People&apos;s Career and
               Empowering Businesses. */}
                  We are inclined towards building a strong professional
                  platform for you to have your dream recruits
                </h2>
              ) : (
                <h2
                  className={`${aboutStyles.aboutheading} ${aboutStyles.capitalize}`}
                >
                  {/* Elevating People&apos;s Career and
                <br /> Empowering Businesses. */}
                  We are inclined towards building a strong professional
                  platform for you to have your dream recruits
                </h2>
              )}

              <p className={aboutStyles.abotpara11}>
                Through the utilization of our experienced personnel and
                personalized services, we provide a systematic hiring process to
                our clients, leading to prolonged professional relationships and
                enabling mutual advancement.
              </p>
              <p className={aboutStyles.abotpara11}>
                Our team of talented recruiters are specialised in connecting
                businesses and individuals with the most skilled employees. They
                plan a systemactic strategy for each business to understand
                their requirement better and help them grow their team of
                personnel.
              </p>
              <p className={aboutStyles.abotpara11}>
                Our main focus is to bridge the gap between the recruiters and
                people looking for job, thus providing a growing environment for
                both the parties.
              </p>
              <p className={aboutStyles.abotpara11}>
                We believe that the consistent and innovative use of
                transparency and integrity sets us apart as a recruitment
                partner. We strive to make you successful by helping you through
                the use of strategic solutions.
              </p>
              {/* <div className={aboutStyles.about_btn} onClick={() => router.push('/')}>
                <Button variant="primary">Learn More &#8594;</Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default AboutUs;
