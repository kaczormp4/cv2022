import * as React from 'react';
import { FC, useState } from 'react';
import { BiMinusCircle, BiPlusCircle } from 'react-icons/bi';
import { VscCircleSlash } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { selectmodalReducer } from '../../../../redux/modalReducer';
import { addToCart, removeFromCart, selectUserCart } from '../../../../redux/userCartReducer';
import products from '../../data/products';
import './ProductFullView.scss';

const ProductFullView: FC = () => {
    const { id } = useSelector(selectmodalReducer);

    const { inCart } = useSelector(selectUserCart);
    const numOfItems = inCart.filter((p: { productID: number; }) => p.productID === id);

    const dispatch = useDispatch();
    const addToCartHandleClick = () => {
        dispatch(addToCart(id));
    };
    const removeFromCartHandleClick = () => {
        dispatch(removeFromCart(id));
    };

    const [fullView, setFullView] = useState<boolean>(false);
    //curent product
    const cp = products.find(product => product.id === id);
    return (
        <div className="FullViewContainer">
            <div
                className={fullView ? 'LargePhotoFullView' : 'LargePhoto'}
                onClick={() => setFullView(!fullView)}
            >
                {cp?.image === null ? <VscCircleSlash /> : cp?.image}
            </div>
            <div className={fullView ? 'displayNone' : 'MainDesc'}>
                <p>Product name:</p>
                <h1>{cp?.name}</h1>
                <p>Product category:</p>
                <h2>{cp?.category}</h2>
                <p>Available Pieces:</p>
                <h2>{cp?.availablePieces}</h2>
                <p>Product ID:</p>
                <h2>{cp?.id}</h2>

            </div>
            <div className={fullView ? 'displayNone' : 'DescAndInfo'}>
                <p>Description:</p>
                <h2>{cp?.description}</h2>
            </div>
            <div className={fullView ? 'displayNone' : 'AddToCart'}>
                <div className="priceBox">
                    <span>Price:</span>
                    <h2>{cp?.price}$</h2>
                </div>
                <div className="buttonsBox">
                    <div>
                        {
                            numOfItems[0]?.amount < 1 || numOfItems[0]?.amount === undefined ?
                                <BiMinusCircle className='Disabled' />
                                : <BiMinusCircle onClick={removeFromCartHandleClick} />
                        }
                        {/* <input type="number" value={numOfItems[0].amount}></input> //NEW FUTURE  */}
                        {numOfItems[0]?.amount !== undefined ? numOfItems[0].amount : "0"} / {cp?.availablePieces}
                        {
                            numOfItems[0]?.amount === cp?.availablePieces ?
                                <BiPlusCircle className='Disabled' />
                                : <BiPlusCircle onClick={addToCartHandleClick} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductFullView;