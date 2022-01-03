import * as React from 'react';
import { FcOldTimeCamera, FcClock, FcCompactCamera, FcSimCard, FcCamcorderPro, FcVideoProjector } from 'react-icons/fc';
import { FaCar } from 'react-icons/fa';
import { GiLargeDress } from 'react-icons/gi';

interface Products {
    id: number,
    name: string,
    description: string,
    category: string
    price: number,
    availablePieces: number,
    image: null | any,
}

const products: Products[] = [
    {
        id: 1,
        name: 'Camera',
        description: 'new Camera',
        category: 'devices',
        price: 500,
        availablePieces: 5,
        image: <FcOldTimeCamera />,
    },
    {
        id: 2,
        name: 'Watch',
        description: 'new Watch',
        category: 'devices',
        price: 100,
        availablePieces: 3,
        image: <FcClock />,
    },
    {
        id: 3,
        name: 'Compact Camera',
        description: 'new Compact Camera',
        category: 'devices',
        price: 2500,
        availablePieces: 2,
        image: <FcCompactCamera />,
    },
    {
        id: 4,
        name: 'Sim Card',
        description: 'new Sim Card',
        category: 'devices',
        price: 10,
        availablePieces: 100,
        image: <FcSimCard />,
    },
    {
        id: 5,
        name: 'BMW',
        description: 'new BMW',
        category: 'cars',
        price: 7200,
        availablePieces: 2,
        image: <FaCar />,
    },
    {
        id: 6,
        name: 'Cap',
        description: 'new Cap',
        category: 'clothes',
        price: 5,
        availablePieces: 85,
        image: null,
    },
    {
        id: 7,
        name: 'Dress',
        description: 'new Dress',
        category: 'clothes',
        price: 55,
        availablePieces: 25,
        image: <GiLargeDress/>,
    },
    {
        id: 8,
        name: 'Cam Pro',
        description: 'old Cam Pro',
        category: 'devices',
        price: 2255,
        availablePieces: 2,
        image: <FcCamcorderPro/>,
    },
    {
        id: 9,
        name: 'Video Projector',
        description: 'old VideoProjector',
        category: 'devices',
        price: 2155,
        availablePieces: 22,
        image: <FcVideoProjector/>,
    }
]

export default products;