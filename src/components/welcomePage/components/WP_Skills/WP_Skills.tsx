import * as React from 'react';
import './WP_Skills.scss';

const WP_Skills = () => {
    const skills = [
        {
            id: 1,
            name: "React",
            perct: 60,
            duration: '3s'
        },
        {
            id: 2,
            name: "Redux",
            perct: 40,
            duration: '4s'
        },
        {
            id: 3,
            name: "Type Script",
            perct: 40,
            duration: '5s'
        },
        {
            id: 4,
            name: "Java Script",
            perct: 70,
            duration: '3s'
        },
        {
            id: 5,
            name: "HTML",
            perct: 80,
            duration: '6s'
        },
        {
            id: 6,
            name: "SCSS",
            perct: 70,
            duration: '3s'
        },
        {
            id: 7,
            name: "Git",
            perct: 60,
            duration: '4s'
        },
    ];
    return (
        <>
            <h1 className="sectionH1">SKILLS</h1>
            <div className="WP_SkillsConent">
                {
                    skills.map((s) =>
                        <div className="WP_SkillsBar" key={s.id}>
                            <div className="EmptyBar_char">
                                <div className="filledBar_char" style={{ height: `${s.perct}%` }}></div>
                                <div className="filledBar_charAaimation" style={{ animationDuration: `${s.duration}` }}></div>
                            </div>
                            <span>{s.name}</span>
                        </div>
                    )
                }
            </div>
            <h1 className="sectionH1">ADDITIONAL SKILLS</h1>
            <div className="WP_AditionalSkillsConent">
                <p>- Graphics editing - photoshop / gimp</p>
                <p>- Film editing - premiere pro</p>
                <p>- Word /excel</p>
                <p>- Driving license category B</p>
                <p>- Organizational skills</p>
                <p>- Music producing</p>
            </div>
        </>
    )
}

export default WP_Skills
