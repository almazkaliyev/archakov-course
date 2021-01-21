const CircularProgress = () => {
  return (
    <div className="loading-container">
      <div className="circular-progress">
        <svg className="circular-progress__svg" viewBox="22 22 44 44">
          <circle className="circular-progress__circle" cx="44" cy="44" r="20.2" fill="none" strokeWidth="3.6"></circle>
        </svg>
      </div>
    </div>
  );
};

export default CircularProgress;
