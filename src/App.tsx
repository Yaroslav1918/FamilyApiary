import { ThemeProvider } from "@emotion/react";
import NavBar from "./components/navBar";
import myTheme, { Colors } from "./styles";
import { CssBaseline, GlobalStyles } from "@mui/material";
import MainComponent from "./components/mainComponent";
import Footer from "./components/footer";
import ScrollToTop from "./helpers/ScrollToTop";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector,  } from "./helpers/hooks";
import operations from "./redux/auth/auth-operations";
import { addProducts } from "./redux/cart/cart_slice";
import { RootState } from "./redux/store";





function App() {
  const dispatch = useAppDispatch();
  // const productItems = useAppSelector(
  //   (state: RootState) => state.cartItems.items
  // );
  const products = useAppSelector((state) => state.cartItems);

  useEffect(() => {
    const sendCartDataToBackend = async () => {
      // Only send the cart data if there are items in the cart
      if (products.items.length > 0) {
        try {
          await dispatch(addProducts());
          // console.log("Cart data sent successfully.");
        } catch (error : any) {
          console.log("Failed to send cart data:", error.message);
        }
      }
    };

    sendCartDataToBackend();
  }, [dispatch, products, products.items.length]);

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
    
  }, [dispatch]);
  
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
