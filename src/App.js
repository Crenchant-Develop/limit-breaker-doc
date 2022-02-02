/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import './Main.css';
import './Title.css';
import './Image.css';
import Sections from "./Sections";


function App() {
    return (
        <BrowserRouter>
            <Sections />
        </BrowserRouter>
    );
}

export default App;