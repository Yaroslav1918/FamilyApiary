import { ThemeProvider } from "@emotion/react";
import NavBar from "./components/navBar";
import myTheme, { Colors } from "./styles";
import { CssBaseline, GlobalStyles } from "@mui/material";
import MainComponent from "./components/mainComponent";
import Footer from "./components/footer";
import ScrollToTop from "./helpers/ScrollToTop";
import { useEffect } from "react";
import { useAppDispatch} from "./helpers/hooks";
import operations from "./redux/auth/auth-operations";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "./redux/auth/auth-selectors";
import { getProducts } from "./redux/cart/cart_operations";
import { cartActions } from "./redux/cart/cart_slice";







function App() {
  const dispatch = useAppDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);



  useEffect(() => {
    if (isLoggedIn) {
      dispatch(cartActions.resetToInitialState());
    }
  }, [dispatch, isLoggedIn])
  
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
