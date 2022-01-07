import { CardWrapper, CardHeader, CardImage, CardText, CardProduct, CardProductTitle, CardPrice, CardBin, CardPlaceHolder, CheckoutButton } from "./ShoppingCartCard.styles"
import Product1ThumbNail from '../../images/image-product-1-thumbnail.jpg'
import BinImage from '../../images/icon-delete.svg'

type ShoppingCartCardProps = {
    openCart: boolean;
    toggleOpenCart: () => void;
    quantity: number;
    resetQuantity: () => void;
}


export const ShoppingCartCard = ({openCart, quantity, resetQuantity, toggleOpenCart}: ShoppingCartCardProps) => {

    const CardBody = () => {
        if (quantity === 0) {
            return <CardPlaceHolder>Your cart is empty.</CardPlaceHolder>
        } else {
            return (
                <CardProduct>
                    <CardImage src={Product1ThumbNail}/>
                    <CardText>
                        <CardProductTitle>
                            Fall Limited Edition Sneakers
                        </CardProductTitle>
                        <CardPrice>
                            $125.00 x {quantity} <strong>${quantity * 125.00}.00</strong>
                        </CardPrice>
                    </CardText>
                    <CardBin src={BinImage} onClick={resetQuantity}/>
                    <CheckoutButton onClick={toggleOpenCart}>Checkout</CheckoutButton>
                </CardProduct>
            )
        }
    }

    return (
        <CardWrapper openCart={openCart}>
            <CardHeader>Cart</CardHeader>
            {CardBody()}
        </CardWrapper>
    )
}