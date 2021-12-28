import * as React from 'react';
import { FC } from 'react';
import './SortedAndFiltredViev.scss';
import { BiRightArrow, BiLeftArrow, BiPlusCircle, BiMinusCircle } from 'react-icons/bi';
import ProductMiniBox from '../ProductMiniBox/ProductMiniBox';
import products from '../../data/products';
import { useParams } from 'react-router-dom';

const SortedAndFiltredViev: FC = () => {
    let params = useParams();
    return <h1>Invoice {params.categoryId}</h1>;
    // const dealsOftheDay = products.filter((product) => product.price < 100);
    // return (
    //     <>
    //         <div className="Categories">
    //             <span>Deals of the day</span>
    //             <div className="arrowBox">
    //                 <BiLeftArrow />
    //                 <BiRightArrow />
    //             </div>
    //         </div>
    //         <div className="Products">
    //             {dealsOftheDay.map((product) =>
    //                 <ProductMiniBox
    //                     id={product.id}
    //                     name={product.name}
    //                     description={product.description}
    //                     category={product.category}
    //                     price={product.price}
    //                     availablePieces={product.availablePieces}
    //                     image={product.image}
    //                 />
    //             )}
    //         </div>
    //     </>
    // )
}

export default SortedAndFiltredViev
