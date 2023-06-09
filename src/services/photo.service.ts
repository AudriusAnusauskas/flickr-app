export interface FlickrPhoto {
  id: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  authorname: string;
}

const API_KEY = process.env.REACT_APP_FLICKR_API_KEY;

export const getPhotos = async (
  tags: string,
  page: number,
  perPage: number
): Promise<FlickrPhoto[]> => {
  try {
    const response = await fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${tags}&per_page=${perPage}&page=${page}&format=json&nojsoncallback=1`
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
