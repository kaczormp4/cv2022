import * as React from 'react';
import './WP_Education.scss';

const WP_Education = () => {
    return (
        <>
            <h1 className="sectionH1">EDUCATION</h1>
            <div className="WPAcontent">
                <div className="WPA_EduBox">
                    <div className="WPA_LeftLine">
                        <div className="WPA_Circle">NOW</div>
                        <div className="WPA_Line"></div>
                        <div className="WPA_Circle">2020</div>
                    </div>
                    <div className="WPA_RightContent">
                        <span> University of Economics and Computer Science in Krakow  </span>
                        <p>IT and Econometrics profile</p>
                    </div>
                </div>
                <div className="WPA_EduBox">
                    <div className="WPA_LeftLine">
                        <div className="WPA_Circle">2019</div>
                        <div className="WPA_Line"></div>
                        <div className="WPA_Circle">2015</div>
                    </div>
                    <div className="WPA_RightContent">
                        <span> School Complex No. 1 in Bochnia</span>
                        <p> IT technician profile</p>
                    </div>
                </div>


            </div>
        </>
    )
}

export default WP_Education;
