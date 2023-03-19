import { useState, useEffect } from "react";

export interface FlickrPhoto {
  id: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
}

const API_KEY = process.env.REACT_APP_FLICKR_API_KEY;

const Gallery: React.FC = () => {
  const [photos, setPhotos] = useState<FlickrPhoto[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=rockbands&per_page=30&page=1&format=json&nojsoncallback=1`
        );
        const data = await response.json();
        setPhotos(data.photos.photo);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPhotos();
  }, []);

  return (
    <div>
      {photos.map((photo) => (
        <img
          key={photo.id}
          src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
          alt={photo.title}
        />
      ))}
    </div>
  );
};

export default Gallery;
