import * as React from 'react';
import { FcOldTimeCamera } from 'react-icons/fc';
import { FaCarSide } from 'react-icons/fa';
import { GiClothes } from 'react-icons/gi';
import { SVGAttributes } from 'react';

interface Categories {
    id: number,
    category: string,
    image: null | SVGAttributes<SVGElement>,
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
        image: <FaCarSide />,
    },
    {
        id: 3,
        category: 'clothes',
        image: <GiClothes />,
    },
]

export default categories;