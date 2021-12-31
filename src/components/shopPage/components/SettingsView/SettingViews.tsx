import * as React from 'react';
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editRecordInUserProfile, selectUserProfile } from '../../../../redux/userProfileReducer';
import './SettingViews.scss';

const SettingViews: FC = () => {
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const user = useSelector(selectUserProfile)

    const dispatch = useDispatch();
    const changeTextInInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch(editRecordInUserProfile(e.target.value));
    };

    const miniUserPhoto = {
        backgroundImage: `url(${user.photoUrl})`,
    };
    return (
        <div className="navContainer">
            <div className="userInfo">
                <div className="userInfoOneLine">
                    <div className="desc">Name: </div>
                    <div className="editInfo">
                        {
                            isEditing ?
                                <input
                                    type="text"
                                    value={user.name}
                                    onChange={changeTextInInput}
                                    onBlur={(e: any) => setIsEditing(!isEditing)} /
                                >
                                : <span onClick={(e: React.MouseEvent<HTMLElement>) => setIsEditing(!isEditing)}>
                                    {user.name}
                                </span>
                        }
                    </div>
                </div>
                <div className="userInfoOneLine">
                    <div className="desc">Surname: </div>
                    <div>
                        <span> {user.surname}</span>
                    </div>
                </div>
            </div>
            <div className="userPhoto" style={miniUserPhoto}></div>
        </div>
    )
}

export default SettingViews

