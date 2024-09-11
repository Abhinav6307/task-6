import React from 'react';
import './Modal.css'; // Import CSS for styling

const Modal = ({ image, onClose, onNext, onPrev }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <button className="modal-prev" onClick={onPrev}>‹</button>
        <img src={image.src} alt={image.alt} className="modal-image" />
        <button className="modal-next" onClick={onNext}>›</button>
      </div>
    </div>
  );
};

export default Modal;
