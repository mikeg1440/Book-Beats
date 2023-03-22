import { useEffect } from "react";
import styled from "styled-components";

export default function Playlist({ songs, newSongSelected }) {
  const handleSongClick = (e) => {};

  const handleExitClick = (e) => {
    const playlist = document.querySelector("#playlist");

    if (playlist) {
      playlist.style.display = "none";
    }
  };

  useEffect(() => {
    // update song list with song state
    if (songs.length > 0) {
      const songList = document.querySelector("#songList");
      songList.innerHTML = "";

      for (const song of songs) {
        let songItem = `<li>${song}</li>`;
        songList.innerHTML += songItem;
      }
    }
  }, [songs]);

  return (
    <OverlayContainer id="playlist" onClick={handleExitClick}>
      <HeaderContainer>
        <ExitButton>X</ExitButton>
      </HeaderContainer>

      <PlaylistContent>
        <h1>Song List</h1>
        <SongList id="songList">
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
          <li>Song 4</li>
        </SongList>
      </PlaylistContent>
    </OverlayContainer>
  );
}

const OverlayContainer = styled.div`
  position: fixed;
  z-index: 9999;
  width: 50%;
  height: 60%;
  border-radius: 10px;
  border: 1px solid white;
  background-color: #172a3aeb;
  display: none;
  grid-template-columns: 1fr;
  grid-template-rows: 0.1fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
`;

const HeaderContainer = styled.div`
  float: right;
`;

const ExitButton = styled.div`
  border-radius: 5px;
  font-size: 2em;
  color: "white";
  position: relative;
  float: right;
  margin: 0.25rem;
  padding: 0.25rem;
  display: flex;
  justify-content: center;
  alight-items: center;
  :hover {
    cursor: pointer;
  }
`;

const SongList = styled.ul`
  padding-top: 1rem;
  list-style: none, outside, none;
  > li {
    padding-top: 0.5rem;
  }
`;

const PlaylistContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
