import { FlickrPhoto } from "../Gallery/Gallery";
import { useState } from "react";

import styles from "./Photo.module.css";

interface PhotoProps {
  photo: FlickrPhoto;
}

const Photo: React.FC<PhotoProps> = ({ photo }) => {
  const [isFavorited, setIsFavorited] = useState(
    localStorage.getItem(photo.id) !== null
  );

  const handleFavoriteClick = () => {
    if (!isFavorited) {
      localStorage.setItem(photo.id, "true");
    } else {
      localStorage.removeItem(photo.id);
    }
    setIsFavorited(!isFavorited);
  };

  return (
    <div className={styles.cardContainer}>
      <img
        src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
        alt={photo.title}
        key={photo.id}
      />
      <div className={styles.overlay}>
        <h2>
          {photo.title.length > 60 ? photo.title.substring(0, 60) : photo.title}
        </h2>
        <span className={styles.underline}></span>
        <h3>{photo.authorname}</h3>
        <button
          onClick={handleFavoriteClick}
          className={isFavorited ? styles.favorited : styles.notFavorited}
        >
          {isFavorited ? "Favourites -" : "Favourites"}
        </button>
      </div>
    </div>
  );
};

export default Photo;
