import styled from "styled-components";

export default function Playlist({ list, newSelectionCallback }) {
  const handleExitClick = (e) => {
    const playlist = document.querySelector("#playlist");

    if (playlist) {
      playlist.style.display = "none";
    }
  };

  return (
    <OverlayContainer id="playlist" onClick={handleExitClick}>
      <HeaderContainer>
        <ExitButton>X</ExitButton>
      </HeaderContainer>

      <PlaylistContent>
        <OverlayHeader>Song List</OverlayHeader>
        <SongList id="songList">
          {list.length > 0 &&
            list.map((song) => (
              <SongListItem
                song={song}
                onClick={() => newSelectionCallback(song)}
              >
                {song}
              </SongListItem>
            ))}
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
  overflow-y: scroll;
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
  filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
  :hover {
    cursor: pointer;
    color: orange;
  }
`;

const SongList = styled.ul`
  padding-top: 1rem;
  list-style: none, outside, none;
`;

const PlaylistContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const OverlayHeader = styled.div`
  font-size: 4vmin;
`;

const SongListItem = styled.li`
  color: cyan;
  font-size: clamp(20px, 1rem, 40px);
  list-style: none;
  margin-top: 2rem;
  :hover {
    cursor: pointer;
  }
`;
