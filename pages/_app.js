import "../styles/globals.css";
import { ShowMarkdownProvider } from "../context/blogsitecontext";
import { DataProvider } from "../context/datacontext";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { AuthProvider } from "../context/authcontext";
function MyApp({ Component, pageProps }) {
  let theme = createTheme({
    palette: {
      primary: {
        main: grey[50],
      },
      secondary: {
        main: "#000000",
      },
    },
  });

  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <DataProvider>
          <ShowMarkdownProvider>
            <Component {...pageProps} />
          </ShowMarkdownProvider>
        </DataProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
