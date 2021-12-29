import * as React from 'react';
import { FC } from 'react';
import './HomeView.scss';
import { BiRightArrow, BiLeftArrow, BiPlusCircle, BiMinusCircle } from 'react-icons/bi';
import ProductMiniBox from '../ProductMiniBox/ProductMiniBox';
import products from '../../data/products';

const vievedHistoryIds = [1, 2, 4, 6];

const HomeView: FC = () => {
    const dealsOftheDay = products.filter((product) => product.price < 100);
    const exclusiveOffers = products.filter((product) => product.price > 2000);
    const recentlyViewed = products.filter((product) => vievedHistoryIds.some((i) => product.id === i));

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
                {dealsOftheDay.map((product) =>
                    <ProductMiniBox
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        description={product.description}
                        category={product.category}
                        price={product.price}
                        availablePieces={product.availablePieces}
                        image={product.image}
                        boxButtonType={'addToCart'}
                    />
                )}
            </div>
            <div className="Categories">
                <span>Exclusive offers</span>
                <div className="arrowBox">
                    <BiLeftArrow />
                    <BiRightArrow />
                </div>
            </div>
            <div className="Products">
                {exclusiveOffers.map((product) =>
                    <ProductMiniBox
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        description={product.description}
                        category={product.category}
                        price={product.price}
                        availablePieces={product.availablePieces}
                        image={product.image}
                        boxButtonType={'addToCart'}
                    />
                )}
            </div>
            <div className="Categories">
                <span>Recently viewed by you</span>
                <div className="arrowBox">
                    <BiLeftArrow />
                    <BiRightArrow />
                </div>
            </div>
            <div className="Products">
                {recentlyViewed.map((product) =>
                    <ProductMiniBox
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        description={product.description}
                        category={product.category}
                        price={product.price}
                        availablePieces={product.availablePieces}
                        image={product.image}
                        boxButtonType={'addToCart'}
                    />
                )}
            </div>
        </>
    )
}

export default HomeView
