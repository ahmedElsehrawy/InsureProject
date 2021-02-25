import React from "react";
import styles from "../styles/Aside.module.css";
import { Link } from "react-router-dom";
import image from "../assets/bg-pattern-mobile-nav.svg";

const Aside = ({ closeAside }) => {
  return (
    <div className={styles.aside}>
      <div className={styles.links}>
        <div className={styles.link} onClick={closeAside}>
          <Link to="/how-we-work">HOW WE WORK</Link>
        </div>
        <div className={styles.link} onClick={closeAside}>
          <Link to="blog">BLOG</Link>
        </div>
        <div className={styles.link} onClick={closeAside}>
          <Link to="account">ACCOUNT</Link>
        </div>
        <div className={styles.btn}>
          <button onClick={closeAside}>
            <Link to="/plans">VIEW PLANS</Link>
          </button>
        </div>
      </div>
      <div className={styles.svg}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Aside;
