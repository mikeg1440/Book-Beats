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
      </AppHeader>

      <SearchBar handleGenerate={handleGenerate} />

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
  background-color: darkgray;
  width: 100vw;
  height: 100vh;
  background-image: url("/MusicAndBooks.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

const AppHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoContainer = styled.div`
  min-width: 570px;
  min-height: 350px;
  border: 1px solid white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
