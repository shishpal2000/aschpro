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
            <h3 className={styles.main_heading}>Why Partner With Aschpro?</h3>

            {readMore ? (
              <div className={styles.readMore_heading}>
                <p className={styles.readMore_data}>
                  Nowadays’s competitive task marketplace, finding the right
                  talents can be a daunting challenge. That’s where AschPro is
                  available. As a primary recruitment corporation, we awareness
                  on permanent staffing and settlement staffing, providing
                  tailor-made answers to fulfill your organisation’s unique
                  needs. Here are compelling reasons why partnering with AschPro
                  is the proper desire to your staffing necessities.
                </p>

                <h2 className={styles.sub_heading}>
                  Expertise in Permanent Staffing
                </h2>

                <p className={styles.readMore_data}>
                  At AschPro, we recognize that hiring for everlasting positions
                  calls for a deep statistics of your agency manner of
                  lifestyles and lengthy-term dreams. Our expert recruiters take
                  the time to discover about your company, making sure we find
                  candidates who no longer best have the right capabilities
                  however moreover in shape seamlessly into your institution.
                  With our sizeable community and rigorous screening way, we
                  supply pinnacle-notch information which can make a
                  contribution on your organization’s achievement for future
                  years.
                </p>

                <h2 className={styles.sub_heading}>
                  Flexible Contract Staffing Solutions
                </h2>

                <p className={styles.readMore_data}>
                  Whether you need short-time period assist for a selected
                  assignment or seasonal staffing solutions, AschPro excels in
                  contract staffing. We offer flexible options that permit you
                  to scale your personnel up or down based definitely on your
                  desires. Our agile approach guarantees that you can rapid
                  reply to changing commercial employer wishes with out
                  compromising on satisfactory.
                </p>

                <h2 className={styles.sub_heading}>Time and Cost Efficiency</h2>

                <p className={styles.readMore_data}>
                  Recruiting may be time-eating and luxurious. By partnering
                  with AschPro, you keep valuable assets. Our inexperienced
                  procedures and vast skills pool substantially lessen the time
                  it takes to fill positions, permitting you to consciousness in
                  your center employer operations. With our value-effective
                  solutions, you may acquire more without breaking the financial
                  organization.
                </p>

                <h2 className={styles.sub_heading}>Quality Candidates</h2>

                <p className={styles.readMore_data}>
                  Our dedication to fine is unwavering. AschPro uses advanced
                  screening strategies and thorough interviews to make sure that
                  we gift simplest the great applicants for your attention.
                  Whether it’s for everlasting staffing or agreement staffing,
                  our rigorous selection system ensures that you acquire
                  pinnacle skills that meets your necessities.
                </p>

                <h2 className={styles.sub_heading}>Customized Staffing Solutions</h2>

                <p className={styles.readMore_data}>
                Every enterprise is particular, and so are its staffing wishes. At AschPro, we offer customized solutions tailor-made to your precise necessities. Whether you’re looking for permanent staffing to build a robust group or Contract staffing to address height workloads, we increase techniques that align collectively together with your goals.
                </p>

                <h2 className={styles.sub_heading}>QCommitment to Partnership</h2>

                <p className={styles.readMore_data}>
                When you companion with AschPro, you’re no longer simply selecting a recruitment company; you’re forming a strategic partnership. We are dedicated to information your organization and working collaboratively to fulfill your staffing needs. Our aim is to aid your increase and fulfillment via effective recruitment answers.
                </p>
                <h2 className={styles.sub_heading}>Conclusion</h2>

                <p className={styles.readMore_data}>
                Choosing the proper staffing associate is important to your enterprise’s success. With AschPro’s understanding in permanent staffing and settlement staffing, you may relaxation confident that your recruitment wishes are in succesful palms. Let us assist you construct a sturdy, gifted body of workers that drives your corporation ahead. Contact AschPro these days to discover how we are able to associate with you for all your staffing solutions!
                </p>
              </div>
            ) : (
              <div className={styles.readMore_heading}>
                <p className={styles.readMore_data}>
                  Nowadays’s competitive task marketplace, finding the right
                  talents can be a daunting challenge. That’s where AschPro is
                  available. As a primary recruitment corporation, we awareness
                  on permanent staffing and settlement staffing, providing
                  tailor-made answers to fulfill your organisation’s unique
                  needs. Here are compelling reasons why partnering with AschPro
                  is the proper desire to your staffing necessities.
                </p>

                <h2 className={styles.sub_heading}>
                  Expertise in Permanent Staffing
                </h2>

                <p className={styles.readMore_data}>
                  At AschPro, we recognize that hiring for everlasting positions
                  calls for a deep statistics of your agency manner of
                  lifestyles and lengthy-term dreams. Our expert recruiters take
                  the time to discover about your company, making sure we find
                  candidates who no longer best have the right capabilities
                  however moreover in shape seamlessly into your institution.
                  With our sizeable community and rigorous screening way, we
                  supply pinnacle-notch information which can make a
                  contribution on your organization’s achievement for future
                  years.
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
