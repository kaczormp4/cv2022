import * as React from 'react';
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editRecordInUserProfile, selectUserProfile } from '../../../../redux/userProfileReducer';
import './SettingViews.scss';

const SettingViews: FC = () => {
    const user = useSelector(selectUserProfile)

    const dispatch = useDispatch();
    const changeTextInInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch(editRecordInUserProfile(e.target.value, e.target.name));
    };

    const miniUserPhoto = {
        backgroundImage: `url(${user.photoUrl})`,
    };
    return (
        <div className="navContainer">
            <div className="userInfo">
                <div className="userInfoOneLine">
                    <div className="desc">Nick Name: </div>
                    <div className="editInfo">
                        <input
                            type="text"
                            value={user.username}
                            onChange={changeTextInInput}
                            name="username"
                        />
                    </div>
                </div>
                <div className="userInfoOneLine">
                    <div className="desc">Name: </div>
                    <div className="editInfo">
                        <input
                            type="text"
                            value={user.name}
                            onChange={changeTextInInput}
                            name="name"
                        />
                    </div>
                </div>
                <div className="userInfoOneLine">
                    <div className="desc">Surname: </div>
                    <div className="editInfo">
                        <input
                            type="text"
                            value={user.surname}
                            onChange={changeTextInInput}
                            name="surname"
                        />
                    </div>
                </div>
                <div className="userInfoOneLine">
                    <div className="desc">Email: </div>
                    <div className="editInfo">
                        <input
                            type="text"
                            value={user.email}
                            onChange={changeTextInInput}
                            name="email"
                        />
                    </div>
                </div>
                <div className="userInfoOneLine">
                    <div className="desc">Phone Nr: </div>
                    <div className="editInfo">
                        <input
                            type="text"
                            value={user.phone}
                            onChange={changeTextInInput}
                            name="email"
                        />
                    </div>
                </div>
                <div className="userInfoOneLine">
                    <div className="desc">Website: </div>
                    <div className="editInfo">
                        <input
                            type="text"
                            value={user.website}
                            onChange={changeTextInInput}
                            name="website"
                        />
                    </div>
                </div>
                <div className="userInfoOneLine">
                    <div className="desc">Street: </div>
                    <div className="editInfo">
                        <input
                            type="text"
                            value={user.street}
                            onChange={changeTextInInput}
                            name="street"
                        />
                    </div>
                </div>
                <div className="userInfoOneLine">
                    <div className="desc">Suite: </div>
                    <div className="editInfo">
                        <input
                            type="text"
                            value={user.suite}
                            onChange={changeTextInInput}
                            name="suite"
                        />
                    </div>
                </div>
                <div className="userInfoOneLine">
                    <div className="desc">City: </div>
                    <div className="editInfo">
                        <input
                            type="text"
                            value={user.city}
                            onChange={changeTextInInput}
                            name="city"
                        />
                    </div>
                </div>
                <div className="userInfoOneLine">
                    <div className="desc">Zip Code: </div>
                    <div className="editInfo">
                        <input
                            type="text"
                            value={user.zipcode}
                            onChange={changeTextInInput}
                            name="zipcode"
                        />
                    </div>
                </div>
            </div>
            <div className="userPhoto" style={miniUserPhoto}></div>
        </div>
    )
}

export default SettingViews

