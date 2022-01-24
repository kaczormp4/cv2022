import * as React from 'react';
import { FC, useState } from 'react';
import './LeftMenuNavi.scss';
import { AiFillHome } from 'react-icons/ai';
import { BiCategory, BiLogOut } from 'react-icons/bi';
import { RiShoppingBasket2Line } from 'react-icons/ri';
import { FiSettings } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { cleartCart, selectUserCart } from '../../../../redux/userCartReducer';

interface LeftMenuNaviProps {
    mobile: boolean;
}
const LeftMenuNavi: FC<LeftMenuNaviProps> = ({ mobile }) => {
    const [fullMenu, setFullMenu] = useState<boolean>(true);
    const { counter } = useSelector(selectUserCart);

    const dispatch = useDispatch();
    const clearCartHandleClick = () => {
        dispatch(cleartCart());
    };

    return (
        !mobile ?
            <>
                <div className="leftMenuContainer">
                    {fullMenu ?
                        <div className="leftMenuOpen">
                            <div className="shopLogo">
                                <div className="text">
                                    <Link to="cv2022">
                                        <RiShoppingBasket2Line /><span>MyFavShop</span>
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
                                    <li onClick={clearCartHandleClick}><Link to="cv2022"><BiLogOut /><span>LOG OUT</span></Link></li>
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
            :
            <>
                <div className="leftMenuContainerMobile">
                    <div className="leftMenuOpenMobile">
                        <ul className="ulContainerMobile">
                            <li><Link to="home"><AiFillHome /></Link></li>
                            <li><Link to="shopcategories"><BiCategory /></Link></li>
                            <li>
                                <Link to="shopcart">
                                    <RiShoppingBasket2Line />
                                    <span className="CounterMobile">{counter > 0 && counter}</span>
                                </Link>
                            </li>
                            <li><Link to="shopsettings"><FiSettings /></Link></li>
                        </ul>
                    </div>
                </div>
            </>
    )
}

export default LeftMenuNavi
