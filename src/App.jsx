import { useState } from "react";
import Header from "./components/Header/Header";
import VideoMain from "./components/VideoMain/VideoMain";
import VideoMainDetails from "./components/VideoMainDetails/VideoMainDetails";
import CommentList from "./components/CommentList/CommentList";
import videos from "./data/video-details.json";
import VideoList from "./components/VideoList/VideoList";


import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UploadPage from "./pages/UploadPage/UploadPage"


import "./App.scss";

// jhgest4


function App() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  return (
    <>
      <div>
        <Header />
        <VideoMain video={selectedVideo} />
      </div>

      <main className="main">

        <div>
          <VideoMainDetails selectedVideo={selectedVideo} />
          <CommentList comments={selectedVideo.comments} />
        </div>

        <VideoList
          selectedVideo={selectedVideo}
          setSelectedVideo={setSelectedVideo}
        />
      </main>

    </>
  );
}

export default App;
