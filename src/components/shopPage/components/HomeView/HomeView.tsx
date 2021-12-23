import * as React from 'react';
import './HomeView.scss';
import { BiRightArrow, BiLeftArrow, BiPlusCircle, BiMinusCircle } from 'react-icons/bi';
import { FcOldTimeCamera } from 'react-icons/fc';
const HomeView = () => {
    const miniBox = <>
        <div className="ProductMiniBox">
            <div className="ProductImg"><FcOldTimeCamera /></div>
            <div className="ProductDesc">
                <span>CAMERA</span>
                <span>557$</span>
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
    </>

    return (
        <>
            <div className="Categories">
                <span>Deals of the day</span>
                <div className="arrowBox">
                    <BiLeftArrow />
                    <BiRightArrow />
                </div>
            </div>
            <div className="Products">
                {miniBox}
                {miniBox}
                {miniBox}
            </div>
            <div className="Categories">
                <span>Exclusive offers</span>
                <div className="arrowBox">
                    <BiLeftArrow />
                    <BiRightArrow />
                </div>
            </div>
            <div className="Products">
                {miniBox}
                {miniBox}
                {miniBox}
                {miniBox}
                {miniBox}

            </div>
            <div className="Categories">
                <span>Recently viewed by you</span>
                <div className="arrowBox">
                    <BiLeftArrow />
                    <BiRightArrow />
                </div>
            </div>
            <div className="Products">
                {miniBox}
                {miniBox}
                {miniBox}
                {miniBox}
                {miniBox}
            </div>
        </>
    )
}

export default HomeView
