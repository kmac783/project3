import React from "react";

const VideoItem = (props) => {
  return (
    <div>
      <iframe
        width='220'
        height='135'
        src={`https://www.youtube.com/embed/${props.videoId}`}
        class='responsive-video'
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default VideoItem;
