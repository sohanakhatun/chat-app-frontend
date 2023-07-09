import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import ChatProvider from "./Context/chatProvider";
import {disableReactDevTools} from '@fvilers/disable-react-devtools';

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <ChatProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ChatProvider>
  </BrowserRouter>
);
