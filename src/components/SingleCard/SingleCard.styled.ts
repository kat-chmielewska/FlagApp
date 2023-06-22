import styled from "styled-components";
import { Link } from "react-router-dom";

export const CountryCard = styled.article`
  width: 317px;
  height: 360px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  border: 2px solid var(--background-single-card-border);
  @media (width: 300px) {
    width: 250px;
    height: 360px;
  }
`;

export const Flag = styled.img`
  border-radius: 20px 20px 0px 0px;
  width: 100%;
  height: 200px;
`;

export const CountryInfos = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  padding-left: 20px;
  gap: 10px;
  border-radius: 0px 0px 20px 20px;
  background-color: var(--background-single-card);
`;

export const CountryNameHeadline = styled.h3`
  font-size: var(--font-size-h3);
  padding-bottom: 5px;
`;

export const StyledLink = styled(Link)`
  color: var(--color-text);
  text-decoration: none;
  :hover {
    color: var(--color-text-hover);
  }
`;
