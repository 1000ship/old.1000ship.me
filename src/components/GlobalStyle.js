import {createGlobalStyle} from "styled-components";

import "../css/main.css";
import "../css/profile.css";
import "../css/header.css";
import "../css/timeline.css";
import "../css/workspace.css";

export default createGlobalStyle`
    html{
        --navbar-bg-color: rgb(250, 250, 250);
        --navbar-text-color: black;
        --navbar-shadow-color: rgba(0,0,0,0.05);
    } 
    body {
        font-family: 'Noto Sans KR', sans-serif;
        overflow-x: hidden;
        font-size: 1rem;
        line-height: 1.5;
    }

    .align-center {
        text-align: center;
    }

    .d-block {
        display: block;
    }
`