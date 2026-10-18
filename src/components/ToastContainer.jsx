import React from 'react';

export default function ToastContainer({ toast, onClose }) {
  if (!toast) return null;

  return (
    <div className="lce-toast-wrap">
      <div className="lce-toast">
        <div className="lce-toast-icon">✨</div>
        <div className="lce-toast-msg">{toast}</div>
        <button className="lce-toast-close" onClick={onClose} aria-label="Close notification">
          &times;
        </button>
      </div>
    </div>
  );
}
