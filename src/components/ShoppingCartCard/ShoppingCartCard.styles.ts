import styled from 'styled-components'

type CardWrapperProps = {
    openCart: boolean;
}

export const CardWrapper = styled.div<CardWrapperProps>`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95vw;
    height: 45vh;
    left: 50%;
    margin-left: calc(-.5 * 95vw);
    top: ${({ openCart }) => (openCart === true ? '72px' : '-100%')};
    transition: top .5s ease;
    background: white;
    border-radius: 10px;
    box-shadow: 0 5px 5px 0px grey;
    
    @media screen and (min-width: 400px) {
        width: 20vw;
        // top: 10%;
        left: 70%;
        z-index: 2;
        margin: 0;
        height: auto;
    }
`

export const CardHeader = styled.h3`
    padding: 1.25rem;
    align-self: stretch;
    border-bottom: 2px solid ${props => props.theme.colors.lightGrayishBlue};
`
export const CardContents = styled.p`
    font-weight: bold;
    color: ${props => props.theme.colors.darkGrayishBlue};
    padding-top: 2rem;

    @media screen and (min-width: 400px) {
        padding: 3em 0;
    }
`