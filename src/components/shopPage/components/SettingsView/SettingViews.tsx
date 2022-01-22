import * as React from 'react';
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editRecordInUserProfile, selectUserProfile } from '../../../../redux/userProfileReducer';
import './SettingViews.scss';
import { GrEdit } from 'react-icons/gr';
import { MdOutlineEditOff } from 'react-icons/md';

const SettingViews: FC = () => {
    const [editInfo, setEditinfo] = useState<boolean>(false)
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
            <div className="editInfoBar" onClick={(e: React.MouseEvent<HTMLElement>) => setEditinfo(!editInfo)}>
                {
                    !editInfo ?
                        <>  EDIT INFO <GrEdit /></>
                        : <>  CLOSE  EDIT MODE <MdOutlineEditOff /></>
                }
            </div>
            {editInfo && <div className="userInfo">
                <div className="userInfoOneLine">
                    <div className="desc">Nick&nbsp;Name: </div>
                    <div className="editInfo">
                        <input
                            type="text"
                            value={user.username}
                            onChange={changeTextInInput}
                            name="username"
                            maxLength={12}
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
                            maxLength={12}
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
                            maxLength={12}
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
                            maxLength={20}
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
                            name="phone"
                            maxLength={15}
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
                            maxLength={20}
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
                            maxLength={20}
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
                            maxLength={20}
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
                            maxLength={20}
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
                            maxLength={9}
                        />
                    </div>
                </div>
                <div className="userInfoOneLine">
                    <div className="desc">Photo URL: </div>
                    <div className="editInfo">
                        <input
                            type="text"
                            value={user.photoUrl}
                            onChange={changeTextInInput}
                            name="photoUrl"
                        />
                    </div>
                </div>
            </div>
            }
            <div className="staticUserInfo">
                <div className="userPhoto" style={miniUserPhoto}></div>
                <div className="userMainInfoContainer">
                    <span>Nick Name:</span>
                    <p className="bold">{user.username}</p>
                    <span>Name:</span>
                    <p className="bold">{user.name}</p>
                    <span>Surname:</span>
                    <p className="bold">{user.surname}</p>
                    <span>Website:</span>
                    <p className="bold">{user.website}</p>
                </div>
                <div className="userScndInfoContainer">
                    <p className="sectionTitle">Address and contact information</p>
                    <div>
                        <span>Phone Number: </span>
                        <p className="bold">{user.phone}</p>
                        <span>EMAIL: </span>
                        <p className="bold">{user.email}</p>
                        <span>Suite: </span>
                        <p className="bold">{user.suite}</p>
                    </div>
                    <div>
                        <span>Street:  </span>
                        <p className="bold">{user.street}</p>
                        <span>City:  </span>
                        <p className="bold">{user.city}</p>
                        <span>Zip Code:  </span>
                        <p className="bold">{user.zipcode}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingViews

