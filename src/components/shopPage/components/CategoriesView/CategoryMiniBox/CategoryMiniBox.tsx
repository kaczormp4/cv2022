import * as React from 'react';
import { FC } from 'react';
import './CategoryMiniBox.scss';
import { VscCircleSlash } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

interface CategoryProps {
    id: number,
    category: string
    image: null | any,
}

const CategoryMiniBox: FC<CategoryProps> = (props: CategoryProps) => {
    return (
        <Link to={props.category}>
            <div className="CategoryMiniBox" onClick={(e: React.MouseEvent<HTMLElement>) => console.log(props.category)}>
                <div className="CategoryImg">
                    {props.image === null ? <VscCircleSlash /> : props.image}
                </div>
                <div className="CategoryDesc">
                    {props.category}
                </div>
            </div>
        </Link>
    )
}

export default CategoryMiniBox
