"use client";
import React, { useEffect, useState } from "react";
import stylescon from "../../styles/contactus.module.css";
import Button from "../../components/button";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const Router=useRouter()
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch('https://subodhbajpai.in/test/email', {
        method: 'POST',
        body: formData,
      });

      const result = await response.text();
      if (result === 'success') {
        alert('Message sent successfully!');
        window.location.reload();
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

  return (
    <div className="container">
      <div className={`row ${stylescon.marginTop}`}>
        <div className={`col-lg-8 ${stylescon.mt_4} ${stylescon.mb_4}`}>
          <form onSubmit={handleSubmit}>
            <div className={`row ${stylescon.marginTopInner}`}>
              <div className={`col-lg-6 mb-4 ${stylescon.px_14}`}>
                <label htmlFor="first_name" className={`form-label ${stylescon.fontWait}`}>
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  className={`form-control py-2 ${stylescon.outlinenone}`}
                  placeholder="Enter first name"
                  aria-label="First name"
                  required
                />
              </div>
              <div className="col-lg-6 mb-4">
                <label htmlFor="last_name" className={`form-label ${stylescon.fontWait}`}>
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  className={`form-control py-2 ${stylescon.outlinenone}`}
                  placeholder="Enter last name"
                  required
                />
              </div>
              <div className="col-lg-6 mb-3">
                <label htmlFor="phone_number" className={`form-label ${stylescon.fontWait}`}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone_number"
                  className={`form-control py-2 ${stylescon.outlinenone}`}
                  placeholder="Enter phone number"
                  required
                />
              </div>
              <div className="col-lg-6 mb-3">
                <label htmlFor="email_address" className={`form-label ${stylescon.fontWait}`}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email_address"
                  className={`form-control py-2 ${stylescon.outlinenone}`}
                  placeholder="Enter email address"
                  required
                />
              </div>
              <div className="col-lg-12 mb-3 mt-3">
                <div className="mb-3">
                  <label htmlFor="message" className={`form-label ${stylescon.fontWait}`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    className={`form-control py-2 ${stylescon.outlinenone}`}
                    id="message"
                    rows="3"
                    placeholder="Hi! We are Lookscout..."
                    required
                  />
                </div>
              </div>
              <div className="col-lg-12 mb-3 form-check ms-2">
                <input
                  type="checkbox"
                  name="privacy_policy"
                  className={`form-check-input ${stylescon.outlinenone}`}
                  id="privacy_policy"
                  required
                />
                <label className="form-check-label" htmlFor="privacy_policy">
                  I Agree with the Privacy Policy
                </label>
              </div>
              <div>
                <Button type="submit" className={`mt-2`} variant="primary">
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </div>

        <div className={`col-lg-4 ${stylescon.mt_4} ${stylescon.mb_4}`}>
          <div className={stylescon.conta}>
            <h5 className={stylescon.contah5}>Get in touch</h5>
            <p>
              We&apos;d love to hear it from you! Whether it&apos;s a query
              regarding executive search, or need guidance on hiring the right
              talent.
            </p>
          </div>
          <div className={stylescon.conta}>
            <h5 className={`py-2 ${stylescon.contah5}`}>Address</h5>
            <p style={{ margin: 0 }}>Plot No 83, Sainath colony, Panama Godowns,</p>
            <p style={{ margin: 0 }}>Vanasthalipuram, Hyderabad 500 070</p>
          </div>
          <div className={stylescon.conta}>
            <h5 className={`py-2 ${stylescon.contah5}`}>Email</h5>
            <p style={{ margin: 0 }}>info@aschpro.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
