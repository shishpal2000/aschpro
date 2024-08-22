"use client";

import React, { useEffect, useState } from "react";
import stylescon from "../../styles/contactus.module.css";
import Button from "../../components/button";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [contactInfo, setContactInfo] = useState({ email: "", address: "" });
  const [phone, setPhone] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setPhone(window.innerWidth < 480);
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
        const response = await fetch(
          "https://api.aschpro.com/api/contactinfo/get-contact-info"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setContactInfo(data.data);
      } catch (error) {
        console.error("Error fetching contact info:", error);
      }
    };

    fetchContactInfo();
  }, []);

  const validateForm = (formData) => {
    const newErrors = {};

    if (!formData.get("first_name")) {
      newErrors.first_name = "First name is required";
    }

    if (!formData.get("last_name")) {
      newErrors.last_name = "Last name is required";
    }

    const phonePattern = /^[0-9]{10}$/;
    if (
      !formData.get("phone_number") ||
      !phonePattern.test(formData.get("phone_number"))
    ) {
      newErrors.phone_number = "Valid phone number is required";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !formData.get("email_address") ||
      !emailPattern.test(formData.get("email_address"))
    ) {
      newErrors.email_address = "Valid email address is required";
    }

    if (!formData.get("message")) {
      newErrors.message = "Message cannot be empty";
    }

    if (!formData.get("privacy_policy")) {
      newErrors.privacy_policy = "You must agree with the Privacy Policy";
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return; // Prevent multiple submissions

    setIsSubmitting(true);
    const formData = new FormData(event.target);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        "https://api.aschpro.com/api/contact/submit-form",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      if (result.success) {
        Swal.fire({
          icon: "success",
          title: "Success!",
        }).then(() => {
          window.location.reload();
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: result.message || "Failed to send message.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred.",
      });
    } finally {
      setIsSubmitting(false);
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
                {errors.first_name && <p className={stylescon.error}>{errors.first_name}</p>}
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
                {errors.last_name && <p className={stylescon.error}>{errors.last_name}</p>}
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
                  pattern="^[0-9]{10}$"
                />
                {errors.phone_number && <p className={stylescon.error}>{errors.phone_number}</p>}
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
                {errors.email_address && <p className={stylescon.error}>{errors.email_address}</p>}
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
                  {errors.message && <p className={stylescon.error}>{errors.message}</p>}
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
                {errors.privacy_policy && <p className={stylescon.error}>{errors.privacy_policy}</p>}
              </div>
              <div>
                <Button
                  type="submit"
                  className={`mt-2`}
                  variant="primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </div>
          </form>
        </div>

        <div className={`col-lg-4 ${stylescon.mt_4} ${stylescon.mb_4}`}>
          <div className={stylescon.conta}>
            <h2 className={stylescon.contah5}>Get in touch</h2>
            <p>
              We&apos;d love to hear from you! Whether it&apos;s a query
              regarding executive search or you need guidance on hiring the right
              talent.
            </p>
          </div>
          <div className={stylescon.conta}>
            <h2 className={`py-2 ${stylescon.contah5}`}>Address</h2>
            <p style={{ margin: 0 }}>{contactInfo.address}</p>
          </div>
          <div className={stylescon.conta}>
            <h2 className={`py-2 ${stylescon.contah5}`}>Email</h2>
            <p style={{ margin: 0 }}>{contactInfo.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
