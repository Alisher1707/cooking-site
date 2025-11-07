import './LoadingSpinner.css';

const LoadingSpinner = ({ size = 'medium', fullScreen = false }) => {
  const sizeClass = `spinner-${size}`;

  if (fullScreen) {
    return (
      <div className="loading-fullscreen">
        <div className={`loading-spinner ${sizeClass}`}>
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`loading-spinner ${sizeClass}`}>
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
