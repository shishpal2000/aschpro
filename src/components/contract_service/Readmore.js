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
            <h2 className={styles.main_heading}>More About Contact Staffing</h2>

            {readMore ? (
              <div className={styles.readMore_heading}>
                <p className={styles.readMore_data}>
                  Aschpro offers a contract staffing solution that might set it
                  apart from the other recruitment agencies present in the
                  market. For starters, the tailored solutions provided to the
                  clients are a comprehensive approach from our end. For each of
                  our clients, we built a customised plan that helps grow their
                  business. It is one of the reasons why we should be helping
                  you out with your staffing needs.
                </p>

                <h3 className={styles.sub_heading}>Extensive Talent Network</h3>

                <p className={styles.readMore_data}>
                  Our large group of professionals such as IT recruiters, tech
                  recruiters, and acquisition career development specialists are
                  connected to the top talent across various industries. We,
                  together with the national recruiting agencies and firms that
                  carry out executive recruiting pick the best candidates in
                  order to cater your business with the best personnel.
                </p>

                <h3 className={styles.sub_heading}>
                  Proven Expertise and Experience
                </h3>

                <p className={styles.readMore_data}>
                  Besides years of experience being the first executive search
                  firm and recruiting company, we have gathered the knowledge to
                  screen, search, and place good talent. Our competent team is
                  always available to provide high-quality talent-acquiring
                  services that are an essential component of the
                  business&apos;s success.
                </p>

                <h3 className={styles.sub_heading}>Dedicated Client Support</h3>

                <p className={styles.readMore_data}>
                  Besides the onboarding process, we provide proper guidance and
                  post services for further satisfaction to retain our existing
                  clients. Our professionalism, smooth staffing process, and the
                  capabilities of our candidates are what make us different from
                  other recruitment companies. Our experts make sure that the
                  people you are going to hire are trained and given proper
                  support which in turn enables you to focus on your core
                  functions of the business.
                </p>

                <h3 className={styles.sub_heading}>Broad Industry Coverage</h3>

                <p className={styles.readMore_data}>
                  First and foremost, we cover all kinds of business niches such
                  as technology, finance, lifestyle, FMCG, Culture, and more.
                  Whether you want a personnel, fresh out of college or someone
                  seasoned with years of experience, we have the expertise and
                  the network to cater to all. Thus, our collaboration with
                  leading recruitment companies and top hiring agencies makes
                  sure that we provide you with the right employee. Contact us
                  now to talk about how we can assist your company with our
                  unique staff solutions in the most effective way.
                </p>
              </div>
            ) : (
              <div className={styles.readMore_heading}>
                <p className={styles.readMore_data}>
                  Aschpro offers a contract staffing solution that might set it
                  apart from the other recruitment agencies present in the
                  market. For starters, the tailored solutions provided to the
                  clients are a comprehensive approach from our end. For each of
                  our clients, we built a customised plan that helps grow their
                  business. It is one of the reasons why we should be helping
                  you out with your staffing needs.
                </p>

                <h3 className={styles.sub_heading}>Extensive Talent Network</h3>

                <p className={styles.readMore_data}>
                  Our large group of professionals such as IT recruiters, tech
                  recruiters, and acquisition career development specialists are
                  connected to the top talent across various industries. We,
                  together with the national recruiting agencies and firms that
                  carry out executive recruiting pick the best candidates in
                  order to cater your business with the best personnel.
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
