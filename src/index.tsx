import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./store/store";
import {Provider} from "react-redux";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Destinations from "./pages/Destinations";
import Origins from "./pages/Origins";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const theme = createTheme({
    palette: {
        primary: {
            main: '#003cff'
        },
        secondary: {
            main: '#f44336'
        },
    },
});

root.render(
  <Provider store={store}>

    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Origins/>} />
                <Route path="/destinations" element={<Destinations/>} />
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
