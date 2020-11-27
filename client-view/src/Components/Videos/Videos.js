import React, { useContext } from "react";
import VideosContext from "../../context/videos/VideosContext";
import VideoItem from "./VideoItem";

const Videos = () => {
  const videosContext = useContext(VideosContext);
  const { videos } = videosContext;

  return videos ? (
    videos.map((video, index) => {
      return <VideoItem id={index} videoId={video.id.videoId} />;
    })
  ) : (
    <p>No Videos to show</p>
  );
};

export default Videos;
