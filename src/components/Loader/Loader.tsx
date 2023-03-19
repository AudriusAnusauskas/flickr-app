import React from "react";

import styles from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={styles.backdrop}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loader;
