import React from "react";
import styles from "../styles/Footer.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.socialMedia}>
          <h2>INSURE</h2>
          <div className={styles.icons}>
            <div className={styles.icon}>
              <FacebookIcon style={{ fontSize: 25 }} />
            </div>
            <div className={styles.icon}>
              <TwitterIcon style={{ fontSize: 25 }} />
            </div>
            <div className={styles.icon}>
              <PinterestIcon style={{ fontSize: 25 }} />
            </div>
            <div className={styles.icon}>
              <InstagramIcon style={{ fontSize: 25 }} />
            </div>
          </div>
        </div>
        <div className={styles.links}>
          <div className={styles.linkCategory}>
            <div className={styles.linkHeader}>OUR COMPANY</div>
            <ul>
              <li>HOW WE WORK</li>
              <li>WHY INSURE?</li>
              <li>VIEW PLANS</li>
              <li>REVIEWS</li>
            </ul>
          </div>
          <div className={styles.linkCategory}>
            <div className={styles.linkHeader}>HELP ME</div>
            <ul>
              <li>HOW WE WORK</li>
              <li>WHY INSURE?</li>
              <li>VIEW PLANS</li>
              <li>REVIEWS</li>
            </ul>
          </div>
          <div className={styles.linkCategory}>
            <div className={styles.linkHeader}>CONTACT</div>
            <ul>
              <li>HOW WE WORK</li>
              <li>WHY INSURE?</li>
              <li>VIEW PLANS</li>
              <li>REVIEWS</li>
            </ul>
          </div>
          <div className={styles.linkCategory}>
            <div className={styles.linkHeader}>OTHERS</div>
            <ul>
              <li>HOW WE WORK</li>
              <li>WHY INSURE?</li>
              <li>VIEW PLANS</li>
              <li>REVIEWS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
