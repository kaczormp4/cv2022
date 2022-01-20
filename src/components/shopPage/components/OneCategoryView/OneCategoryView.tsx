import * as React from 'react';
import './OneCategoryView.scss';
import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductMiniBox from '../ProductMiniBox/ProductMiniBox';
import products from '../../data/products';

const OneCategoryView: FC = () => {
    let params = useParams();
    const productByCategory = products.filter((product) => product.category === params.categoryId);
    return (
        <>
            <div className="Categories">
                <span><Link to="/shopcategories">CATEGORIES</Link> / {params.categoryId}</span>
                <div className="arrowBox">
                    {/* <BiLeftArrow />
                        <BiRightArrow /> */}
                </div>
            </div>
            <div className="CategoriesVievBox">
                {productByCategory.map((product) =>
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

export default OneCategoryView
