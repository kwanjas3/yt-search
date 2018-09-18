import React from "react";

const VideoListItem = props => {
  const video = props.video;
  const imageUrl = props.video.snippet.thumbnails.default.url;
  const onVideoSelect = props.onVideoSelect;
  return (
    <li
      className="list-group-item video-list-items"
      onClick={() => onVideoSelect(video)}
    >
      <div className="video-list media">
        <div className="media-left">
          <img src={imageUrl} alt="media thumbnail" className="media-object" />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
