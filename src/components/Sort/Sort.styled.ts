import styled from "styled-components";

export const SortField = styled.select`
  width: 250px;
  font-size: var(--font-size-p);
  color: var(--color-text);
  padding: 1rem;
  border-radius: 10px;
  margin-top: 20px;
  margin-left: 10px;
  border: 2px solid var(--background-single-card-border);
  background-color: var(--color-input);
  cursor: pointer;
  outline: none;
  ::after {
    content: "";
    width: 10px;
    height: 10px;
    background-color: var(--color-input);
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }
`;

export const SortElement = styled.option`
  font-size: var(--font-size-p);
  :selected {
    color: var(--color-light-grey);
  }
`;
