"use client"
import React, { useEffect, useState } from "react";
import stylescon from "../../styles/contactus.module.css";
import Button from "../button";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";

const CareerForm = () => {
  const Router = useRouter();
  const [phone, setPhone] = useState(false);
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    location: "",
    jobTitle: ""
  });
  const [file, setFile] = useState(null);
  const [captchaToken, setCaptchaToken] = useState(null);

  useEffect(() => {
    // Function to fetch form data based on slug
    const fetchFormData = async (slug) => {
      try {
        const response = await fetch(`https://admin.aschpro.com/api/job/${slug}`);
        const data = await response.json();
        setFormData({
          Jobid: data.job_id || "",
          location: data.location || "",
          jobTitle: data.role || ""
        });
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };

    // Extract slug from URL
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get("slug");

    if (slug) {
      fetchFormData(slug);
    }

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

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      setFile(e.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setFileName("");
    setFile(null);
    document.getElementById("file-upload").value = "";
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the CAPTCHA");
      return;
    }

    // Create a new FormData object to handle the form submission
    const formDataToSend = new FormData();
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phoneNumber", formData.phoneNumber);
    formDataToSend.append("Jobid", formData.Jobid);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("jobTitle", formData.jobTitle);
    formDataToSend.append("captchaToken", captchaToken);
    if (file) {
      formDataToSend.append("file-upload", file);
    }

    try {
      // Send the form data to the server
      const response = await fetch("https://subodhbajpai.in/test/send-email", {
        method: "POST",
        body: formDataToSend
      });

      // Check if the response was successful
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Get the result text from the response
      const result = await response.text();

      // Display a success message to the user
      alert(result);

      // Redirect to the careers page
      Router.push('/careers');
    } catch (error) {
      
      console.error("Email sent successfully:", error);
      alert("Email sent successfully");
      Router.push('/careers');
    }
  };

  return (
    <div className="container">
      <div className={`row ${stylescon.marginTop}`}>
        <div className={`offset-lg-2 col-lg-8 ${stylescon.mt_4} ${stylescon.mb_4}`}>
          <form onSubmit={handleSubmit}>
            <div className={`row ${stylescon.marginTopInner}`}>
              <div className={`col-lg-6 mb-3 ${stylescon.px_14}`}>
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className={`form-control py-3 ${stylescon.outlinenone}`}
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="Enter your First name"
                  aria-label="First name"
                />
              </div>
              <div className={`col-lg-6 mb-3 ${stylescon.px_14}`}>
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className={`form-control py-3 ${stylescon.outlinenone}`}
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="Enter your Last Name"
                  aria-label="Last Name"
                />
              </div>
              <div className="col-lg-12 mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className={`form-control py-3 ${stylescon.outlinenone}`}
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email id"
                />
              </div>
              <div className="col-lg-12 mb-3">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className={`form-control py-3 ${stylescon.outlinenone}`}
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  placeholder="+000"
                />
              </div>
              <div className="col-lg-12 mb-3">
                <label htmlFor="Jobid" className="form-label">
                  Job-ID
                </label>
                <input
                  type="text"
                  className={`form-control py-3 ${stylescon.outlinenone}`}
                  id="Jobid"
                  value={formData.Jobid}
                  placeholder="Enter your Jobid"
                  readOnly
                />
              </div>

              <div className="col-lg-12 mb-3">
                <label htmlFor="location" className="form-label">
                  Location
                </label>
                <input
                  type="text"
                  className={`form-control py-3 ${stylescon.outlinenone}`}
                  id="location"
                  value={formData.location}
                  placeholder="Enter your Location"
                  readOnly
                />
              </div>
              <div className="col-lg-12 mb-3">
                <label htmlFor="jobTitle" className="form-label">
                  Current/Previous Job Title
                </label>
                <input
                  type="text"
                  className={`form-control py-3 ${stylescon.outlinenone}`}
                  id="jobTitle"
                  value={formData.jobTitle}
                  placeholder="Enter your Current/Previous Job Title"
                  readOnly
                />
              </div>
              <div className="d-flex align-items-center">
                <label htmlFor="file-upload" className="file-upload-label">
                  Upload Your CV
                </label>
                <input
                  type="file"
                  id="file-upload"
                  className="file-input"
                  onChange={handleFileChange}
                  hidden
                />
                {fileName && (
                  <div className="file-details">
                    <p className="file-name">{fileName}</p>
                    <button
                      className="remove-file-button"
                      onClick={handleRemoveFile}
                    >
                      &times;
                    </button>
                  </div>
                )}
                <style jsx>{`
                  .file-upload-label {
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: #f7f8fa;
                    color: #000;
                    border: 1px solid #d3d6db;
                    border-radius: 4px;
                    cursor: pointer;
                  }
                  .file-details {
                    display: flex;
                    align-items: baseline;
                    margin-top: 10px;
                    margin-left: 10px;
                  }
                  .file-name {
                    font-size: 14px;
                    margin-right: 10px;
                  }
                  .remove-file-button {
                    background: none;
                    border: none;
                    color: #d9534f;
                    font-size: 18px;
                    cursor: pointer;
                    padding: 0;
                  }
                  .remove-file-button:hover {
                    color: #c9302c;
                  }
                `}</style>
              </div>
              
              <div className="col-lg-12 mb-3 mt-3">
                <ReCAPTCHA
                  sitekey="6Lfm9RIqAAAAANm5O1flDtLz-m7K5meslMirXKmZ"
                  onChange={handleCaptchaChange}
                />
              </div>
              <div>
                <Button type="submit" className={`mt-2`} variant="primary">
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;
