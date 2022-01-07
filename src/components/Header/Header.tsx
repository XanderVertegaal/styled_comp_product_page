import { ReactComponent as Logo } from '../../images/logo.svg'
import shoppingCart from '../../images/icon-cart.svg'
import { Nav, NavMenu, NavItem, Overlay, AvatarImg, MenuIcon, MenuIconWrapper, ShoppingCartWrapper, ShoppingCart, ShoppingCartQuantity } from './Header.styles'
import { ShoppingCartCard } from '../ShoppingCartCard/ShoppingCartCard'
import MenuClose from '../../images/icon-close.svg'
import MenuOpen from '../../images/icon-menu.svg'
import { useState } from 'react';
import avatar from "../../images/image-avatar.png";

type HeaderProps = {
    openMenu: boolean;
    handleOpenMenu: (value: boolean) => void;
    resetQuantity: () => void;
    quantity: number;
}

export const Header = ({resetQuantity, quantity, openMenu, handleOpenMenu}: HeaderProps) => {

    
    const [openCart, setOpenCart] = useState<boolean>(false);

    return (
        <Nav>
            <MenuIconWrapper onClick={() => handleOpenMenu(openMenu)}>
                <MenuIcon src={openMenu ? MenuClose : MenuOpen} />
            </MenuIconWrapper>
            <Logo />  
            <NavMenu menuOpen={openMenu}>
                <NavItem>Collections</NavItem>
                <NavItem>Men</NavItem>
                <NavItem>Women</NavItem>
                <NavItem>About</NavItem>
                <NavItem>Contact</NavItem>
            </NavMenu>
            <Overlay show={openMenu}/>
            <ShoppingCartWrapper onClick={() => setOpenCart(!openCart)}>
                <ShoppingCart src={shoppingCart} $opencart={openCart} />
                <ShoppingCartQuantity>{quantity}</ShoppingCartQuantity>
            </ShoppingCartWrapper>
            <ShoppingCartCard 
                openCart={openCart}
                toggleOpenCart={() => setOpenCart(!openCart)} 
                quantity={quantity}
                resetQuantity={resetQuantity}
            />
            <AvatarImg src={avatar}/>
        </Nav>
    )
}