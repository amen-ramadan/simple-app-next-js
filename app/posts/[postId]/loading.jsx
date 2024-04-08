import React from 'react';
import './postDetailsPage.css'


export default function LoadingPostDetails() {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <div>Loading Post Details...</div>
    </div>
  );
}
