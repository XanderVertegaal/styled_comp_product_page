import styled from 'styled-components'
import SVG from 'react-inlinesvg'

type CardWrapperProps = {
    openCart: boolean;
}

export const CardWrapper = styled.div<CardWrapperProps>`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95vw;

    left: 50%;
    margin-left: calc(-.5 * 95vw);
    top: ${({ openCart }) => (openCart === true ? '72px' : '-100%')};
    transition: top .5s ease;
    background: white;
    border-radius: 10px;
    box-shadow: 0 5px 5px 0px grey;
    z-index: 2;
    
    @media screen and (min-width: 400px) {
        width: 20vw;
        left: 70%;
        margin: 0;
        height: 45vh;
    }
`
export const CardHeader = styled.h3`
    padding: 1.25rem;
    align-self: stretch;
    border-bottom: 2px solid ${props => props.theme.colors.lightGrayishBlue};
`
export const CardPlaceHolder = styled.p`
    font-weight: bold;
    color: ${props => props.theme.colors.darkGrayishBlue};
    padding: 3rem;

    @media screen and (min-width: 400px) {
        padding: 3em 0;
    }
`

export const CardProduct = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`

export const CardImage = styled.img`
    border-radius: 5px;
    width: 50px;
    margin: 1.5em;
`

export const CardText = styled.div`
    display: flex;
    flex-direction: column;

`
export const CardProductTitle = styled.p`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 200px;
`

export const CardPrice = styled.p`
`

export const CardBin = styled(SVG)`
    margin: 0 1em;
`

export const CheckoutButton = styled.button`
    background: ${props => props.theme.colors.orange};
    color: white;
    border-radius: 10px;
    border: none;
    width: 90%;
    margin: 0 auto;
    padding: 1em 0;
    margin-bottom: 2em;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.05em;
    user-select: none;

    &:hover {
        cursor: pointer;
        background: hsl(26, 100%, 70%);
    }

    &:active {
        transform: translateY(2px);
    }

    @media screen and (min-width: 400px) {
        margin-left: 1em;
        margin-bottom: 0;
    }
`