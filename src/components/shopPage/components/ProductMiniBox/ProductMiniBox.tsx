import * as React from 'react';
import { FC } from 'react';
import './ProductMiniBox.scss';
import { VscCircleSlash } from 'react-icons/vsc';

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
    return (
        <div className="ProductMiniBox">
            <div className="ProductImg">{props.image === null ? <VscCircleSlash /> : props.image}</div>
            <div className="ProductDesc">
                <span>{props.name}</span>
                <span>{props.price}$</span>
            </div>
            <div className="ProductAddToCart">
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
