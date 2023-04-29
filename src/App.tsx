import { ThemeProvider } from "@emotion/react";
import NavBar from "./components/navBar/NavBar";
import myTheme, { Colors } from "./styles";
import { CssBaseline, GlobalStyles } from "@mui/material";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <GlobalStyles
          styles={{
            "#root": {
              backgroundColor: Colors.body_bg,
             
            },
          }}
        />
        <CssBaseline />
       
        { <Home /> }
        {/* <AboutUs/> */}
      </ThemeProvider>
    </>
  );
}

export default App;
