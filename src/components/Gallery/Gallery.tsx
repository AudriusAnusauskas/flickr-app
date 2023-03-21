import { useState, useEffect } from "react";
import { getPhotos, FlickrPhoto } from "../../services/photo.service";
import Loader from "../Loader/Loader";
import Photo from "../Photo/Photo";

import styles from "./Gallery.module.css";

const Gallery: React.FC = () => {
  const [photos, setPhotos] = useState<FlickrPhoto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPhotos = async () => {
      const newPhotos = await getPhotos("rockconcert", page);
      setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
      setIsLoading(false);
    };
    fetchPhotos();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.galleryContainer}>
      {isLoading ? (
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      ) : (
        photos.map((photo, index) => <Photo key={index} photo={photo} />)
      )}
    </div>
  );
};

export default Gallery;
