import { Link } from "react-router-dom";
import styled from "styled-components";

interface MenuProps {
  active: boolean;
}

export const MenuNav = styled.div`
  min-width: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;
  padding: 20px 20px;
  height: 40px;
  background-color: var(--color-very-dark-grey);
  color: var(--color-white);
  @media (width: 300px) {
    width: 300px;
    height: 80px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const Headlines2 = styled.h2`
  font-size: var(--font-size-h2);
  @media (width: 300px) {
    font-size: 24px;
  }
`;

export const Headlines4 = styled.h4`
  font-size: var(--font-size-h4);
`;

export const DarkModeField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LinkDarkMode = styled.a<MenuProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  cursor: pointer;
`;

export const DarkMode = styled.img`
  height: 20px;
  width: 20px;
`;

export const LinkTitle = styled(Link)`
  color: var(--color-white);
  text-decoration: none;
  :hover {
    color: var(--color-light-grey);
  }
`;
