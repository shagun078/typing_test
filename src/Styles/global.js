import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: "Fugaz One";
    src: url("https://db.onlinewebfonts.com/t/6bb72788de0e0eb09756d36c0ba629cf.eot");
    src: url("https://db.onlinewebfonts.com/t/6bb72788de0e0eb09756d36c0ba629cf.eot?#iefix")format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/6bb72788de0e0eb09756d36c0ba629cf.woff2")format("woff2"),
    url("https://db.onlinewebfonts.com/t/6bb72788de0e0eb09756d36c0ba629cf.woff")format("woff"),
    url("https://db.onlinewebfonts.com/t/6bb72788de0e0eb09756d36c0ba629cf.ttf")format("truetype"),
    url("https://db.onlinewebfonts.com/t/6bb72788de0e0eb09756d36c0ba629cf.svg#Fugaz One")format("svg");
}
*{
    box-sizing: border-box;
}

body{
    background:${({theme})=>theme.background};
    color: ${({theme})=>theme.title};
    padding:0;
    margin:0;
    transition: all 0.25s linear;
    overflow-y: scroll;
   
}

body::-webkit-scrollbar{
    display: none;
}
.logo-title{
font-family:'Fugaz One';}
.canvas{
    display: grid;
    min-height: 100vh;
    grid-auto-flow: row;
    grid-template-row: auto 1fr auto;
    gap: 0.5rem;
    padding:2rem;
    width:100vw;
    text-align: center;
    align-items: center;
}

.type-box{
    display:block;
    max-width: 1000px;
    height: 140px;
    margin-left:auto;
    margin-right:auto;
    overflow: hidden;
}

.words{
    font-size: 32px;
    display: flex;
    flex-wrap: wrap;
    align-content:center;
    color: ${({theme})=>theme.typeBoxText}
}

.word{
    margin: 5px;
    padding-right:2px;
}

.hidden-input{
    opacity:0;
}

.correct{
    color: ${({theme})=>theme.title};
}

.incorrect{
    color: red;
}

.current{
    border-left: 1px solid;
    animation: blinkingLeft 2s infinite;
    animation-timing-function: ease;
    @keyframes blinkingLeft{
        0% {border-left-color:white;}
        25% {border-left-color:black;}
        50% {border-left-color:white;}
        75% {border-left-color:black;}
        100% {border-left-color:white;}
    }
}

.right-current{
    border-right: 1px solid;
    animation: blinkingRight 2s infinite;
    animation-timing-function: ease;
    @keyframes blinkingRight{
        0% {border-right-color:white;}
        25% {border-right-color:black;}
        50% {border-right-color:white;}
        75% {border-right-color:black;}
        100% {border-right-color:white;}
    }
}

.skipped{
    color: grey;
}

.footer{
    display:flex;
    flex-direction: column;
    align-self: end;
    width: 1000px;
    margin-left:auto;
    margin-right:auto;
}

.actual-footer{
    display: flex;
    justify-content: space-between;
}

.stats-box{
    display: flex;
    max-width: 1000px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
}

.left-stats{
    width: 30%;
    padding: 30px;
}

.right-stats{
    width: 70%;
}

.title{
    font-size: 20px;
    color: ${({theme})=>theme.typeBoxText};
}

.subtitle{
     margin-top:5px;
    font-size: 25px;
    color: ${({theme})=>theme.title};
}
    .subtitle2{
    color: ${({theme})=>theme.background};
    margin-top:15px;
    border-radius: 5px;
    border:none;
     font-size: 20px;
     padding :5px;
  cursor: pointer;
}

a{
    text-decoration: none;
    color: inherit;
}

.upper-menu{
    display:flex;
    width:1000px;
    margin-left:auto;
    margin-right:auto;
    justify-content:space-between;
    font-size:1.35rem;
    padding:0.5rem;
}

.time-modes, .word-modes{
    display:flex;
}
.time, .no-of-word{
    margin-right:5px;
}
.time:hover, .no-of-word:hover{
    color:${({theme})=>theme.typeBoxText};
    cursor: pointer;
}


