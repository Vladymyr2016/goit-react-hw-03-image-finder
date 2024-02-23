import React from 'react';

const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  return (
    <div>
      <a href={largeImageURL}>
        <img src={webformatURL} alt="" />
      </a>
    </div>
  );
};

export default ImageGalleryItem;
