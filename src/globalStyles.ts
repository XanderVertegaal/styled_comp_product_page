import { createGlobalStyle } from 'styled-components';

type GlobalStyleProps = {
    openMenu: boolean;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Kumbh Sans', sans-serif;
        font-size: 16px;
    }

    body,
    html {
        overflow: ${({ openMenu }) => openMenu ? 'hidden' : 'visible'};
    }
`