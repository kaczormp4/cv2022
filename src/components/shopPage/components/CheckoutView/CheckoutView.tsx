import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { cleartCart, selectUserCart } from '../../../../redux/userCartReducer';
import products from '../../data/products';
import './CheckoutView.scss';

const CheckoutView = () => {
    const { inCart } = useSelector(selectUserCart);
    const addedToCart = products.filter(
        allProducts => inCart.some((product: { productID: number; }) => product.productID === allProducts.id));

    const dispatch = useDispatch();
    const addToCartHandleClick = () => {
        dispatch(cleartCart());
    };

    let totalPrice: number = 0;
    addedToCart.forEach((p: { id: number, price: number }) => {
        inCart.forEach((e: { productID: number, amount: number }) => {
            if (p.id === e.productID) {
                totalPrice += p.price * e.amount
            }
        });
    });

    return (
        <>
            <div className="Cart">
                <span>CHECKOUT</span>
                <div className="arrowBox">
                    {/* <BiLeftArrow />
                    <BiRightArrow /> */}

                    <Link to='/'><button onClick={addToCartHandleClick}>BUY AND PAY</button></Link>

                </div>
            </div>
            <div className="InfoContent">
                <div className="Products">
                    <div className="ProductsTitle">Products</div>
                    <table className="ProductsTable">
                        <tr>
                            <th>Id</th>
                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th>Qantity</th>
                            <th>Price Per Item </th>
                            <th>Price</th>
                        </tr>
                        {
                            addedToCart.map((prd, i) => {
                                const quantity = inCart.find((inCart: { productID: number; }) => inCart.productID === prd.id).amount;
                                return <tr>
                                    <td>{i + 1}</td>
                                    <td>{prd.id}</td>
                                    <td>{prd.name}</td>
                                    <td>{quantity}</td>
                                    <td>{prd.price}</td>
                                    <td>{quantity * prd.price}$</td>
                                </tr>
                            })
                        }
                        <tr className="Results">
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>TOTAL PRICE:</th>
                            <th>{totalPrice}$</th>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default CheckoutView
