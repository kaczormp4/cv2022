import * as React from 'react';
import { FC, useState } from 'react';
import './LeftMenuNavi.scss';
import { AiFillHome } from 'react-icons/ai';
import { BiCategory, BiLogOut } from 'react-icons/bi';
import { RiShoppingBasket2Line } from 'react-icons/ri';
import { FiSettings } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectUserCart } from '../../../../redux/userCartReducer';

const LeftMenuNavi: FC = () => {
    const [fullMenu, setFullMenu] = useState<boolean>(true);
    const { counter } = useSelector(selectUserCart);

    return (
        <>
            <div className="leftMenuContainer">
                {fullMenu ?
                    <div className="leftMenuOpen">
                        <div className="shopLogo">
                            <div className="text">
                                <Link to="/">
                                    <RiShoppingBasket2Line />MyFavShop
                                </Link>
                            </div>
                        </div>
                        <div className="listConstainer">
                            <ul className="ulContainer">
                                <li><Link to="home"><AiFillHome /><span>HOME</span></Link></li>
                                <li><Link to="shopcategories"><BiCategory /><span>CATEGORIES</span></Link></li>
                                <li>
                                    <Link to="shopcart">
                                        <RiShoppingBasket2Line />
                                        <span>CART</span>
                                        <span className="Counter">{counter > 0 && counter}</span>
                                    </Link>
                                </li>
                                <li><Link to="shopsettings"><FiSettings /><span>SETTINGS</span></Link></li>
                                <li><Link to="/"><BiLogOut /><span>LOG OUT</span></Link></li>
                            </ul>
                        </div>
                        {/* <div className="closeAndOpenConstainer"><IoIosArrowBack /></div> */}
                    </div>
                    :
                    <div className="leftMenuClose">
                    </div>
                }
            </div>
        </>
    )
}

export default LeftMenuNavi
