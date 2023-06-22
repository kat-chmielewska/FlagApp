import Menu from "../Menu/Menu.component";
import GlobalStyles from "../../theme/globalStyles";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Menu />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
