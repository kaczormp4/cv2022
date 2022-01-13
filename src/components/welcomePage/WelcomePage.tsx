import * as React from 'react';
import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import WP_About from './components/WP_About/WP_About';
import WP_Contact from './components/WP_Contact/WP_Contact';
import WP_Education from './components/WP_Education/WP_Education';
import WP_Skills from './components/WP_Skills/WP_Skills';
import './WelcomePage.scss';

const WelcomePage: React.FC = () => {
    const [currentView, setCurrentView] = useState<string>('');

    return (
        <div className="WelcomePageContainer">
            <div className="LeftContent">
                <div className="InfoContainer">
                    <div className="InfoPhotoBox" onClick={() => setCurrentView('')}>
                    </div>
                    <div className="InfoContentBox">
                        <span className="SpanTitle">Bartłomiej Kaczmarczyk</span>
                        <span className="SpanDesc">- Front-End Developer -</span>
                        <div className="InfoButtonBox">
                            <Link to='https://github.com/kaczormp4'><FaGithub /></Link>
                            <Link to='https://www.linkedin.com/in/bart%C5%82omiej-kaczmarczyk-77aa77215/'><FaLinkedin /></Link>
                        </div>
                    </div>
                    <div className="InfoPreviewBox">
                        <button onClick={() => setCurrentView('about')}>ABOUT</button>
                        <button onClick={() => setCurrentView('skills')}>SKILLS</button>
                        <button onClick={() => setCurrentView('education')}>EDUCATION</button>
                        <button onClick={() => setCurrentView('contact')}>CONTACT</button>
                    </div>
                </div>
            </div>
            <div className={`RightContentContainer ${currentView !== '' ? 'Open' : 'Close'}`}>
                <div className="RightContent">
                    {currentView === 'about' && <WP_About />}
                    {currentView === 'skills' && <WP_Skills />}
                    {currentView === 'education' && <WP_Education />}
                    {currentView === 'contact' && <WP_Contact />}
                </div>
            </div>
        </div>
    )
}

export default WelcomePage
