import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";
import HeaderImage from "../assets/headerImage.jpg";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <div className={styles.content}>
          <div>
            Humanizing <br /> your insurance.
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. earum
            laudantium laboriosam? <br /> Autem, illum ipsam ducimus totam magni
            aut consequuntur. adipisicing elit dolor
            <br />
            Lorem ipsum sit amet consectetur adipisicing elit. Officiis, velit.
          </p>
          <div className={styles.btn}>
            <Link>
              <button>VIEW PLANS</button>
            </Link>
          </div>
        </div>
        <div className={styles.img}>
          <img src={HeaderImage} alt="header Image" />
        </div>
      </div>
      <div className={styles.white}></div>
    </div>
  );
};

export default Header;
