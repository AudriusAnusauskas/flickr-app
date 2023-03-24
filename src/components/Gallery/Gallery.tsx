import { useState, useEffect } from "react";
import { getPhotos, FlickrPhoto } from "../../services/photo.service";
import Loader from "../Loader/Loader";
import Photo from "../Photo/Photo";

import styles from "./Gallery.module.css";

const Gallery: React.FC = () => {
  const [photos, setPhotos] = useState<FlickrPhoto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [perPage] = useState(24);
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    const fetchPhotos = async () => {
      const newPhotos = await getPhotos("rockconcert", page, perPage);
      if (!newPhotos || newPhotos.length === 0) {
        setAllLoaded(true);
      } else {
        setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
        setIsLoading(false);
      }
    };
    fetchPhotos();
  }, [page, perPage]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        !allLoaded &&
        window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [allLoaded]);

  return (
    <div className={styles.galleryContainer}>
      {isLoading ? (
        <div data-testid="loader" className={styles.loaderContainer}>
          <Loader />
        </div>
      ) : (
        <>
          {photos.map((photo, index) => (
            <div data-testid="photo">
              <Photo key={index} photo={photo} />
            </div>
          ))}
          {"Loading more photos...."}
        </>
      )}
    </div>
  );
};

export default Gallery;
