import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "components/organisms/NavBar";
import { AppWrapper } from "context/AppContext";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "utils/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* AppWrapper adds persistent Global state to the app */}
      <AppWrapper>
        {/* ThemeProvider adds a MUI theme to the app */}
        <ThemeProvider theme={theme}>
          <NavBar />
          <Component {...pageProps} />
        </ThemeProvider>
      </AppWrapper>
    </>
  );
}

export default MyApp;
