"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from '../../styles/footer.module.css';
import Image from 'next/image';
import play from "../../../public/images/Symbol.png"
import mail from "../../../public/images/NewEmail.png"
import location from "../../../public/images/location.png"

import phone from "../../../public/images/phone.png"
import facebook from "../../../public/images/Link.png"
import twitter from "../../../public/images/twitter.png"
import instagram from "../../../public/images/insta.png"
import pinterest from "../../../public/images/pinterest.png"
import Link from "next/link";
const Footer = () => {
  const [phoneResponsive, setPhone] = useState(false);

  
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
    <footer className={styles.footer}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5 col-md-6 col-sm-6'>
            <h1 className={styles.fsweight7}>
              <a href="/">
              <Image src="/images/White_Logo.png" alt="about" width={173} height={50} style={{cursor:"pointer"}}/> 
              </a>
           
            </h1>
            {
              phoneResponsive ?  <p className={`${styles.p}`}>aschpro believes that the consistent and innovative use of transparency and integrity sets us apart as a recruitment partner.</p> :  <p className={`${styles.p} mt-4 ml-2 ${styles.widthValue}`}>AschPro believes that the consistent and innovative  use of transparency and integrity  sets us apart as a recruitment partner.</p>
            }
           
          </div>
          <div className='col-lg-2 col-md-6 col-sm-6'>
            <p className={styles.fsweight700}>Company</p>
            <ul className={styles.list}>
              <li className={`py-2 d-flex align-items-center ${styles.listItem}`}>
              <a href="/"><Image src={play} alt="Disclaimer" className={styles.marginRight}/>Homepage</a>
              
              </li>
              <li className={`py-2 d-flex align-items-center ${styles.listItem}`}>
              <a href="/about"><Image src={play} alt="Disclaimer" className={styles.marginRight}/>About Us</a>
              </li>
              <li className={`py-2 d-flex align-items-center ${styles.listItem}`}>
              <a href="/contact_us"><Image src={play} alt="Disclaimer" className={styles.marginRight}/>Contact us</a>
              </li>
              {/* <li className='py-2'><Image src={play} alt="projects" className='mx-2'/>Projects Work</li>
              <li className='py-2'><Image src={play} alt="contact" className='mx-2'/>Contact Us</li> */}
            </ul>
          </div>
          <div className='col-lg-2 col-md-6 col-sm-6 '>
          <p className={styles.fsweight700}>Site Policy</p>
          <ul className={styles.list}>
          {/* <li className='py-2 d-flex align-items-center'><Image src={play} alt="Disclaimer" className='mx-2'/>Disclaimer</li> */}
          <li className={`py-2 d-flex align-items-center ${styles.listItem}`}><a href="/services"><Image src={play} alt="Disclaimer" className={styles.marginRight}/>Services</a></li>
          <li className={`py-2 d-flex align-items-center ${styles.listItem}`}><a href="/careers"><Image src={play} alt="Disclaimer" className={styles.marginRight}/>Career</a></li>
          <li className={`py-2 d-flex align-items-center ${styles.listItem}`}><a href="/Privacy"><Image src={play} alt="Disclaimer" className={styles.marginRight}/>Privacy Policy</a></li>
          <li className={`py-2 d-flex align-items-center ${styles.listItem}`}><a href="/Terms"><Image src={play} alt="Disclaimer" className={styles.marginRight}/>Terms</a></li>
          {/* <li className='py-2'><Image src={play} alt="gdpr" className='mx-2'/>GDPR</li>
          <li className='py-2'><Image src={play} alt="Cookies" className='mx-2'/>Cookies Usage</li> */}
            </ul>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <p className={styles.fsweight71}>Lets Get In Touch</p>
            <ul className={styles.list}>  
            <li className='d-flex py-2'>
      <Image src={mail} alt="mail" className={styles.marginRight}/>
      <a href="mailto:info@aschpro.com"  style={{ color: 'inherit', textDecoration: 'none' }}>info@aschpro.com</a>
    </li>
            {/* <li className='d-flex align-items-center py-2'><Image src={phone} alt="phone" className='mx-3'/>+62 123 456 789</li> */}
            <li className='d-flex py-2'><Image src={location} alt="mail" className={styles.marginRight}/>Plot No 83, Sainath colony, Panama Godowns, Vanasthalipuram, Hyderabad 500 070</li>
        
            {/* <p className='mx-3 mt-4'>Plot No 83, Sainath colony, Panama Godowns, Vanasthalipuram, Hyderabad 500 070</p> */}
            </ul>
          </div>
        </div>
        <div className={`d-flex justify-content-between  ${styles.pdCustomOne} ${styles.borderTop}`}>
          <div>
          <p className={styles.yellowText}>© 2024 Aschpro Inc. All rights reserved.</p>
          </div>
          <div className="d-flex justify-content-between ">
          <p className={styles.yellowText}>© Created and maintained by Media Dynox.</p>

            {/* <div>
              <Image src={facebook} alt="facebook" className={styles.height_width25}/>
            </div>
            <div>
              <Image src={twitter} alt="twitter" className={styles.height_width25} />
            </div>
            <div>
              <Image src={instagram} alt="Instagram" className={styles.height_width25} />
            </div>
            <div>
              <Image src={pinterest} alt="Pinterest" className={styles.height_width25} />
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
