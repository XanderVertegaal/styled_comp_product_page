import { ShopItem, Picture, MainPicture, ButtonContainerLeft, ButtonContainerRight, ButtonLeft, ButtonRight, Gallery, Thumbnail, ThumbnailImage, ThumbnailOverlay, Text, LeadTitle, MainTitle, Description, NewPrice, Discount, OldPrice, Controls, Quantity, Decrement, Counter, Increment, AddToCart, IncrementSVG, DecrementSVG, ShoppingCart } from "./Body.styles"
import IconNext from '../../images/icon-next.svg'
import IconPrevious from '../../images/icon-previous.svg'
import IconMinus from '../../images/icon-minus.svg'
import IconPlus from '../../images/icon-plus.svg'
import IconShoppingCart from '../../images/icon-cart.svg'
import Product1 from '../../images/image-product-1.jpg'
import Product2 from '../../images/image-product-2.jpg'
import Product3 from '../../images/image-product-3.jpg'
import Product4 from '../../images/image-product-4.jpg'
import Product1ThumbNail from '../../images/image-product-1-thumbnail.jpg'
import Product2ThumbNail from '../../images/image-product-2-thumbnail.jpg'
import Product3ThumbNail from '../../images/image-product-3-thumbnail.jpg'
import Product4ThumbNail from '../../images/image-product-4-thumbnail.jpg'
import { useState } from "react";

const PictDict: {
    [index: number]: string;
} = {
    1: Product1,
    2: Product2,
    3: Product3,
    4: Product4,
}

export const Body = () => {

    const [selected, setSelected] = useState<number>(1);
    const [counter, setCounter] = useState<number>(1);

    const handlePrevious = () => {
        if (selected === 1) {
            setSelected(4)
        } else {
            setSelected(selected - 1)
        }
    }

    const handleNext = () => {
        if (selected === 4) {
            setSelected(1)
        } else {
            setSelected(selected + 1)
        }
    }

    const handleIncrement = () => {
        setCounter(counter + 1)
    }
    const handleDecrement = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    const handleSelect = (picNo: number) => {
        setSelected(picNo)
    }

    return (
        <ShopItem>
            <Picture>
                <MainPicture src={PictDict[selected]}/>
                <ButtonContainerLeft>
                    <ButtonLeft src={IconPrevious} onClick={handlePrevious}/>
                </ButtonContainerLeft>
                <ButtonContainerRight>
                    <ButtonRight src={IconNext} onClick={handleNext}/>
                </ButtonContainerRight>
                <Gallery>
                    <Thumbnail>
                        <ThumbnailImage src={Product1ThumbNail} />
                        <ThumbnailOverlay onClick={() => handleSelect(1)} pic={1} selected={selected}/>
                    </Thumbnail>
                    <Thumbnail>
                        <ThumbnailImage src={Product2ThumbNail} />
                        <ThumbnailOverlay onClick={() => handleSelect(2)} pic={2} selected={selected}/>
                    </Thumbnail>
                    <Thumbnail>
                        <ThumbnailImage src={Product3ThumbNail} />
                        <ThumbnailOverlay onClick={() => handleSelect(3)} pic={3} selected={selected}/>
                    </Thumbnail>
                    <Thumbnail>
                        <ThumbnailImage src={Product4ThumbNail} />
                        <ThumbnailOverlay onClick={() => handleSelect(4)} pic={4} selected={selected}/>
                    </Thumbnail>
                </Gallery>
            </Picture>
            <Text>
                <LeadTitle>SNEAKER COMPANY</LeadTitle>
                <MainTitle>Fall Limited Edition Sneakers</MainTitle>
                <Description>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</Description>
                <NewPrice>$125.00</NewPrice>
                <Discount>50%</Discount>
                <OldPrice>$250.00</OldPrice>
            <Controls>
                <Quantity>
                    <Decrement onClick={handleDecrement}>
                        <DecrementSVG src={IconMinus}/>
                    </Decrement>
                    <Counter>{counter}</Counter>
                    <Increment onClick={handleIncrement}>
                        <IncrementSVG src={IconPlus}/>
                    </Increment>
                </Quantity>
                <AddToCart>
                    <ShoppingCart src={IconShoppingCart}/>
                    Add to cart
                </AddToCart>
            </Controls>
            </Text>
        </ShopItem>
    )
}