import styled from "styled-components";
import { useState, useRef } from "react";

import SearchBar from "./components/SearchBar";
import VideoPlayer from "./components/VideoPlayer";
import Playlist from "./components/Playlist";
import Videolist from "./components/Videolist";
import Loading from "./components/Loading";

const App = () => {
  const [currentVideo, setCurrentVideo] = useState({});
  const [playlist, setPlaylist] = useState([]);
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // parse data that returns from open ai and save to state
  const parseData = (data) => {
    let [title, songString] = data.split("\n\n");
    songString = songString.replace(/"/g, "");
    const songs = songString.split(", ");
    // setCurrentVideo(songs[0]);
    setPlaylist(songs);
    setCurrentVideo(songs[0]);
    getYoutubeVideos(currentVideo.title);
    setIsLoading(false);
  };

  // transforms a youtube url link to a embed link that works with the iframe
  const transformYoutubeUrl = (originalUrl) => {
    const regX = /v=([\w\W]+)/gi;
    const regMatch = originalUrl.match(regX);

    const embedId = regMatch[0].replace("v=", "");

    if (!embedId.length > 0) {
      console.log(embedId);
      throw new Error("Couldn't get embed ID from youtube video!");
    }

    return `https://www.youtube.com/embed/${embedId}?&autoplay=1`;
  };

  // searches for youtube videos using the song suggestion from open ai and saves the top 5 videos to videos state
  const getYoutubeVideos = (searchTerm) => {
    // get list of results from a youtube search using fetch request
    const prodApi = "/api/youtubeSearch";
    const devApi = "/api/mockYoutube";

    setIsLoading(true);
    fetch(devApi, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ searchQuery: searchTerm }),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        const vids = typeof resp === "string" ? JSON.parse(resp) : resp;

        const embedUrl = transformYoutubeUrl(vids[0].link);

        vids[0].embedUrl = embedUrl;
        setCurrentVideo(vids[0]);
        setVideos(vids.slice(0, 5));
        setIsLoading(false);
      })
      .catch((err) => console.log("Failed to get youtube data", err));
  };

  const handleGenerate = async (bookTitle) => {
    const prodApi = "/api/generate";
    const devApi = "/api/mockAI";

    setIsLoading(true);

    fetch(devApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bookTitle }),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        const output = resp.output;
        parseData(output.text);
      })
      .catch((err) => console.log("Failed to get ai output", err));
  };

  const newSongSelected = (song) => {
    getYoutubeVideos(song);
  };

  const newVideoSelected = (video) => {
    if (!video.embedUrl) {
      video.embedUrl = transformYoutubeUrl(video.link);
    }
    setCurrentVideo(video);
  };

  const togglePlaylist = () => {
    const playlist = document.querySelector("#playlist");
    if (playlist) {
      playlist.style.display = "grid";
    }
  };

  const toggleVideolist = () => {
    const videolist = document.querySelector("#videolist");
    if (videolist) {
      videolist.style.display = "grid";
    }
  };

  return (
    <AppContainer>
      <AppHeader>
        <h1>Book Beats</h1>
        <h3>The Ultimate Book-Music Connection</h3>
        <SearchBar handleGenerate={handleGenerate} />
      </AppHeader>

      {currentVideo.hasOwnProperty("title") && (
        <ToggleContainer>
          <Playlist list={playlist} newSelectionCallback={newSongSelected} />
          <PlaylistButton onClick={togglePlaylist}>
            Open Playlist
          </PlaylistButton>
          <Videolist list={videos} newSelectionCallback={newVideoSelected} />
          <PlaylistButton onClick={toggleVideolist}>
            Open Videolist
          </PlaylistButton>
        </ToggleContainer>
      )}

      <LeftImage src="/equilizer.png" />

      <Loading isLoading={isLoading} />

      <VideoPlayer currentVideo={currentVideo} />

      <RightImage src="/music_notes.png" />
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  background-color: black;
  width: 100vw;
  height: 100vh;
  background-image: url("/BookMusic.png");
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

const AppHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 300px;
  > h1 {
    font-size: 4em;
  }
`;

const LeftImage = styled.img`
  position: absolute;
  left: -25px;
  top: 45px;
  transform: rotate(-45deg);
`;

const RightImage = styled.img`
  position: absolute;
  right: -25px;
  bottom: 25px;
  transform: rotate(45deg);
`;

const PlaylistButton = styled.div`
  border: 1px solid white;
  background-color: #00ffff;
  padding: 0 0.5rem;
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
  :hover {
    cursor: pointer;
    background-color: orange;
    color: white;
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
`;
