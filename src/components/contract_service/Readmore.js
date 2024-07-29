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
            <h2 className={styles.main_heading}>
              More About Contact Staffing
            </h2>

            {readMore ? (
              <div className={styles.readMore_heading}>
                <p className={styles.readMore_data}>
                  Aschpro offers a contract staffing solution that is the best
                  of all the other contract recruitment agencies. Firstly, the
                  tailored solutions which we provide to clients are a
                  comprehensive approach that they are pleased with because they
                  think precisely what your business needs are. This makes us
                  graded as the top IT staffing companies.
                </p>

                <h3 className={styles.sub_heading}>Extensive Talent Network</h3>

                <p className={styles.readMore_data}>
                  Furthermore, our large group of professionals such as IT
                  recruiters, tech recruiters, and acquisition career
                  development specialists are connected in the top talent across
                  various industries. We, together with the national recruiting
                  agencies and firms that carry out executive recruiting, choose
                  for you the best candidates, so we become a good business
                  development partner for your job recruiting needs.
                </p>

                <h3 className={styles.sub_heading}>
                  Proven Expertise and Experience
                </h3>

                <p className={styles.readMore_data}>
                  Besides the many years of our office&apos;s experience in being the
                  first executive search firm and recruiting companies we have
                  the knowledge to screen, search, and place good talent. The
                  executive search firm ranks highest among other search firms.
                  Our competent team is always available to provide high-quality
                  talent acquiring services that are an essential component of
                  the business&apos;s success.
                </p>

                <h3 className={styles.sub_heading}>Dedicated Client Support</h3>

                <p className={styles.readMore_data}>
                  Other than the actual onboarding process, we give you proper
                  guidance and support all the time to ensure your satisfaction
                  and in employee retention starts. Our professionalism, smooth
                  onboarding, and ensuring the success of our placed candidates
                  within your organization are what distinguish us from other
                  staffing companies. Our experts make sure that the people you
                  are going to hire are trained and given proper support which
                  in turn enables you to focus on your core functions of the
                  business.
                </p>

                <h3 className={styles.sub_heading}>Broad Industry Coverage</h3>

                <p className={styles.readMore_data}>
                  First and foremost, we cover all kinds of businesses such as
                  technology companies, and finance services. Whether you
                  require IT recruitment companies, finance hiring firms, or
                  executives headhunting companies, we have the expertise and
                  the network to cater to you. Still, our collaboration with
                  leading recruitment companies and top hiring agencies makes it
                  sure that we pass the right employee to you. Thus, the
                  Aschpro&apos;s collaboration will not only help our contract staff
                  to be mobile but also it will improve the performance of our
                  executive recruiting and talent acquisition franchises into a
                  comprehensive one. Contact us now to talk about how we can
                  assist your company with our unique staff solutions in the
                  most effective way
                </p>
              </div>
            ) : (
              <div className={styles.readMore_heading}>
                <p className={styles.readMore_data}>
                  Aschpro offers a contract staffing solution that is the best
                  of all the other contract recruitment agencies. Firstly, the
                  tailored solutions which we provide to clients are a
                  comprehensive approach that they are pleased with because they
                  think precisely what your business needs are. This makes us
                  graded as the top IT staffing companies.
                </p>

                <h3 className={styles.sub_heading}>Extensive Talent Network</h3>

                <p className={styles.readMore_data}>
                  Furthermore, our large group of professionals such as IT
                  recruiters, tech recruiters, and acquisition career
                  development specialists are connected in the top talent across
                  various industries. We, together with the national recruiting
                  agencies and firms that carry out executive recruiting, choose
                  for you the best candidates, so we become a good business
                  development partner for your job recruiting needs.
                </p>
              </div>
            )}

            <div
              className={styles.readMoreButton}
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Read less" : "Read more"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Readmore;
