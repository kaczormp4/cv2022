import * as React from 'react';
import { FC } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import ProductMiniBox from '../ProductMiniBox/ProductMiniBox';
import products from '../../data/products';
import './CartView.scss';
import { selectUserCart } from '../../../../redux/userCartReducer';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CartView: FC = () => {
    const { inCart } = useSelector(selectUserCart);
    const addedToCart = products.filter(
        allProducts => inCart.some((product: { productID: number; }) => product.productID === allProducts.id));

    let totalPrice: number = 0;
    addedToCart.forEach((p: { id: number, price: number }) => {
        inCart.forEach((e: { productID: number, amount: number }) => {
            if (p.id === e.productID) {
                totalPrice += p.price * e.amount
            }
        });
    });

    // only if arrays lengths are the same
    // addedToCart.forEach(p => totalPrice += p.price * inCart.find((e: { id: number; }) => p.id === e.id).amount);
    return (
        <>
            <div className="Cart">
                <span>CART</span>
                <div className="arrowBox">
                    {/* <BiLeftArrow />
                    <BiRightArrow /> */}
                    <span>
                        TOTAL PRICE: {totalPrice}$
                    </span>
                    {
                        totalPrice > 0 && <Link to='/checkout'><button className="buttonGTC">go to checkout</button></Link>
                    }
                </div>
            </div>
            {
                addedToCart.length === 0 &&
                <div className="CartVievDesc">Your Cart is empty, go to <Link to='/home'>HOME</Link> and add something :)</div>
            }
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
                        />
                    )
                }
            </div>
        </>
    )
}

export default CartView
