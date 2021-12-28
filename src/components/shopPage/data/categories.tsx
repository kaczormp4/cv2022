import * as React from 'react';
import { FcOldTimeCamera} from 'react-icons/fc';
import { FaCarSide } from 'react-icons/fa';
import { GiClothes } from 'react-icons/gi';

interface Categories {
    id: number,
    category: string,
    image: null | any,
}

const categories: Categories[] = [
    {
        id: 1,
        category: 'devices',
        image: <FcOldTimeCamera />,
    },
    {
        id: 2,
        category: 'cars',
        image: <FaCarSide/>,
    },
    {
        id: 3,
        category: 'clothes',
        image: <GiClothes/>,
    },
]

export default categories;