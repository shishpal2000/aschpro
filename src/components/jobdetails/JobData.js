"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "../../styles/blogDetails.module.css";
import Button from "../../components/button";
import Link from "next/link";

const JobDetail = () => {
    const [jobData, setJobData] = useState(null);
    const [loading, setLoading] = useState(true);
    const pathName = usePathname();
    const router = useRouter();

    const handleClick = () => {
        const jobId = pathName.split("/").pop();
        router.push(`/careerform/?jobId=${jobId}`);
    };

    useEffect(() => {
        const fetchJobData = async () => {
            setLoading(true);
            const jobId = pathName.split("/").pop();
            if (jobId) {
                try {
                    const response = await fetch(`https://ashpro-backend.onrender.com/api/jobs/get-job/${jobId}`);
                    const responseData = await response.json();
                    console.log('API Response:', responseData); // Log the response data
                    if (responseData.success) {
                        setJobData(responseData.data);
                    } else {
                        console.error('Error: ', responseData.message);
                    }
                } catch (error) {
                    console.error('Error fetching Job data:', error);
                } finally {
                    setLoading(false);
                }
            } else {
                console.error('Invalid jobId in path');
                setLoading(false);
            }
        };

        fetchJobData();
    }, [pathName]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!jobData) {
        return <div>Job not found</div>;
    }

    const { job_description } = jobData;
    const { keyRequirements, keyResponsibilities } = job_description || {};

    return (
        <div className={styles.maincard}>
            <div className={`container ${styles.py_5}`}>
                <div className="row w-80">
                    <div className={styles.backcard}>
                        <h4>Key Requirements</h4>
                        {keyRequirements && keyRequirements.length > 0 ? (
                            <ul>
                                {keyRequirements.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No Requirements listed</p>
                        )}
                        <br />
                        <h4>Key Responsibilities</h4>
                        {keyResponsibilities && keyResponsibilities.length > 0 ? (
                            <ul>
                                {keyResponsibilities.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No responsibilities listed</p>
                        )}

                        <Button variant="primary" className={styles.buttons} onClick={handleClick}>Apply Now</Button>
                        <Link href="/careers">
                            <Button variant="primary" className={styles.buttons}>Back To Careers</Button>
                        </Link>
                        <br /><br />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetail;
