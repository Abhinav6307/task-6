import React from 'react';
import './ImageItem.css'; // Import CSS for styling

const ImageItem = ({ image, onClick }) => {
  return (
    <div className="image-item" onClick={onClick}>
      <img src={image.src} alt={image.alt} />
      </div>
  );
};

export default ImageItem;

      
   
