import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const List = props.videos.map((items) => {
    return (
      <VideoItem
        key={items.id.videoId}
        onVideoSelect={props.onVideoSelect}
        videos={items}
      />
    );
  });
  return <div className="ui relaxed divided list">{List}</div>;
};

export default VideoList;
