import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = props => {
  const videoList = props.videos.map(video => (
    <VideoListItem
      video={video}
      key={video.etag}
      onVideoSelect={props.onVideoSelect}
    />
  ));

  return (
    <div className="col-md-4 list-group">
      <ul>{videoList}</ul>
    </div>
  );
};

export default VideoList;
