import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    :root {
        --grey-1000: #0A0A0A;
        --grey-900: #101111;
        --grey-600: #2C3030;
        --grey-300: #C5C5C5;
        --cyan: #61DAFB;
        --white: #fff;
    }

    html {
        font-size: 62.5%;
        @media (min-width: 520px) {
            font-size: 87.5%;
        }
        @media (min-width: 720px) {
			font-size: 93.75%;
		}
    }

    html, body, #__next {
        height: 100%;
    }

    body {
        font-family:  -apple-system, BlinkMacSystemFont, 'Segoe Ui', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: var(--grey-900);
        color: var(--white);
    }

    .container {
        margin: 0 auto;
        width: 100%;
        max-width: 784px;
        padding: 1rem;
    }
`

export default GlobalStyles
