import styled from "styled-components";

export default function VideoPlayer({ songName, videoSrc }) {
  return (
    <VideoContainer>
      <SongName>{songName}</SongName>
      <VideoIframe
        ref={VideoPlayer}
        src={videoSrc}
        allow="autoplay"
      ></VideoIframe>
    </VideoContainer>
  );
}

const VideoContainer = styled.div`
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: none;
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 35vw;
  max-width: 900px;
  max-height: 600px;
`;

const VideoIframe = styled.iframe`
  width: 100%;
  height: 100%;
`;

const SongName = styled.div`
  font-size: 2em;
  font-color: cyan;
  border-radius: 5px;
  background-color: #80808085;
  padding: 0 0.5rem;
`;