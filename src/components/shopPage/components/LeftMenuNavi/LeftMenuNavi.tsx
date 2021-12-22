import * as React from 'react';
import { FC, useState } from 'react';
import './LeftMenuNavi.scss';
import { AiFillHome } from 'react-icons/ai';
import { BiCategory } from 'react-icons/bi';
import { RiShoppingBasket2Line } from 'react-icons/ri';
import { FiSettings } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';


const LeftMenuNavi: FC = () => {
    const [fullMenu, setFullMenu]: any = useState(true)
    return (
        <>
            <div className="leftMenuContainer">
                {fullMenu ?
                    <div className="leftMenuOpen">
                        <div className="shopLogo">
                            <div className="text"><RiShoppingBasket2Line/>MyFavShop</div>
                        </div>
                        <div className="listConstainer">
                            <ul className="ulContainer">
                                <li><AiFillHome /><span>HOME</span></li>
                                <li><BiCategory /><span>CATEGORIES</span></li>
                                <li><RiShoppingBasket2Line/><span>CART</span></li>
                                <li><FiSettings/><span>SETTINGS</span></li>
                            </ul>
                        </div>
                        <div className="closeAndOpenConstainer"><IoIosArrowBack/></div>
                    </div>
                    :
                    <div className="leftMenuClose"></div>
                }
            </div>
        </>
    )
}

export default LeftMenuNavi
