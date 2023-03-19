import { useState, useEffect } from "react";
import { getPhotos } from "../../services/photo.service";
import Photo from "../Photo/Photo";

export interface FlickrPhoto {
  id: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
}

const Gallery: React.FC = () => {
  const [photos, setPhotos] = useState<FlickrPhoto[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const newPhotos = await getPhotos("rockconcert");
      setPhotos(newPhotos);
    };
    fetchPhotos();
  }, []);

  return (
    <div>
      {photos.map((photo) => (
        <Photo key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default Gallery;
