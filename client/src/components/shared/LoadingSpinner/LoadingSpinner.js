import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
    return (<>
        <div className="LoadingSpinner-container vh-100 d-flex flex-column justify-content-center align-items-center">
            <div className="LoadingSpinner-spinner spinner-border text-primary" role="status">
            </div>
            <p className="LoadingSpinner-text sr-only h3">Loading...</p>
        </div>
    </>)
}

export default LoadingSpinner;