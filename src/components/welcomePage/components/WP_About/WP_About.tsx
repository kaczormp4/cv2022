import * as React from 'react';
import './WP_About.scss';

const WP_About: React.FC = () => {
    return (
        <>
            <h1 className="sectionH1">ABOUT ME</h1>
            <div className="WPAcontent">
                <p> My name is Bartłomiej Kaczmarczyk, I'm 22 Years Old. I come from a small village near Bochnia, where is my place of birth.</p>

                <p> I'm studying extramural at The University Of Computer Science And Econometrics, majoring in "Computer Science And Econometrics" - Frontend Developer Module. </p>

                <p> I have one year experience in IBM POLSKA SP Z O O, as Frontend Developer. I worked in SPSS team. My task was to implement such components as recode variables or chart catalog. Besides, I was dealing with bugs.</p>

                <p> I'm currently learning TypeScript with react. In addition to programming languages, I attend additional English lessons </p>

                <p>I am interested in programming, music production and I read a lot of business books. I am not afraid of challenges. I'm open and communicative, I learn very quickly.</p>
            </div>
        </>
    )
}

export default WP_About
