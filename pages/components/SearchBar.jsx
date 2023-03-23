import styled from "styled-components";
import { useState } from "react";

export default function SearchBar({ handleGenerate }) {
  const [bookTitle, setBookTitle] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    handleGenerate(bookTitle);
  };

  return (
    <InputContainer>
      <BookInput
        type="text"
        placeholder="Book Title Here"
        value={bookTitle}
        onChange={(e) => setBookTitle(e.target.value)}
      />
      <SearchButton onClick={handleClick}>Generate</SearchButton>
    </InputContainer>
  );
}

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff8a;
  padding: 1rem;
  border-radius: 5px;
  min-width: 40%;
`;

const BookInput = styled.input`
  font-size: 2em;
  width: 100%;
  border-radius: 5px;
  background-color: transparent;
  border: none;
  :focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  padding: 1rem;
  background-color: orange;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  border: none;
  :focus {
    outline: none;
  }
  :active {
    filter: translateY(4px);
    filter: brightness(90%);
  }
  :hover {
    cursor: pointer;
  }
`;
