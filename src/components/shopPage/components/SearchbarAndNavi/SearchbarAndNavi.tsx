import * as React from 'react';
import { BsBellFill } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { FcSearch } from 'react-icons/fc';
import './SearchbarAndNavi.scss';
import { Link } from "react-router-dom";
import { FC, useState } from 'react';
import { selectSearchEngine, typeTextInSearchEngine } from '../../../../redux/searchEngineReducer';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserProfile } from '../../../../redux/userProfileReducer';
import messages from '../../data/messages';
import FloatInfoPanel from './FloatInfoPanel/FloatInfoPanel';
import { IoMdCloseCircle } from 'react-icons/io';

interface InfoPanel {
    state?: boolean;
    type?: string;
}

const SearchbarAndNavi: FC = () => {
    const typedText = useSelector(selectSearchEngine);
    const user = useSelector(selectUserProfile);

    const [infoPanelState, openInfoPanel] = useState<InfoPanel>({ state: false, type: '' });

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
                    <Link to="search">
                        <input type="" value={typedText} onChange={changeTextInInput} maxLength={20}></input>
                        <div>
                            {typedText === '' ?
                                <FcSearch />
                                : <IoMdCloseCircle onClick={() => dispatch(typeTextInSearchEngine(''))} />}
                        </div>
                    </Link>
                </div>
                <div className="rightNavPanel">
                    <div className="iconBox">
                        <FiMail
                            onClick={() => openInfoPanel({ state: !infoPanelState.state, type: 'mail' })}
                            color={(infoPanelState.state && infoPanelState.type === "mail" ? 'rgb(28, 106, 224)' : undefined)}
                        />
                        <BsBellFill
                            onClick={() => openInfoPanel({ state: !infoPanelState.state, type: 'notification' })}
                            color={(infoPanelState.state && infoPanelState.type === "notification" ? 'rgb(28, 106, 224)' : undefined)}
                        />
                        {
                            infoPanelState.state && infoPanelState.type === "mail" &&
                            <div className="floatInfoPanel">
                                {messages.map((msg) =>
                                    <FloatInfoPanel
                                        key={msg.id}
                                        recipient={msg.recipient}
                                        topic={msg.topic}
                                        content={msg.content}
                                        icon={<FiMail />}
                                    />
                                )}
                            </div>
                        }
                        {
                            infoPanelState.state && infoPanelState.type === "notification" &&
                            <div className="floatInfoPanel">
                                <FloatInfoPanel
                                    key={'msg.id'}
                                    recipient={'NEW'}
                                    topic={'Newsletter'}
                                    content={'Sit irure nostrud eu irure dolore Lorem tempor irure dolore voluptate dolor nostrud ex eu.'}
                                    icon={<BsBellFill />}
                                />
                            </div>
                        }
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
