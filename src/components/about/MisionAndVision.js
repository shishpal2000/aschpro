"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import VideoImage from "../../../public/images/2women.jpg";
import Modal from "react-modal";
import stylesss from "../../styles/about.module.css";
import style from "../../styles/missiontime.module.css";

const MisionAndVision = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [phone, setPhone] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
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

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={stylesss.mission_wrapper}>
      <div className="container">
        <div className="row">
          <p
            className={`${stylesss.missionP}`}
            style={{ textTransform: "capitalize" }}
          >
            {" "}
            MISSION & VISION
          </p>
          {phone ? (
            <h2 className={stylesss.missionh}>
              Get Unparalleled Access to Top-Qualified Candidates
            </h2>
          ) : (
            <h2 className={stylesss.missionh}>
              Get Unparalleled Access to <br /> Top-Qualified Candidates
            </h2>
          )}

          <div className="col-lg-4">
            <h3 className={stylesss.h441} style={{ color: "#005352" }}>
              Our Mission
            </h3>
            <p className={stylesss.missionpp}>
              Our mission is to be the leading recruitment platform providing
              the best talents to emplyers for their growth
            </p>
            <p className={stylesss.missionpp}>
              It is our top-most priority to connect the best of talent with
              excellent opportunities in order for them to provide exceptional
              services to their clients.
            </p>
          </div>
          <div className="col-lg-4">
            <Image
              src={VideoImage}
              alt="Business Meeting"
              className="img-fluid"
              onClick={openModal}
              style={{ cursor: "pointer" }}
            />
            {/* <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Video Modal"
              className={style.modal}
              overlayClassName={style.overlay}
            >
              <video controls className={stylesss.video}>
                <source src="/videos/demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button onClick={closeModal} className={style.closeButton}>Close</button>
            </Modal> */}
          </div>
          <div className="col-lg-4">
            <h3 className={stylesss.h44} style={{ color: "#005352" }}>
              Our Vision
            </h3>
            <p className={stylesss.missionpp}>
              Our vision is to become the best recruiting company by maintaining
              a continuous commitment to quality and reliably supplying a
              superior workforce to various workplaces.
            </p>
            <p className={stylesss.missionpp}>
              Consequently, we aim to create a world where the success of
              organizations and their employees meets without precedent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MisionAndVision;
