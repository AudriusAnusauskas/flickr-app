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

## Running the unit tests

to run the unit tests written to the components please use the following command:

### `npm test`

## Features

The main features of the app include:

  - Displaying the list of photos
  - Displaying the info of each photo when hovering (info includes title and author)
  - The ability to Favourite/Unfavourite the photo
  - Displaying the list of Favourited photos
  - Infinite scroll
  - Responsive design
  
 ## More detailed info about the app
 
 ### The app consists of several components:
 
 ### `Layout` component
 It's purpose is to hold and display the structure of the layout of the app. \
 Currently it contains header and `Gallery`/ `Favourites` components that are rendered interchangably, but if the app is to be further developed, there is a possibility to add more elements like footer, sidebar, etc.
 
 ### `Gallery` component
 The purpose of this component is to display a grid of photo items.\
 This component has a `fetchPhotos()` function which calls the `getPhotos()` function in `photos.service` by providing 'tags' (keyword, which is hardcoded at the moment and it is possible to implement search functionality when developing the app further), page number and items per page.  It then gets a response - the JSON with the necessery data to render the photos and passes it as props to the `Photo` component that renders each photo.
 `Gallery` component also has infinite scroll implemented.
  
 ### `Loader` component
 This component is used inside the `Gallery` component and contains animated spinnig wheel, which is displayed when the photo gallery is loading.
 
 ### `Photo` component
 This component is used in `Gallery` and `Favourites` components. It displays each photo item as a card in a gallery grid. It also displays the info of each photo on a darker overlay background when hovered. The info it displays contains the title and the author of the photo. 
 It is worth to mention that the initial API call in `photo.service` that gets the list of photos only contains one of the required parameters - the title. The additional info about the author of the photo is obtained by additional API call using `getInfo` api method by the id of each of the photos.
 `Photo` component also includes the possibility for a user to Favourite/Unfavourite the photo. The Favourited photos are stored in browser's local storage, this way the state of Favourited photo is not lost when reloading the page. The list of favourited photos is displayed in `Favourites` component.
 
 ### `Favourites` component
 This component displays the gallery of favourited photos. The Id of each favourited pfoto is stored in browser's local storage, and this component uses this Id to fetch the data of each favourited photo and pass it as props to `Photo` component to then be displayed.
  
  ### The responsive design
  The responsiveness of the app is atchieved with `css` using `media queries`.
  There are introduced certain breakpoints that corrrespond to the devices this app could be browsed on - Desktop, Tablet, Phone.
  
  ### Contributors
  This app was developed by me, Audrius Anusauskas, as a homework assignment for a Web Engineer position at Vinted Engineering Academy.
  
  
 
 
 
