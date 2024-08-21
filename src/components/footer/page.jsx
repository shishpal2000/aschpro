"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import styles from '../../styles/footer.module.css';
import Image from 'next/image';
import play from "../../../public/images/Symbol.png";
import mail from "../../../public/images/NewEmail.png";
import location from "../../../public/images/location.png";
import phone from "../../../public/images/phone.png";
import facebook from "../../../public/images/Link.png";
import twitter from "../../../public/images/twitter.png";
import instagram from "../../../public/images/insta.png";
import pinterest from "../../../public/images/pinterest.png";
import Link from "next/link";

const Footer = () => {
  const [contactInfo, setContactInfo] = useState({ email: '', address: '' });
  const [phoneResponsive, setPhone] = useState(false);
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

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await fetch('https://api.aschpro.com/api/contactinfo/get-contact-info');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setContactInfo(data.data); // Assuming data contains the email and address
      } catch (error) {
        console.error('Error fetching contact info:', error);
      }
    };

    fetchContactInfo();
  }, []);

  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5 col-md-6 col-sm-6'>
            <h1 className={styles.fsweight7}>
              <a href="/">
                <Image src="/images/White_Logo.png" alt="about" width={173} height={50} style={{ cursor: "pointer" }} />
              </a>
            </h1>
            {
              phoneResponsive ? (
                <p className={`${styles.p}`}>AschPro believes that the consistent and innovative use of transparency and integrity sets us apart as a recruitment partner.</p>
              ) : (
                <p className={`${styles.p} mt-4 ml-2 ${styles.widthValue}`}>AschPro believes that the consistent and innovative use of transparency and integrity sets us apart as a recruitment partner.</p>
              )
            }
          </div>
          <div className='col-lg-2 col-md-6 col-sm-6'>
            <p className={styles.fsweight700}>Company</p>
            <ul className={styles.list}>
              <li className={`py-2 d-flex align-items-center ${styles.listItem}`}>
                <a href="/"><Image src={play} alt="Homepage" className={styles.marginRight} />Homepage</a>
              </li>
              <li className={`py-2 d-flex align-items-center ${styles.listItem}`}>
                <a href="/about"><Image src={play} alt="About Us" className={styles.marginRight} />About Us</a>
              </li>
              <li className={`py-2 d-flex align-items-center ${styles.listItem}`}>
                <a href="/contact_us"><Image src={play} alt="Contact Us" className={styles.marginRight} />Contact Us</a>
              </li>
            </ul>
          </div>
          <div className='col-lg-2 col-md-6 col-sm-6'>
            <p className={styles.fsweight700}>Site Policy</p>
            <ul className={styles.list}>
              <li className={`py-2 d-flex align-items-center ${styles.listItem}`}><a href="/services"><Image src={play} alt="Services" className={styles.marginRight} />Services</a></li>
              <li className={`py-2 d-flex align-items-center ${styles.listItem}`}><a href="/careers"><Image src={play} alt="Careers" className={styles.marginRight} />Career</a></li>
              <li className={`py-2 d-flex align-items-center ${styles.listItem}`}><a href="/Privacy"><Image src={play} alt="Privacy Policy" className={styles.marginRight} />Privacy Policy</a></li>
              <li className={`py-2 d-flex align-items-center ${styles.listItem}`}><a href="/Terms"><Image src={play} alt="Terms" className={styles.marginRight} />Terms</a></li>
            </ul>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <p className={styles.fsweight71}>Let&apos;s Get In Touch</p>
            <ul className={styles.list}>
              <li className='d-flex py-2'>
                <Image src={mail} alt="Email" className={styles.marginRight} />
                <a href={`mailto:${contactInfo.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>{contactInfo.email}</a>
              </li>
              <li className='d-flex py-2'>
                <Image src={location} alt="Location" className={styles.marginRight} />
                {contactInfo.address}
              </li>
            </ul>
          </div>
        </div>
        <div className={`d-flex justify-content-between ${styles.pdCustomOne} ${styles.borderTop}`}>
          <div>
            <p className={styles.yellowText}>© 2024 Aschpro Inc. All rights reserved.</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className={styles.yellowText} style={{ cursor: 'pointer', textDecoration: 'none' }} onClick={(event) => {
              event.preventDefault();
              window.open("https://mediadynox.com/", "_blank");
            }}> © Created and maintained by Media Dynox.</p>

            {/* Uncomment and update social media links if needed */}
            {/* <div>
              <Image src={facebook} alt="Facebook" className={styles.height_width25} />
            </div>
            <div>
              <Image src={twitter} alt="Twitter" className={styles.height_width25} />
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
