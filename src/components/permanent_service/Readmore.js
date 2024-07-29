"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/home.module.css";

const Readmore = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className={styles.readMore_wrapper_service}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className={styles.main_heading}>Learn about Permanent Staffing</h2>

            {readMore ? (
              <div className={styles.readMore_heading}>
                <p className={styles.readMore_data}>
                  In the bustling world of recruitment, the need for dependable permanent staffing solutions has never been more essential. As a leading permanent staffing organization, our journey began with a vision to bridge the gap between talent and opportunity. One of our most memorable achievement stories illustrates the profound impact of our permanent staffing solutions.
                </p>

                <h3 className={styles.sub_heading}>A Partnership with a Growing Tech Firm</h3>

                <p className={styles.readMore_data}>
                  Several years ago, a growing tech firm approached our permanent recruitment business, looking for skilled IT experts to help their rapid expansion. They had experienced significant challenges with high turnover rates and mismatched skill sets. Consequently, they turned to us for a comprehensive and reliable solution.
                </p>

                <h3 className={styles.sub_heading}>Comprehensive Talent Acquisition Strategy</h3>

                <p className={styles.readMore_data}>
                  Our team at the permanent placement staffing organization immediately began working. Firstly, we conducted an in-depth analysis of the company’s needs, culture, and long-term goals. Using this information, we developed a tailored staffing strategy. Moreover, we leveraged our extensive network and advanced recruitment tools to identify top-tier candidates.
                </p>

                <h3 className={styles.sub_heading}>Rigorous Selection Process</h3>

                <p className={styles.readMore_data}>
                  Through a meticulous selection process, we shortlisted candidates who not only possessed the required technical skills but also aligned with the company’s values and vision. Additionally, our staffing firm utilized behavioral interviews and skill tests to ensure a perfect fit. This approach significantly reduced the risk of turnover, providing the tech company with stable, long-term talent.
                </p>

                <h3 className={styles.sub_heading}>Seamless Onboarding and Integration</h3>

                <p className={styles.readMore_data}>
                  After selecting the right candidates, our staffing services included a seamless onboarding process. We worked closely with the tech firm’s HR team to integrate new hires smoothly into their roles. This comprehensive support ensured that the new employees were productive from day one, thereby enhancing the organization’s operational efficiency.
                </p>

                <h3 className={styles.sub_heading}>Long-Term Success and Growth</h3>

                <p className={styles.readMore_data}>
                  Over the next few years, the tech company experienced unparalleled growth and success. Our permanent staffing solutions played a pivotal role in this achievement. The strategic hiring of skilled professionals allowed the company to innovate and expand its market presence. Furthermore, the strong alignment between the new hires and the company’s culture fostered a motivated and cohesive workforce.
                </p>

                <h3 className={styles.sub_heading}>Conclusion</h3>

                <p className={styles.readMore_data}>
                  Our story highlights the transformative power of effective permanent staffing services. By partnering with a reputable permanent staffing solutions provider, companies can achieve sustainable growth and long-term success. As a top staffing firm, we are committed to delivering tailored staffing solutions that meet the unique needs of each client. This dedication to excellence makes us a trusted partner in the journey towards achieving business goals.
                  <br />
                  In conclusion, whether you are a tech organization or a business in another industry, our permanent recruitment firm is here to support your staffing needs. Through our proven approach and unwavering commitment, we provide exceptional permanent placement staffing solutions that drive your business forward.
                </p>
              </div>
            ) : (
              <div className={styles.readMore_heading}>
                <p className={styles.readMore_data}>
                  In the bustling world of recruitment, the need for dependable permanent staffing solutions has never been more essential. As a leading permanent staffing organization, our journey began with a vision to bridge the gap between talent and opportunity. One of our most memorable achievement stories illustrates the profound impact of our permanent staffing solutions.
                </p>

                <h3 className={styles.sub_heading}>A Partnership with a Growing Tech Firm</h3>

                <p className={styles.readMore_data}>
                  Several years ago, a growing tech firm approached our permanent recruitment business, looking for skilled IT experts to help their rapid expansion. They had experienced significant challenges with high turnover rates and mismatched skill sets. Consequently, they turned to us for a comprehensive and reliable solution.
                </p>
              </div>
            )}

            <div className={styles.readMoreButton} onClick={() => setReadMore(!readMore)}>
              {readMore ? "Read less" : "Read more"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Readmore;
