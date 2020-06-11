import React from 'react';
import './LoadingSpinner.scss';

export const LoadingSpinner = () => (
<div className="loading-spinner d-flex justify-content-center">
  <div className=" spinner-border text-secondary" style={{ width: '100px', height: '100px' }}>
    <span className="sr-only">Loading...</span>
  </div>
</div>
);
