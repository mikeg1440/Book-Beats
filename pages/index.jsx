import styled from "styled-components";
import { useState } from "react";

import SearchBar from "./components/SearchBar";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  const [songName, setSongName] = useState("");
  const [videoSrc, setVideoSrc] = useState("");

  const parseData = (data) => {
    let [title, songString] = data.split("\n\n");
    songString = songString.replace(/"/g, "");
    const songs = songString.split(", ");
    setSongName(songs[0]);
    getYoutubeVideo(songName);
  };

  // transforms a youtube url link to a embed link that works with the iframe
  const transformYoutubeUrl = (originalUrl) => {
    const regX = /v=([\w]+)/gi;
    const regMatch = originalUrl.match(regX);

    const embedId = regMatch[0].replace("v=", "");

    if (!embedId.length > 0) {
      console.log(embedId);
      // throw new Error("Embed ID not found!");
      throw new Error("Couldn't get embed ID from youtube video!");
    }

    return `https://www.youtube.com/embed/${embedId}?&autoplay=1`;
  };

  const getYoutubeVideo = (searchTerm) => {
    // get list of results from a youtube search using fetch request
    const prodApi = "/api/youtubeSearch";
    const devApi = "/api/mockYoutube";
    fetch(devApi, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ searchQuery: searchTerm }),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        const embedUrl =
          typeof resp === "string"
            ? transformYoutubeUrl(JSON.parse(resp)[5].link)
            : transformYoutubeUrl(resp[5].link);
        // VideoPlayer.current.setAttribute("src", embedUrl);
        setVideoSrc(embedUrl);
      })
      .catch((err) => console.log("Failed to get youtube data", err));
  };

  const handleGenerate = async (bookTitle) => {
    const prodApi = "/api/generate";
    const devApi = "/api/mockAI";
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
        console.log(output);
        parseData(output.text);
      })
      .catch((err) => console.log("Failed to get ai output", err));
  };

  return (
    <AppContainer>
      <AppHeader>
        <h1>Book Beats</h1>
        <h3>The Ultimate Book-Music Connection</h3>
        <SearchBar handleGenerate={handleGenerate} />
      </AppHeader>

      <LeftImage src="/equilizer.png" />

      <VideoPlayer songName={songName} videoSrc={videoSrc} />

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
  width: 400px;
  transform: rotate(-45deg);
`;

const RightImage = styled.img`
  position: absolute;
  right: -25px;
  bottom: 25px;
  width: 300px;
  transform: rotate(45deg);
`;
