import * as React from 'react';
import { FC } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import ProductMiniBox from '../ProductMiniBox/ProductMiniBox';
import products from '../../data/products';
import './CartView.scss';
import { selectUserCart } from '../../../../redux/userCartReducer';
import { useSelector } from 'react-redux';

const CartView: FC = () => {
    const { inCart } = useSelector(selectUserCart);
    console.log(inCart);
    const addedToCart = products.filter(
        allProducts => inCart.some((product: { productID: number; }) => product.productID === allProducts.id));


    return (
        <>
            <div className="Cart">
                <span>CART</span>
                <div className="arrowBox">
                    <BiLeftArrow />
                    <BiRightArrow />
                </div>
            </div>
            <div className="CartVievBox">
                {
                    addedToCart.map((product) =>
                        <ProductMiniBox
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            description={product.description}
                            category={product.category}
                            price={product.price}
                            availablePieces={product.availablePieces}
                            image={product.image}
                            boxButtonType={'addOrRemove'}
                            numOfItems={inCart[0].amount}
                        />
                    )
                }
            </div>
        </>
    )
}

export default CartView
