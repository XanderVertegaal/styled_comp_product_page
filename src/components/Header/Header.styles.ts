import styled from "styled-components";
import SVG from "react-inlinesvg"


export const Nav = styled.nav`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: ${props => props.theme.colors.grayishBlue} 1px solid;
    max-width: 100vw;
 

    @media screen and (min-width: 400px) {
        /* padding: 1.5rem 0; */
        width: 80%;
        margin: 0 auto;

    }
`

export const MenuIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    margin: 1.5em 1.5em;
    width: 16px;
    z-index: 99;

    @media screen and (min-width: 400px) {
        display: none;
    }
`

export const MenuIcon = styled(SVG)`

    /* @media screen and (min-width: 376px) {
        display: none;
    }    */
`

type NavMenuProps = {
    menuOpen: boolean;
}

export const NavMenu = styled.ul<NavMenuProps>`
    display: flex;
    z-index: 10;

    @media screen and (max-width: 400px) {
        display: flex;
        position: absolute;
        flex-direction: column;
        background: #fff;
        height: 100vh;
        top: 0;
        left: ${({menuOpen}) => (menuOpen === true ? 0 : '-100%')};
        transition: left 0.5s ease;
        padding-left: 1em;
        padding-top: 5em;
        width: 70vw;
    }

    }
`

export const NavItem = styled.li`
    list-style-type: none;
    font-weight: bold;
    margin-bottom: 1em;

    &:hover {
        cursor: pointer;
        border-bottom: ${props => props.theme.colors.orange} 2px solid;
        color: ${props => props.theme.colors.veryDarkBlue};
    }
    
    @media screen and (min-width: 400px) {
        font-weight: normal;
        margin: 0 0 0 3.5rem;
        color: ${props => props.theme.colors.grayishBlue};
        border-bottom: ${props => props.theme.colors.white} 2px solid;
        padding: 1.5rem 0;
    }
`

type OverlayProps = {
    show: boolean;
}

export const Overlay = styled.div<OverlayProps>`
    position: absolute;
    top: 0;
    left: 0;
    background: hsl(0, 0%, 0%);
    opacity: 0;
    z-index: 2;
    ${({ show }) => (
        show === true ? 
        `height: 100vh;
        width: 100vw;
        opacity: .75;
        transition: opacity .5s ease;` : null)};
`

export const ShoppingCart = styled(SVG)`
 margin-left: auto;
    
    & path{
        fill: ${props => props.theme.colors.darkGrayishBlue};
    }

    &:hover {
        cursor: pointer;
    }

    @media screen and (min-width: 400px) {
        margin-right: 3rem;
    };
`

export const AvatarImg = styled.img`
    width: 25px;
    height: 25px;
    margin: 0 1em;

    &:hover {
        cursor: pointer;
        outline: 2px solid ${props => props.theme.colors.orange};
        border-radius: 5em;
    }

    @media screen and (min-width: 400px) {
        width: 45px;
        height: 45px;
        margin: 0px;
    };
`

type ShoppingCartCardProps = {
    openCart: boolean;
}

export const ShoppingCartCard = styled.div<ShoppingCartCardProps>`
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
        display: none;
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
`