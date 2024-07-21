import React from 'react';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay container" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {/* <button className="modal-close" onClick={onClose}>X</button> */}
        {content}
      </div>
    </div>
  );
};

export default Modal;
