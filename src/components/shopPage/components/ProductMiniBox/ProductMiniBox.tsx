import * as React from 'react';
import { FC } from 'react';
import './ProductMiniBox.scss';
import { VscCircleSlash } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectUserCart } from '../../../../redux/userCartReducer';
import { BiMinusCircle, BiPlusCircle } from 'react-icons/bi';
import { ImCancelCircle } from 'react-icons/im';
import { openModalByProductId } from '../../../../redux/modalReducer';

interface ProductProps {
    id: number,
    name: string,
    description: string,
    category: string
    price: number,
    availablePieces: number,
    image: null | any,
    boxButtonType?: string,
}

const ProductMiniBox: FC<ProductProps> = (props: ProductProps) => {
    const { inCart } = useSelector(selectUserCart);
    const numOfItems = inCart.filter((p: { productID: number; }) => p.productID === props.id);

    const dispatch = useDispatch();
    const addToCartHandleClick = () => {
        dispatch(addToCart(props.id));
    };
    const removeFromCartHandleClick = () => {
        dispatch(removeFromCart(props.id));
    };
    const openFullViewInModal = () => {
        dispatch(openModalByProductId(true, props.id));
    }

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
                    {
                        numOfItems[0].amount === 0 ?
                            <ImCancelCircle onClick={removeFromCartHandleClick} className="deleteProduct" />
                            : <BiMinusCircle onClick={removeFromCartHandleClick} />
                    }

                    {/* <input type="number" value={numOfItems[0].amount}></input> //NEW FUTURE  */}
                    {numOfItems[0].amount} / {props.availablePieces}
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
            <div onClick={openFullViewInModal}>
                <div className="ProductImg" >{props.image === null ? <VscCircleSlash /> : props.image}</div>
                <div className="ProductDesc">
                    <span>{props.name}</span>
                    <span>{props.price}$</span>
                </div>
            </div>
            {footerSection}
        </div>
    )
}

export default ProductMiniBox
