import MoodIcon from "../../assets/icon-moon.svg";
import { Headlines2, Headlines4, MenuNav, DarkModeField, DarkMode, LinkDarkMode, LinkTitle } from "./Menu.styled";
import { NightModeContext } from "../../context/NightMode.context";
import { useContext } from "react";
import { lightTheme } from "../../theme/theme";

interface MenuProps {
  onClick: React.MouseEventHandler<HTMLLinkElement>;
  active: boolean;
}

const Menu = () => {
  const { changeTheme, theme } = useContext(NightModeContext);

  return (
    <MenuNav>
      <LinkTitle to={`/`}>
        <Headlines2>Where in the World?</Headlines2>
      </LinkTitle>
      <DarkModeField>
        <LinkDarkMode onClick={changeTheme} active={theme === lightTheme}>
          <DarkMode src={MoodIcon} alt="" />
          <Headlines4>Dark Mode</Headlines4>
        </LinkDarkMode>
      </DarkModeField>
    </MenuNav>
  );
};

export default Menu;
