import { CardWrapper, CardHeader, CardContents } from "./ShoppingCartCard.styles"

type ShoppingCartCardProps = {
    openCart: boolean;
    quantity: number;
}


export const ShoppingCartCard = ({openCart, quantity}: ShoppingCartCardProps) => {



    return (
        <CardWrapper openCart={openCart}>
            <CardHeader>Cart</CardHeader>
            {quantity > 0 ? <CardContents>Items will appear here!</CardContents> : <CardContents>Your cart is empty.</CardContents>}
        </CardWrapper>
    )
}