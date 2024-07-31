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
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch("https://ad.aschpro.com/api/job"); // Replace with your API endpoint
        const data = await response.json();
        setJobData(data);
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
                    <tr key={job.id}>
                      <td>
                        <p className="text-center ms-2 mt-3">{job.job_id}</p>
                      </td>
                      <td className="text-center py-4">{job.role}</td>
                      <td className="text-center py-4">{job.location}</td>
                      <td className="text-center py-4">
                      <Link href={`/careers/${job.job_id}`} className={styles.decoration} >
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
