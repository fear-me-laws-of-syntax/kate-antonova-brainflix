// import React from "react";
// import videos from "src/assets/images/Upload-video-preview.jpg"
import "./VideoMain.scss";

let VideoMain = () => 
// = ({ selectedVideoId }) => 
// {
  // const filteredVideo = videos.find((video) => video.id === selectedVideoId);
  // const videoToDisplay = filteredVideo ? filteredVideo : videos[0];

 {
return (
    <div className="video-main">
      {/* <video poster={videoToDisplay.image} controls>
        <source src={videoToDisplay.video} /> */}

<video poster="src/assets/images/Upload-video-preview.jpg" controls> 
      </video>
    </div>
  );
};

export default VideoMain;
