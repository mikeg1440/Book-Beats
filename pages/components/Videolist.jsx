import styled from "styled-components";

export default function Videolist({ list, newSelectionCallback }) {
  const handleExitClick = (e) => {
    const videolist = document.querySelector("#videolist");

    if (videolist) {
      videolist.style.display = "none";
    }
  };

  return (
    <OverlayContainer id="videolist" onClick={handleExitClick}>
      <HeaderContainer>
        <ExitButton>X</ExitButton>
      </HeaderContainer>

      <VideolistContent>
        <OverlayHeader>Video List</OverlayHeader>
        <VidList id="videolist">
          {list.length > 0 &&
            list.map((video) => (
              <VidListItem
                videoTitle={video.title}
                onClick={() => newSelectionCallback(video)}
              >
                {video.title}
              </VidListItem>
            ))}
        </VidList>
      </VideolistContent>
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

const VidList = styled.ul`
  padding-top: 1rem;
  list-style: none, outside, none;
`;

const VideolistContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const OverlayHeader = styled.div`
  font-size: 4vmin;
`;

const VidListItem = styled.li`
  color: cyan;
  font-size: clamp(20px, 1rem, 40px);
  list-style: none;
  margin-top: 2rem;
  :hover {
    cursor: pointer;
  }
`;
