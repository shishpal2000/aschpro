"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/home.module.css";
import Button from "../../components/button";
import Slider from "react-slick";
import Chearful from "../../../public/images/cheerful.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section className={styles.review_wrapper}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className={styles.feedback_card1}>
              <h6 className={styles.yellowText2}>Partner Reviews</h6>
              <h2 className={styles.h2}>Client testimonial </h2>
              <p className={styles.p3}>
                Our Testimonials showcase the success stories of businesses that
                have partnered with us.
              </p>
              {/* <div className={styles.mtCustom}>
                <Button variant="primary">See All Reviews &#8594;</Button>
              </div> */}
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12">
            <Slider {...settings}>
              <div>
                <div className={styles.feedback_card2}>
                  <div className={styles.cd_card}>
                    <div className={styles.stars}>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <p className={styles.paras}>
                      We&apos;ve partnered with aschpro for several years, and they consistently deliver high-quality candidates who fit our company.
                    </p>
                    <div className={styles.client_info}>
                      <Image
                        src={Chearful}
                        alt="Client Image"
                        className="img-fluid"
                      />
                      <div className="px-3">
                        <div className={styles.client_name}>Mr. Aakash</div>
                        <div className={styles.client_role}>Clients</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.feedback_card2}>
                  <div className={styles.cd_card}>
                    <div className={styles.stars}>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <p className={styles.paras}>
                      The experts at aschpro bring us qualified professionals by understanding our company&rsquo;s requirements. 
                    </p>
                    <div className={styles.client_info}>
                      <Image
                        src={Chearful}
                        alt="Client Image"
                        className="img-fluid"
                      />
                      <div className="px-3">
                        <div className={styles.client_name}>Mr. kaushal</div>
                        <div className={styles.client_role}>Clients</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
