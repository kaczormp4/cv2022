import * as React from 'react';
import { FC } from 'react';
import './ProductMiniBox.scss';
import { VscCircleSlash } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectDateStart } from '../../../../redux/userCartReducer';

interface ProductProps {
    id: number,
    name: string,
    description: string,
    category: string
    price: number,
    availablePieces: number,
    image: null | any,
}

const ProductMiniBox: FC<ProductProps> = (props: ProductProps) => {
    const dispatch = useDispatch();
    const data = useSelector(selectDateStart);
    const addToCartHandleClick = () => {
        dispatch(addToCart());
    };
    console.log(data);
    return (
        <div className="ProductMiniBox">
            <div className="ProductImg">{props.image === null ? <VscCircleSlash /> : props.image}</div>
            <div className="ProductDesc">
                <span>{props.name}</span>
                <span>{props.price}$</span>
            </div>
            <div className="ProductAddToCart" onClick={addToCartHandleClick}>
                <span>ADD TO CART</span>
                {/* <div>
                    <BiMinusCircle/>
                    <input type="number"></input>
                    <BiPlusCircle/>
                </div> */}
            </div>
        </div>
    )
}

export default ProductMiniBox
