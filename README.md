# Flickr photo-gallery app

This is a simple react app that displays a gallery of photos from Flickr via API.
It allows users to browse through the gallery, and choose favorite photos. 
The gallery has infinite scroll implemented. This means that when a user scrolls to the end on the web page, next pages load automatically.
The app is responsive, it is designed to be browsed on desktop computers, tablets and mobile phone devices.

This app was created with 'create-react-app'.

## Installation

To install the app, clone the repository and run the following command:

### `npm install`

this will install all necessery dependencies and the app will be ready to run.

## Running the App

to run the app, use the following command:

### `npm start`

This will start the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

## Features

The main features of the app include:

  - Displaying the list of photos
  - Displaying info of each photo when hovering (info includes title and author)
  - The ability to Favourite/Unfavourite the photo
  - Infinite scroll
  - Responsive design
  
 ## More detailed info about the app
 
 The app consists of several components:
 
 ### `Layout` component
 It's purpose is to hold and display the structure of the layut of the app. /
 Currently it contains only `Gallery` component, but if app is to be further developed, there is a possibility to add more elements like header, footer, sidebar, etc.
 
 ### `Gallery` component
 The purpose of this component is to fetch and display a grid of photo items:
 
  ``` 
      const fetchPhotos = async () => {
      const newPhotos = await getPhotos("rockconcert", page);
      setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
      setIsLoading(false);
    };
  ```
    
  And the photos are fetched using a `photo.service` which includes the function function `getPhotos()` which makes the API call.
    
 `Gallery` component also has infinite scroll implemented:
 
 ```
 const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };
 ```
 
 ### `Loader` component
 This component contains animated spinnig wheel, which is displayed when the pgoto gallery is loading.
 
 ### `Photo` component
 This component displays each photo item as a card in a gallery grid. It displays the info of each photo on a darker overlay background when hovered. The info it   displays contains the title and the author of the photo. 
 It is worth to mention that the initial API call to get the list of photos only contains one of the required parameters - the title. The additional info abut the author of the photo is obtained by additional API call using `getInfo` method by the id of the photo.
 The function of getting the photos and info about them is `getPhotos` and it is written in the `photo.service`
 `Photo` component also includes the possibility for the used to Favourite/Unfavourite the photo. The Favourited photos are stored in browser's local storage, this way the state of Favourited photo is not lost when reloading the page. This functionality is implemented this way:
 
 ```
 const handleFavoriteClick = () => {
    if (!isFavorited) {
      localStorage.setItem(photo.id, "true");
    } else {
      localStorage.removeItem(photo.id);
    }
    setIsFavorited(!isFavorited);
  };
  ```
  
  ### The responsive design
  The responsiveness of the app is atchieved with `css` using `media queries`.
  There are introduced certain breakpoints that corrrespond to the devices this app could be browsed on - Desktop, Tablet, Phone.
  
  ### Contributors
  This app was developed by me, Audrius Anusauskas, as a homework assignment for Web Engineer position at Vinted Engineering Academy.
  
  
 
 
 
