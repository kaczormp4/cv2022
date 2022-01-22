import * as React from 'react';
import './WP_About.scss';

const WP_About: React.FC = () => {
    return (
        <>
            <h1 className="sectionH1">ABOUT ME</h1>
            <div className="WPAcontent">
                <p> My name is Bartłomiej Kaczmarczyk, I'm 22 years old. I come from a small village near Bochnia, where I was born.</p>

                <p> I'm studying extramurally at Computer Sciences and Econometrics University of Cracow, majoring in "Computer Science And Econometrics" - Frontend Developer Module. </p>

                <p> I have one year of experience in IBM Poland Sp. z o.o., as a Frontend Developer. I worked in the SPSS team. My task was to implement such components as recode variables or chart catalogue. Besides, I was dealing with bugs.</p>

                <p> I'm currently learning TypeScript with react. In addition to programming languages, I attend additional English lessons. </p>

                <p> I am interested in programming, music production and I read a lot of business books. I am not afraid of challenges. I am open and communicative, I learn very quickly.</p>
            </div>
        </>
    )
}

export default WP_About