.header{
    display: flex;
    width: 1000px;
    align-self: stretch;
    margin-left: auto;
    margin-right: auto;
    height: 80px;
    justify-content: space-between;
}
.counter{
  border: 1px solid;
  padding:5px;
  border-radius: 4px;
    font-size:30px;
    margin-top : 2px;
    color:white;
}
.github-button{
    width: 400px;
    text-align: center;
    background: blue;
    height: 3rem;
    border: 2px solid;
    border-radius: 10px;
}

.user-profile{
    width: 1000px;
    margin: auto;
    display: flex;
    min-height: 15rem;
    background: ${({theme})=>theme.typeBoxText};
    border-radius: 20px;
    justify-content: center;
    align-text: center;
}

.user{
    width: 50%;
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 1.5rem;
    padding: 1rem;
    border-right: 2px solid;
}

.info{
    width: 60%;
    padding: 1rem;
    margin-top: 1rem;
}
.picture{
    width: 40%;
}

.total-tests{
    width: 50%;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.graph, .table{
    width: 1000px;
    margin: auto;
}

.center-of-screen{
    display:flex;
    min-height:100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 3rem;
}

.logo{
    display: flex;
    gap: 10px;
    justify-content: start;
    align-items: start;
}

.compare-btn {
    cursor: pointer;
    color: ${({ theme }) => theme.background};
    background-color: ${({ theme }) => theme.title};
    padding: 0.4rem 0.8rem;        /* Increase padding for better touch area */
    border: none;                /* Remove default border */
    border-radius: 8px;         /* Slightly more rounded corners for modern look */
    margin-top: -5px;
    font-size: 1.1rem;           /* Adjust font size for better readability */
    font-weight: bold;         /* Make text bold for better visibility */
    transition: background-color 0.3s ease, transform 0.3s ease; /* Smooth transition effects */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add subtle shadow for depth */
}

.compare-btn:hover {
    background-color: ${({ theme }) => theme.hover}; /* Lighter or darker shade for hover effect */
    transform: translateY(-2px); /* Slightly lift the button on hover */
}

.compare-btn:active {
    background-color: ${({ theme }) => theme.active}; /* Even lighter or darker shade for active state */
    transform: translateY(0); /* Reset lift effect on click */
}

.compare-btn:focus {
    outline: 2px solid ${({ theme }) => theme.focus}; /* Highlight button on focus for accessibility */
    outline-offset: 2px;
}

.instruction{
    color: ${({theme})=>theme.title};
}

.hint{
    kbd{
        background: ${({theme})=>theme.title};
        color: ${({theme})=>theme.background};
        padding: 2.5px 5px;
        border-radius: 4px; 
    }
}

.active {
    border: 1px solid ${({ theme }) => theme.border};
    padding: 0.25rem 0.5rem; /* Adjusted padding for better spacing */
    margin: 0.25rem; /* Adjusted margin for consistent spacing */
    border-radius: 4px; /* Add border radius for smoother edges */
    background-color: ${({ theme }) => theme.activeBackground}; /* Add background color for visual emphasis */
    color: ${({ theme }) => theme.activeText}; /* Ensure text color is readable */
    font-weight: bold; /* Make text bold for emphasis */
    display: inline-block; /* Ensure consistent block styling */
}

.active-value {
    border: 1px solid ${({ theme }) => theme.border};
    padding: 0.25rem 0.5rem; /* Adjusted padding for better spacing */
    margin: 0.25rem; /* Adjusted margin for consistent spacing */
    margin-top: -0.25rem; /* Slightly negative margin for better alignment */
    border-radius: 4px; /* Add border radius for smoother edges */
    background-color: ${({ theme }) => theme.activeValueBackground}; /* Add background color for visual emphasis */
    color: ${({ theme }) => theme.activeValueText}; /* Ensure text color is readable */
    font-weight: bold; /* Make text bold for emphasis */
    display: inline-block; /* Ensure consistent block styling */
}

.logo-image{
    transform: scale(0.3);
    margin-top: -100px;
    margin-left: -90px;
    display: block;
}

.mode{
    cursor: pointer;
}
`;