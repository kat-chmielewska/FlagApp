import styled from "styled-components";

export const SearchField = styled.input`
  width: 400px;
  flex-grow: 1;
  font-size: var(--font-size-p);
  border: 2px solid var(--background-single-card-border);
  color: var(--color-text);
  background-color: var(--color-input);
  padding: 1rem;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 20px;
  margin-left: 10px;
  ::placeholder {
    color: var(--color-text-input);
  }
  @media (width: 300px) {
    width: 250px;
  }
`;
