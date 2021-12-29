import * as React from 'react';
import { FC } from 'react';
import './ProductMiniBox.scss';
import { VscCircleSlash } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectUserCart } from '../../../../redux/userCartReducer';
import { BiMinusCircle, BiPlusCircle } from 'react-icons/bi';

interface ProductProps {
    id: number,
    name: string,
    description: string,
    category: string
    price: number,
    availablePieces: number,
    image: null | any,
    boxButtonType?: string,
    numOfItems?: number,
}

const ProductMiniBox: FC<ProductProps> = (props: ProductProps) => {
    const data = useSelector(selectUserCart);
    // console.log(data);

    const dispatch = useDispatch();
    const addToCartHandleClick = () => {
        dispatch(addToCart());
    };
    const removeFromCartHandleClick = () => {
        dispatch(removeFromCart());
    };

    let footerSection = null;
    switch (props.boxButtonType) {
        case 'addToCart':
            footerSection = <>
                <div className="ProductAddToCart" onClick={addToCartHandleClick}>
                    <span>ADD TO CART</span>
                </div>
            </>
            break;
        case 'addOrRemove':
            footerSection = <>
                <div className="ProductAddOrRemove">
                    <BiMinusCircle onClick={removeFromCartHandleClick} />
                    <input type="number" value={props.numOfItems}></input>/ {props.availablePieces}
                    <BiPlusCircle onClick={addToCartHandleClick} />
                </div>
            </>
            break;
        default:
            footerSection = null;
            break;
    }

    return (
        <div className="ProductMiniBox">
            <div className="ProductImg">{props.image === null ? <VscCircleSlash /> : props.image}</div>
            <div className="ProductDesc">
                <span>{props.name}</span>
                <span>{props.price}$</span>
            </div>
            {footerSection}
        </div>
    )
}

export default ProductMiniBox
