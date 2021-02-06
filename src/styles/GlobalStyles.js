import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        /* Variables */
    }

    html {font-size: 100%;} /*16px*/
    body {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        line-height: 1.75;
        color: #000000;
    }

    p { 
        margin-bottom: 1rem;
    }

    h1, h2, h3, h4, h5 {
        margin: 3rem 0 1.38rem;
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        line-height: 1.3;
    }

    h1 {
        margin-top: 0;
        font-size: 3.052rem;
    }

    h2 {font-size: 2.441rem;}

    h3 {font-size: 1.953rem;}

    h4 {font-size: 1.563rem;}

    h5 {font-size: 1.25rem;}

    small, .text_small {font-size: 0.8rem;}

    .chore_list {
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(auto-fi, minmax(200px, 1fr));
    }
`

export default GlobalStyles
