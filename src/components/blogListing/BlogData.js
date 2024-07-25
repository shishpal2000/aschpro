"use client";
import React from "react";
import { useState } from "react";
import styles from "../../styles/blogListing.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const BlogData = () => {
  const [role, setRole] = useState("all");
  const [team, setTeam] = useState("programming");
  const [location, setLocation] = useState("london");

  const LocationRoleChange = (event) => setRole(event.target.value);
  const handleTeamChange = (event) => setTeam(event.target.value);
  const handleLocationChange = (event) => setLocation(event.target.value);

  return (
    <div>
      <div>
        <div className="container py-5 ">
        <div className={styles.container}>
     
   
    </div>
        </div>
      </div>
    </div>
  );
};

export default BlogData;
