import HomePage from "./pages/HomePage.page";
import NotFoundPage from "./pages/NotFoundPages.pages";
import Layout from "./components/Layout/Layout.components";
import CountryPage from "./pages/CountryPage.page";
import GlobalStyles from "./theme/globalStyles";

import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, Navigate } from "react-router-dom";
import { CountryDataContextProvider } from "./context/CountryContext.context";

import { useContext } from "react";
import { NightModeContext } from "./context/NightMode.context";
import { ThemeProvider } from "styled-components";

function App() {
  const { theme } = useContext(NightModeContext);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path=":country" element={<CountryPage />} />
        <Route path="not-found" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="not-found" replace={true} />} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CountryDataContextProvider>
        <RouterProvider router={router} />
      </CountryDataContextProvider>
    </ThemeProvider>
  );
}

export default App;
