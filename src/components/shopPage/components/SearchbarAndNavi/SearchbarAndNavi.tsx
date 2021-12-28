import * as React from 'react';
import { BsBellFill } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { FcSearch } from 'react-icons/fc';
import './SearchbarAndNavi.scss';
import { Link } from "react-router-dom";
import { FC } from 'react';


const SearchbarAndNavi: FC = () => {
    return (
        <div className="navContainer">
            <div className="navContent">
                <div className="searchEngine">
                    <input type="search"></input><div><FcSearch /></div>
                </div>
                <div className="rightNavPanel">
                    <div className="iconBox">
                        <FiMail /> <BsBellFill />
                    </div>
                    <Link to="shopsettings">
                        <div className="miniUserPhoto"></div>
                        <div className="navUserInfo">Jan Kowalski</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SearchbarAndNavi;
