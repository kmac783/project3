import React, { useContext } from "react";
import VideosContext from "../../context/videos/VideosContext";

const VideoItem = (props) => {
  const videosContext = useContext(VideosContext);
  const { videos, getVideos } = videosContext;
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
