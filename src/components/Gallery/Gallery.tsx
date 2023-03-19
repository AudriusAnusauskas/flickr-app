import { useState, useEffect } from "react";
import { getPhotos } from "../../services/photo.service";
import Loader from "../Loader/Loader";
import Photo from "../Photo/Photo";

import styles from "./Gallery.module.css";

export interface FlickrPhoto {
  id: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  authorname: string;
}

const Gallery: React.FC = () => {
  const [photos, setPhotos] = useState<FlickrPhoto[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      const newPhotos = await getPhotos("rockconcert");
      setPhotos(newPhotos);
      setIsLoading(false);
    };
    fetchPhotos();
  }, []);

  return (
    <div className={styles.galleryContainer}>
      {isLoading ? (
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      ) : (
        photos.map((photo) => <Photo key={photo.id} photo={photo} />)
      )}
    </div>
  );
};

export default Gallery;
