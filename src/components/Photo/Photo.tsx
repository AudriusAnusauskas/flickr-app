import { FlickrPhoto } from "../Gallery/Gallery";

interface PhotoProps {
  photo: FlickrPhoto;
}

const Photo: React.FC<PhotoProps> = ({ photo }) => {
  return (
    <img
      src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
      alt={photo.title}
      key={photo.id}
    />
  );
};

export default Photo;
