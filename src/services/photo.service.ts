import { FlickrPhoto } from "../components/Gallery/Gallery";

const API_KEY = process.env.REACT_APP_FLICKR_API_KEY;

export const getPhotos = async (tags: string): Promise<FlickrPhoto[]> => {
  try {
    const response = await fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${tags}&per_page=30&page=1&format=json&nojsoncallback=1`
    );
    const data = await response.json();
    return data.photos.photo;
  } catch (error) {
    console.log(error);
    return [];
  }
};
