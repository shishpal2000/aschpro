"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import styles from "../../styles/blogDetails.module.css";
import Button from "../../components/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const JobDetail = () => {
    const [JobData, setJobData] = useState(null);
    const pathName = usePathname();
    const router=useRouter();

    const handleClick=()=>{
        const slug = pathName.split("/").pop(); 
        router.push(`/careerform/?slug=${slug}`)
    }

    useEffect(() => {
        if (pathName) {
            const slug = pathName.split("/").pop(); // Extract the slug from the pathname

            fetch(`https://ad.aschpro.com/api/job/${slug}`)
                .then(response => response.json())
                .then(data => setJobData(data))
                .catch(error => console.error('Error fetching blog data:', error));
        }
    }, [pathName]);

    if (!JobData) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.maincard} >
        
                <div className={`container ${styles.py_5}`}>
                    <div className="row w-80">


                        <div className={styles.backcard} >
                            <p dangerouslySetInnerHTML={{ __html: JobData.description }}></p>
                            <br/><br/>
                           
                                <Button variant="primary" className={styles.buttons} onClick={handleClick}>Apply Now</Button>
                          
                            <Link href="/careers">
                                <Button variant="primary" className={styles.buttons}>Back To Careers</Button>
                            </Link>
                            <br/><br/>
                        </div>


                    </div>
                </div>
            </div>
       
    );
};

export default JobDetail;
