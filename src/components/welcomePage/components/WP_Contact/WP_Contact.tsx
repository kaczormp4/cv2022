import * as React from 'react';
import { useState } from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { MdOutlineLocalPostOffice } from 'react-icons/md';
import './WP_Contact.scss';

const WP_Contact = () => {
    const [infoEnable, setInfoEnable] = useState<string>('');
    const handleOnclick = (type: string) => {
        if (type === 'number') {
            setInfoEnable(type)
            navigator.clipboard.writeText('+48 739 033 812');
            setTimeout(() => {
                setInfoEnable('')
            }, 3000);

        } else if (type === 'email') {
            setInfoEnable(type)
            navigator.clipboard.writeText('bkbusiness99@gmail.com')
            setTimeout(() => {
                setInfoEnable('')
            }, 3000);
        }
    }
    return (
        <>
            <h1 className="sectionH1">CONTACT</h1>
            <div className="WPC_Content">
                <div className="WPP_oneLine" onClick={() => handleOnclick('number')}>
                    {infoEnable === 'number' && <div className="WPP_oneLineCoppiedToClipboard">Number has been copied to the clipboard</div>}
                    <AiOutlinePhone /><span>+48 739 033 812</span>
                </div>
                <div className="WPP_oneLine" onClick={() => handleOnclick('email')}>
                    {infoEnable === 'email' && <div className="WPP_oneLineCoppiedToClipboard">Email  has been copied to the clipboard</div>}
                    <MdOutlineLocalPostOffice /><span>bkbusiness99@gmail.com</span>
                </div>
                <a href='https://www.linkedin.com/in/bart%C5%82omiej-kaczmarczyk-77aa77215/' className="WPP_oneLine">
                    <FaLinkedin /><span>linkedin</span>
                </a>

            </div>
        </>
    )
}

export default WP_Contact;
