import {createGlobalStyle} from "styled-components";

import "../css/main.css";
import "../css/profile.css";
import "../css/header.css";
import "../css/timeline.css";
import "../css/workspace.css";

export default createGlobalStyle`
    html {
        --margin-for-navbar: 56px;
        --navbar-bg-color: rgba(250, 250, 250, 0.8);
        --navbar-text-color: black;
        --navbar-shadow-color: rgba(0,0,0,0.05);
        --text-color-1: rgb(0,0,0);
        --text-color-2: rgb(72,72,72);
        --text-color-3: rgb(108,108,108);
        --bg-color-inverse: rgb(0,0,0);
        --bg-color-1: rgb(255,255,255);
        --default-font-weight: 400;
        --primary-color: #0f4c81;
        --primary-color-lighter: #1a8de9;
        --primary-color-darker: #041421;
        --secondary-color: #f36e8e;
        --secondary-color-lighter: #f8a8bb;
    } 
    .theme-dark {
        --navbar-bg-color: rgba(20, 20, 20, 0.8);
        --navbar-text-color: white;
        --navbar-shadow-color: rgba(0,0,0,0.05);
        --text-color-1: rgb(245,245,245);
        --text-color-2: rgb(183,183,183);
        --text-color-3: rgb(160,160,160);
        --bg-color-inverse: rgb(255,255,255);
        --bg-color-1: rgb(40,40,40);
        --default-font-weight: bolder;
    }

    body {
        font-family: 'Noto Sans KR', sans-serif;
        overflow-x: hidden;
        font-size: 1rem;
        line-height: 1.5;
        color: var(--text-color-1);
        font-weight: var(--default-font-weight);
    }

    .align-center {
        text-align: center;
    }

    .d- {
        &block {
            display: block;
        }
        &none {
            display: none;
        }
    }

    @media (min-width: 576px) {
        .d-sm- {
            &block {
                display: block;
            }
            &none {
                display: none;
            }
        }
    }

    @media (min-width: 768px) {
        .d-md- {
            &block {
                display: block;
            }
            &none {
                display: none;
            }
        }
    }

    @media (min-width: 992px) {
        .d-lg- {
            &block {
                display: block;
            }
            &none {
                display: none;
            }
        }
    }

    @media (min-width: 1200px) {
        .d-xl- {
            &block {
                display: block;
            }
            &none {
                display: none;
            }
        }
    }

    .partial-title {
        font-size: 26px;
        margin-bottom: 5px;
    }
`