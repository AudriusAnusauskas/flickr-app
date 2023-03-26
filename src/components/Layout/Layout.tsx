import React, { useState } from "react";
import Gallery from "../Gallery/Gallery";
import Favourites from "../Favourites/Favourites";

import style from "./Layout.module.css";

const Layout: React.FC = () => {
  const [showFavourites, setShowFavourites] = useState(false);

  const toggleFavourites = () => {
    setShowFavourites(!showFavourites);
  };

  return (
    <div className={style.layout} data-testid="gallery">
      <header className={style.header}>
        <button onClick={toggleFavourites} className={style.favButton}>
          {showFavourites ? "Show Gallery" : "Show Favourites"}
        </button>
      </header>
      {!showFavourites ? <Gallery /> : <Favourites />}
    </div>
  );
};

export default Layout;
