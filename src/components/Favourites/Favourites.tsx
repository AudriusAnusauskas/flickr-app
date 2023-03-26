import Photo from "../Photo/Photo";
import { FlickrPhoto } from "../../services/photo.service";
import { useEffect, useState } from "react";

import styles from "./Favourites.module.css";

const API_KEY = process.env.REACT_APP_FLICKR_API_KEY;

const FavouritesGallery: React.FC = () => {
  const [favouritePhotos, setFavouritePhotos] = useState<FlickrPhoto[]>([]);

  useEffect(() => {
    const photoIds = Object.keys(localStorage);
    Promise.all(
      photoIds.map(async (id) => {
        const response = await fetch(
          `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${API_KEY}&photo_id=${id}&format=json&nojsoncallback=1`
        );
        const data = await response.json();
        const { farm, server, secret, title, owner } = data.photo;
        return {
          id,
          farm,
          server,
          secret,
          title: title._content,
          authorname: owner.realname,
        };
      })
    ).then((photos) => setFavouritePhotos(photos));
  }, []);

  return (
    <div className={styles.galleryContainer}>
      {favouritePhotos.map((photo, index) => (
        <Photo key={index} photo={photo} />
      ))}
    </div>
  );
};

export default FavouritesGallery;
