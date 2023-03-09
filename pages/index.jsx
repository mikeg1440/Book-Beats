import styled from "styled-components";
import { useRef } from "react";

import SearchBar from "./components/SearchBar";

const App = () => {
  const VideoPlayer = useRef(null);

  const handleGenerate = (bookTitle) => {
    alert(bookTitle);
  };

  return (
    <AppContainer>
      <AppHeader>
        <h1>Book Beats</h1>
        <h3>The Ultimate Book-Music Connection</h3>
        <SearchBar handleGenerate={handleGenerate} />
      </AppHeader>

      <VideoContainer>
        <iframe width="560" height="340">
          VideoPlayer
        </iframe>
      </VideoContainer>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
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

const VideoContainer = styled.div`
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: none;
`;
