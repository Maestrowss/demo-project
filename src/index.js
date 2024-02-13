import * as serviceWorker from './serviceWorker';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import store from "./redux/redux-store";
import { Provider } from "react-redux";
import SamuraiJSApp from "./App";

const root = createRoot(document.getElementById('root'));

root.render(
            <SamuraiJSApp />
);

serviceWorker.unregister();
