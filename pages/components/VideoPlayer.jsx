import styled from "styled-components";

export default function VideoPlayer({ currentVideo }) {
  return currentVideo.hasOwnProperty("title") ? (
    <VideoContainer>
      <SongName>{currentVideo.title}</SongName>
      <VideoIframe src={currentVideo.embedUrl} allow="autoplay"></VideoIframe>
    </VideoContainer>
  ) : (
    <>&nbsp;</>
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
  color: #00ffff;
  border-radius: 5px;
  background-color: #80808085;
  padding: 0 0.5rem;
  max-width: 60%;
  text-align: center;
  margin-bottom: 1rem;
`;
