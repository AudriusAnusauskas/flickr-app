import React from "react";
import Gallery from "../Gallery/Gallery";

import style from "./Layout.module.css";

const Layout: React.FC = () => {
  return (
    <div className={style.layout} data-testid="gallery">
      <Gallery />
    </div>
  );
};

export default Layout;
