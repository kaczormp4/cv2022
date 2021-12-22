import * as React from 'react';
import './ShopPage.scss';
import LeftMenuNavi from './components/LeftMenuNavi/LeftMenuNavi';
import { BsBellFill } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { FcSearch } from 'react-icons/fc';

const ShopPage = () => {
    return (
        <div className="ShopPageContainer">
            <div className="SP_MainWiew">
                <LeftMenuNavi />
                <div className="rightContentContainer">
                    <div className="navContainer">
                        <div className="navContent">
                            <div className="searchEngine">
                                <input type="search"></input><div><FcSearch /></div>
                            </div>
                            <div className="rightNavPanel">
                                <div className="iconBox">
                                    <FiMail /> <BsBellFill />
                                </div>
                                <div className="miniUserPhoto"></div>
                                <div className="navUserInfo">Jan Kowalski</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ShopPage

