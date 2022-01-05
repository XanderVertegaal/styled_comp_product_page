import { ReactComponent as Logo } from '../../images/logo.svg'
import shoppingCart from '../../images/icon-cart.svg'
import { Nav, NavMenu, NavItem, Overlay, AvatarImg, MenuIcon, MenuIconWrapper, ShoppingCartWrapper, ShoppingCart, ShoppingCartQuantity, ShoppingCartCard, CardHeader, CardContents } from './Header.styles'
import MenuClose from '../../images/icon-close.svg'
import MenuOpen from '../../images/icon-menu.svg'
import { useState } from 'react';
import avatar from "../../images/image-avatar.png";

type HeaderProps = {
    updateQuantity: (value: number) => void;
    quantity: number;
}

export const Header = ({updateQuantity, quantity}: HeaderProps) => {

    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [openCart, setOpenCart] = useState<boolean>(false);

    return (
        <Nav>
            <MenuIconWrapper onClick={() => setOpenMenu(!openMenu)}>
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
            <ShoppingCartCard openCart={openCart}>
                <CardHeader>Cart</CardHeader>
                <CardContents>Your cart is empty.</CardContents>
            </ShoppingCartCard>
            <AvatarImg src={avatar}/>
        </Nav>
    )
}