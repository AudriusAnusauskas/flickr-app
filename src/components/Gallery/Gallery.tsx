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
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log("before fetchPhotos", page);

    const fetchPhotos = async () => {
      const newPhotos = await getPhotos("metalmusic", page);
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
