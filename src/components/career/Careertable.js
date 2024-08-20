"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/career.module.css";

const Careertable = () => {
  const [role, setRole] = useState("all");
  const [team, setTeam] = useState("programming");
  const [location, setLocation] = useState("london");
  const [phone, setPhone] = useState(false);
  const [jobData, setJobData] = useState([]);


  const LocationRoleChange = (event) => setRole(event.target.value);
  const handleTeamChange = (event) => setTeam(event.target.value);
  const handleLocationChange = (event) => setLocation(event.target.value);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://ashpro-backend.onrender.com/api/jobs/all-jobs"); // Replace with your API endpoint
        const result = await response.json();

        // Debugging: Check the structure of the API response
        console.log('API Response:', result);

        // Extract the data array from the response
        if (result.success && Array.isArray(result.data)) {
          setJobData(result.data);
        } else {
          console.error('Unexpected response structure:', result);
        }
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <div className={`container ${styles.marginTop}`}>
          <div className="row">
            <div className={`${styles.tabledata} ${styles.width_value}`}>
              <table className={`table table-bordered table-custom ${styles.padding_left_right}`}>
                <thead>
                  <tr>
                    <th width={350} className="text-center py-3">
                      <p>ID</p>
                    </th>
                    <th width={500} className="text-center py-3">
                      <p className="ms-3 mt-1">Role/Title</p>
                    </th>
                    <th width={350} className="text-center py-3">
                      <p>Location</p>
                    </th>
                    <th width={350} className="text-center py-3">
                      <p>Know More To Apply</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {jobData.map((job) => (
                    <tr key={job.jobId}>
                      <td className="text-center py-4">{job.jobId}</td>
                      <td className="text-center py-4">{job.role}</td>
                      <td className="text-center py-4">{job.location}</td>
                      <td className="text-center py-4">
                        <Link href={`/careers/${job.jobId}`} className={styles.decoration}>
                          Know More
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careertable;