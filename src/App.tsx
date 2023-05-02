import { ThemeProvider } from "@emotion/react";
import NavBar from "./components/navBar";
import myTheme, { Colors } from "./styles";
import { CssBaseline, GlobalStyles } from "@mui/material";
import MainComponent from "./components/mainComponent";
import Footer from "./components/footer";
import ScrollToTop from "./helpers/ScrollToTop";

function App() {
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <GlobalStyles
          styles={{
            "#root": {
              backgroundColor: Colors.body_bg,
              // backgroundImage: "url(/images/48.jpg), url(/images/48.jpg)",
              // backgroundPosition: "left, right",
              //  backgroundSize: '10% auto',
              // backgroundRepeat: " repeat-y, repeat-y",
            },
          }}
        />
        <CssBaseline />
        <NavBar />
        <ScrollToTop>
          <MainComponent />
        </ScrollToTop>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
