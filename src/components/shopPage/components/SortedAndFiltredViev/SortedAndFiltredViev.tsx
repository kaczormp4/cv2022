import * as React from 'react';
import { FC } from 'react';
import './SortedAndFiltredViev.scss';
import { BiRightArrow, BiLeftArrow, BiPlusCircle, BiMinusCircle } from 'react-icons/bi';
import ProductMiniBox from '../ProductMiniBox/ProductMiniBox';
import products from '../../data/products';
import { useParams } from 'react-router-dom';
import { selectSearchEngine } from '../../../../redux/searchEngineReducer';
import { useSelector } from 'react-redux';

const SortedAndFiltredViev: FC = () => {
    let params = useParams();

    const typedTextInSearchEngine = useSelector(selectSearchEngine);
    const filteredProducts = products.filter((product) => {
        if (typedTextInSearchEngine !== '') {
            return (
                product.name.toLowerCase().includes(typedTextInSearchEngine)
                || product.description.toLowerCase().includes(typedTextInSearchEngine)
                || product.category.toLowerCase().includes(typedTextInSearchEngine)
            )
        }
        return true;
    });

    return (
        <>
            <h1>{params.categoryId}</h1>
            <div className="Categories">
                {
                    typedTextInSearchEngine === '' ?
                        <span>Type Text in Search Engine</span>
                        : <span>Search results from: {typedTextInSearchEngine}</span>
                }
                <div className="arrowBox">
                    {/* <BiLeftArrow />
                    <BiRightArrow /> */}
                </div>
            </div>
            <div className="Products">
                {filteredProducts.map((product) =>
                    <ProductMiniBox
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

export default SortedAndFiltredViev
