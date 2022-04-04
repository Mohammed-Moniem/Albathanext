import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/index";
import "./index.css";
import "antd/dist/antd.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ConfigProvider>
          <App />
        </ConfigProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);
