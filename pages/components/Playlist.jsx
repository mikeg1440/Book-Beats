import styled from "styled-components";

export default function Playlist({ songs = [], newSongSelected = null }) {
  const handleSongClick = (e) => {};

  return (
    <OverlayContainer>
      <h1>Song List</h1>
      <ui id="songList">
        <li>Song 1</li>
        <li>Song 2</li>
        <li>Song 3</li>
        <li>Song 4</li>
      </ui>
    </OverlayContainer>
  );
}

const OverlayContainer = styled.div`
  position: fixed;
  z-index: 9999;
  width: 50%;
  height: 60%;
  border-radius: 5px;
  border: 1px solid white;
  background-color: #172a3aeb;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
`;
