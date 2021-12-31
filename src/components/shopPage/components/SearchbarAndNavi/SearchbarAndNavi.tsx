import * as React from 'react';
import { BsBellFill } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { FcSearch } from 'react-icons/fc';
import './SearchbarAndNavi.scss';
import { Link } from "react-router-dom";
import { FC } from 'react';
import { selectSearchEngine, typeTextInSearchEngine } from '../../../../redux/searchEngineReducer';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserProfile } from '../../../../redux/userProfileReducer';


const SearchbarAndNavi: FC = () => {
    const typedText = useSelector(selectSearchEngine);
    const user = useSelector(selectUserProfile)

    const dispatch = useDispatch();
    const changeTextInInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch(typeTextInSearchEngine(e.target.value));
    };

    const miniUserPhotoURL = `url(${user.photoUrl})`
    const miniUserPhoto = {
        backgroundImage: miniUserPhotoURL,
    };

    return (
        <div className="navContainer">
            <div className="navContent">
                <div className="searchEngine">
                    <Link to="shopcategories">
                        <input type="search" value={typedText} onChange={changeTextInInput}></input>
                        <div><FcSearch /></div>
                    </Link>
                </div>
                <div className="rightNavPanel">
                    <div className="iconBox">
                        <FiMail /> <BsBellFill />
                    </div>
                    <Link to="shopsettings">
                        <div className="miniUserPhoto" style={miniUserPhoto}></div>
                        <div className="navUserInfo">{user.name} {user.surname}</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SearchbarAndNavi;
