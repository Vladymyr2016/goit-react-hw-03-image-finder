import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ hits }) => {
  return (
    <ul>
      {hits.map(hit => {
        return <ImageGalleryItem key={hits.id} {...hit} />;
      })}
    </ul>
  );
};

export default ImageGallery;
