import { FlickrPhoto } from "../Gallery/Gallery";

import styles from "./Photo.module.css";

interface PhotoProps {
  photo: FlickrPhoto;
}

const Photo: React.FC<PhotoProps> = ({ photo }) => {
  return (
    <div className={styles.cardContainer}>
      <img
        src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
        alt={photo.title}
        key={photo.id}
      />
      <div className={styles.overlay}>
        <h2>{photo.title}</h2>
        <span className={styles.underline}></span>
        <h3>{photo.authorname}</h3>
        <button>Favourite</button>
      </div>
    </div>
  );
};

export default Photo;
