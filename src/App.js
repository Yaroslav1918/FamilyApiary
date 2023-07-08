import { ThemeProvider } from "@emotion/react";
import NavBar from "./components/navBar";
import myTheme from "./styles";
import { CssBaseline, GlobalStyles } from "@mui/material";
import MainComponent from "./components/mainComponent";
import Footer from "./components/footer";
import { useEffect } from "react";
import { useAppDispatch } from "./helpers/hooks";
import operations from "./redux/auth/auth-operations";
import { useSelector } from "react-redux";
import { getIsLoggedIn, getIsToken } from "./redux/auth/auth-selectors";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { getProducts } from "./redux/cart/cart_operations";

function App() {
  const dispatch = useAppDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const token = useSelector(getIsToken);


  useEffect(() => {
    if (token) {
      dispatch(operations.fetchCurrentUser());
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getProducts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <ThemeProvider theme={myTheme}>
        <GlobalStyles
          styles={{
            "#root": {
              background:
                "linear-gradient(90deg, rgba(254,237,225,1) 14%, rgba(255,255,255,1) 53%, rgba(251,232,218,1) 86%)",
            },
          }}
        />
        <CssBaseline />
        <NavBar />
        <MainComponent />
        <Footer />
        <ToastContainer position="top-center" autoClose={4000} />
      </ThemeProvider>
    </>
  );
}

export default App;
