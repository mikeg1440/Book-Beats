import styled from "styled-components";

export default function Loading({ isLoading }) {
  return <LoadingContainer isLoading={isLoading}>Loading</LoadingContainer>;
}

const LoadingContainer = styled.div`
  display: ${(props) => (props.isLoading ? "flex" : "none")};
  width: 399px;
  height: 479px;
  background-image: url("/loading.gif");
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  position: fixed;
`;
