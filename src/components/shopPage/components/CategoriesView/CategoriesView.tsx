import * as React from 'react';
import './CategoriesView.scss';
import CategoryMiniBox from './CategoryMiniBox/CategoryMiniBox';
import categories from '../../data/categories';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import { FC } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const CategoriesView: FC = () => {
    let params = useParams();

    if (params?.categoryId) {
        return <Outlet />
    } else {
        return (
            <>
                <div className="Categories">
                    <span>CATEGORIES</span>
                    <div className="arrowBox">
                        {/* <BiLeftArrow />
                        <BiRightArrow /> */}
                    </div>
                </div>
                <div className="CategoriesVievBox">
                    {
                        categories.map(category =>
                            <CategoryMiniBox
                                key={category.id}
                                id={category.id}
                                category={category.category}
                                image={category.image}
                            />)
                    }
                </div>
            </>
        )
    }
}

export default CategoriesView
