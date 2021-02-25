import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Aside from "./Aside";

const Navbar = ({ isOpen, closeAside }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Link to="/">INSURE</Link>
        </div>
        <div className={styles.links}>
          <div className={styles.link}>
            <Link to="/how-we-work">HOW WE WORK</Link>
          </div>
          <div className={styles.link}>
            <Link to="blog">BLOG</Link>
          </div>
          <div className={styles.link}>
            <Link to="account">ACCOUNT</Link>
          </div>
          <div className={styles.btn}>
            <button>
              <Link to="/plans">VIEW PLANS</Link>
            </button>
          </div>
        </div>
        <div className={styles.bars}>
          {!isOpen ? (
            <MenuIcon fontSize="large" onClick={closeAside} />
          ) : (
            <CloseIcon fontSize="large" onClick={closeAside} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
