import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18n from "./helpers/i18next";
import Spinner from "./components/Spinner/Spinner";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ScrollToTop from "./helpers/ScrollToTop";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID ?? ""}>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <React.Suspense fallback={<Spinner />}>
              <I18nextProvider i18n={i18n} defaultNS={"translation"}>
                <ScrollToTop />
                <App />
              </I18nextProvider>
            </React.Suspense>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
