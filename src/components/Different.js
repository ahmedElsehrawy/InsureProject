import React from "react";
import styles from "../styles/Different.module.css";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import PersonIcon from "@material-ui/icons/Person";

const Different = () => {
  return (
    <div className={styles.different}>
      <div className={styles.header}>We're different</div>
      <div className={styles.categories}>
        <div className={styles.item}>
          <div className={styles.vector}>
            <FlashOnIcon fontSize="large" />
          </div>
          <h2>Snappy Process</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla
            maxime natus, ipsum possimus quasi.
          </p>
        </div>
        <div className={styles.item}>
          <div className={styles.vector}>
            <AttachMoneyIcon fontSize="large" />
          </div>
          <h2>People First</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla
            maxime natus, ipsum possimus quasi.
          </p>
        </div>
        <div className={styles.item}>
          <div className={styles.vector}>
            <PersonIcon fontSize="large" />
          </div>
          <h2>Affortable Price</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla
            maxime natus, ipsum possimus quasi.
          </p>
        </div>
      </div>

      <div className={styles.findSec}>
        <div className={styles.findHeader}>
          Find Out More <br /> About how we work
        </div>
        <div className={styles.btn}>
          <button>How We Work</button>
        </div>
      </div>
    </div>
  );
};

export default Different;
