"use client";
import React, { useEffect, useState } from 'react';
import styles from '../../styles/about.module.css';
import aboutStyles from '../../styles/about.module.css';
import Image from 'next/image';
import about from '../../../public/images/about1.png';
import Button from '../../components/button';
import { useRouter } from 'next/navigation';

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

          <div    className="col-lg-6 d-flex">
          <div className={styles.imageParentDiv}>
            <Image src={about} alt="about" className={styles.blogImg} />
            </div>
          </div>


          <div className="col-lg-6">
            <div className={styles.center_11}>
              <p className={aboutStyles.neworangetext}>About Us</p>
              {
                phone ? <h2 className={`${aboutStyles.aboutheading} ${aboutStyles.capitalize}`}>
                {/* Elevating People&apos;s Career and
               Empowering Businesses. */}
               We are dedicated to Building a strong professional relationship 
              </h2>: <h2 className={`${aboutStyles.aboutheading} ${aboutStyles.capitalize}`}>
                {/* Elevating People&apos;s Career and
                <br /> Empowering Businesses. */}
                We are dedicated to Building a strong  professional relationship 
              </h2>
              }
              
              <p className={aboutStyles.abotpara11}>
              When one thinks of marketing tools, certain things come to mind. We join excellent corporations with high-quality candidates who are skilled and have the same organizational culture and objectives. Through the utilization of advanced technology and personalized services, we confirm the proper hiring process, leading to prolonged professional relationships and enabling mutual advancement.
              </p>
              <p className={aboutStyles.abotpara11}>
              Our group of qualified recruitment officers is committed to grasping the hopes of individuals searching for employment as well as the necessities of company owners with satisfaction in our power to suit the best individual for proper vacancies therefore promoting an environment that benefits both parties involved whether business firms in need of a vibrant labor force or workers searching for their following professional direction then AschPro is there providing guidance all through.
              </p>
              <p className={aboutStyles.abotpara11}>
              We believe that the consistent and innovative use of transparency and integrity sets us apart as a recruitment partner. We strive to make you successful by helping you through the use of strategic solutions.
              </p>
              {/* <div className={aboutStyles.about_btn} onClick={() => router.push('/')}>
                <Button variant="primary">Learn More &#8594;</Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
    </div>
  );
}

export default AboutUs;
