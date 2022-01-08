import styled from "styled-components"
import SVG from 'react-inlinesvg'

export const ShopItem = styled.article`
    display: flex;
    flex-direction: column;
    margin-top: 4em;

    @media screen and (min-width: 500px) {
        flex-direction: row;
        gap: 5em;
        margin: 5em auto;
        max-width: 70vw;
        justify-content: space-between;
        align-items: center;
    }
`

export const Picture = styled.section`
    position: relative;

    @media screen and (min-width: 500px) {
        display: flex;
        flex-direction: column;
        margin-right: 2em;
        width: 150%;
    }
`

export const MainPicture = styled.img`
    width: 100%;

    @media screen and (min-width: 500px) {
        border-radius: 5%
    }
`

export const ButtonContainerLeft = styled.div`
    position: absolute;
    top: 180px;
    left: 20px;
    background: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:active {
        transform: translateY(2px);
    }

    @media screen and (min-width: 500px) {
        display: none;
    }
`

export const ButtonContainerRight = styled.div`
    position: absolute;
    top: 180px;
    right: 20px;
    background: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:active {
        transform: translateY(2px);
    }

    @media screen and (min-width: 500px) {
        display: none;
    }

`

export const ButtonLeft = styled(SVG)`
    transform: scale(.8);

    & path {
        stroke-width: 5px;
    }
    
`
export const ButtonRight = styled(SVG)`
    transform: scale(.8);
    & path {
        stroke-width: 5px;
    }
`

export const Gallery = styled.div`
    display: none;

    @media screen and (min-width: 500px) {
        display: flex;
        justify-content: space-between;
        margin: 2em 0;
    }
`

export const Thumbnail = styled.div`
    position: relative;
    border-radius: 10%;
    width: 20%;

    &:hover {
        cursor: pointer;
        background-color: white;
    }
`

export const ThumbnailImage = styled.img`
    border-radius: 10%;
    width: 100%;
    height: 100%;
`

type ThumbnailOverlayProps = {
    pic: number;
    selected: number;
}

export const ThumbnailOverlay = styled.div<ThumbnailOverlayProps>`
    position: absolute;
    background: white;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    border-radius: 10%;

    &:hover {
        opacity: 0.5;
    }

    ${({ selected, pic, theme }) => (
        selected === pic ? 
            `opacity: 0.75;
            outline 2px solid ${theme.colors.orange};` : null)};
`

export const Text = styled.section`
    width: 85vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media screen and (min-width: 500px) {
        width: 90vw;
        height: 70%;
    }
`

export const LeadTitle = styled.h3`
    grid-area: 1 / 1 / 2 / 4;
    padding: 1.25em 0;
    color: ${props => props.theme.colors.orange};
    letter-spacing: .05em;
    font-size: smaller;

    @media screen and (min-width: 500px) {
        font-size: 16px;
        letter-spacing: 0;
    }
`
export const MainTitle = styled.h2`
    grid-area: 2 / 1 / 3 / 4;
    font-size: 28px;
    color: ${props => props.theme.colors.veryDarkBlue};

    @media screen and (min-width: 500px) {
        font-size: 52px;
        letter-spacing: -.025em;
    }
`

export const Description = styled.p`
    grid-area: 3 / 1 / 4 / 4;
    color: ${props => props.theme.colors.darkGrayishBlue};
    line-height: 1.5em;
    font-size: 15px;
    padding: 1.25em 0;

    @media screen and (min-width: 500px) {
        font-size: 16px;
    }
`
export const NewPrice = styled.p`
    grid-area: 4 / 1 / 5 / 2;
    font-size: 28px;
    font-weight: bold;
    align-self: center;
    color: ${props => props.theme.colors.veryDarkBlue};
    user-select: none;

    @media screen and (min-width: 500px) {
        justify-self: start;
    }
`
export const Discount = styled.p`
    grid-area: 4 / 2 / 5 / 3;   
    align-self: center;
    color: ${props => props.theme.colors.orange};
    background: ${props => props.theme.colors.paleOrange};
    justify-self: start;
    padding: 4px 7px;
    line-height: 1rem;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
    user-select: none;
    margin-left: 1em;

    @media screen and (min-width: 500px) {
        grid-area: 4 / 2 / 5 / 4;
        font-size: 18px;
        padding: 5px 8px;
        margin: 0;
    }
`
export const OldPrice = styled.p`
    grid-area: 4 / 3 / 5 / 4;
    align-self: center;
    text-decoration: line-through;
    color: ${props => props.theme.colors.grayishBlue};
    font-weight: bold;
    justify-self: end;
    user-select: none;

    @media screen and (min-width: 500px) {
        grid-area: 5 / 1 / 6 / 4;
        justify-self: start;
        padding: .75em 0 1.25em 0;
    }
`
export const Controls = styled.section`
    grid-area: 5 / 1 / 6 / 4;

    @media screen and (min-width: 500px) {
        grid-area: 6 / 1 / 7 / 4;
        display: flex;
        align-items: center;
    }
`
export const Quantity = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    margin: 1em 0;
`

export const Decrement = styled.div`
    background: ${props => props.theme.colors.lightGrayishBlue};
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    display: flex;
    padding: .8em 1em;
    align-items: center;

    &:hover {
        cursor: pointer;
        & svg {
            path {
                fill: hsl(26, 100%, 70%);
            }
        }
    }

    &:active {
        transform: translateY(2px);
    }

    @media screen and (min-width: 500px) {
        padding: 1em 1.4em;
    }
`
export const DecrementSVG = styled(SVG)``

export const Counter = styled.p`
    background: ${props => props.theme.colors.lightGrayishBlue};
    text-align: center;
    font-weight: bold;
    width: 100%;
    color: ${props => props.theme.colors.veryDarkBlue};
    padding: .8em 1em;
    user-select: none;

    @media screen and (min-width: 500px) {
        padding: 1em 1.4em;
        width: 50px;
    }
`
export const Increment = styled.div`
    background: ${props => props.theme.colors.lightGrayishBlue};
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: .8em 1em;

    &:hover {
        cursor: pointer;
        & svg {
            path {
                fill: hsl(26, 100%, 70%);
            }
        }
    }

    &:active {
        transform: translateY(2px);
    }

    @media screen and (min-width: 500px) {
        padding: 1em 1.4em;
    }
`
export const IncrementSVG = styled(SVG)``

export const AddToCart = styled.button`
    background: ${props => props.theme.colors.orange};
    color: white;
    border-radius: 10px;
    border: none;
    width: 100%;
    padding: 1em 0;
    margin-bottom: 2em;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 10px -1px ${props => props.theme.colors.orange};
    letter-spacing: 0.05em;
    user-select: none;

    &:hover {
        cursor: pointer;
        background: hsl(26, 100%, 70%);
    }

    &:active {
        transform: translateY(2px);
    }

    @media screen and (min-width: 500px) {
        margin-left: 1em;
        margin-bottom: 0;
    }
`

export const ShoppingCart = styled(SVG)`
    margin-right: .8em;
    transform: scale(.75);
    & path {
        fill: ${props => props.theme.colors.white};
    }
`
