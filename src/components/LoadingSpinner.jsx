import React from 'react';

function LoadingSpinner({ size = 'md', text = '', className = '' }) {
  const sizes = {
    sm: { width: '24px', height: '24px', border: '3px' },
    md: { width: '40px', height: '40px', border: '4px' },
    lg: { width: '64px', height: '64px', border: '5px' }
  };

  const sizeStyles = sizes[size];

  return (
    <div className={`loading-spinner-container ${className}`}>
      <div 
        className="loading-spinner"
        style={{
          width: sizeStyles.width,
          height: sizeStyles.height,
          borderWidth: sizeStyles.border,
        }}
      />
      {text && <p className="loading-text">{text}</p>}
    </div>
  );
}

export default LoadingSpinner;
