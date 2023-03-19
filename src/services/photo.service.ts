import { FlickrPhoto } from "../components/Gallery/Gallery";

const API_KEY = process.env.REACT_APP_FLICKR_API_KEY;

export const getPhotos = async (tags: string): Promise<FlickrPhoto[]> => {
  try {
    const response = await fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${tags}&per_page=35&page=1&format=json&nojsoncallback=1`
    );
    const data = await response.json();
    const photos = data.photos.photo;
    const photoPromises = photos.map(async (photo: FlickrPhoto) => {
      const infoResponse = await fetch(
        `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${API_KEY}&photo_id=${photo.id}&format=json&nojsoncallback=1`
      );
      const infoData = await infoResponse.json();
      const authorname =
        infoData.photo.owner.realname || infoData.photo.owner.username;
      return { ...photo, authorname };
    });

    const photosWithAuthor = await Promise.all(photoPromises);

    return photosWithAuthor;
  } catch (error) {
    console.log(error);
    return [];
  }
};
