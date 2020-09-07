import "./VideoItem.css";
import React from "react";

const VideoItem = ({ videos, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(videos)} className="video-item item">
      <img
        alt={videos.snippet.title}
        className="ui image"
        src={videos.snippet.thumbnails.high.url}
      />
      <div className="content">
        <div className="header">{videos.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
