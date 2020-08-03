import React from 'react';

import './backgroundVideo.css';

function BackgroundVideo({ mp4, webm, poster }) {
  return (
    <video
      className="BackgroundVideo"
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
    >
      <source src={webm} type="video/webm" />
      <source src={mp4} type="video/mp4" />
      <img src={poster} alt="" />
    </video>
  );
}

export default BackgroundVideo;
