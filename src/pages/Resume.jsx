import React from 'react';
import "./styles/Resume.scss"
import ProgressBar from "../components/ProgressBar";
import BioIcon from "../assets/icons/bio.png"
import CodeIcon from "../assets/icons/code.png"
import SiteIcon from "../assets/icons/Site.png"

const Resume = () => {
    return (
        <div className="resume-container">
            <h1 className="title">
                Resume
            </h1>
            <main className="resume">
                <div className="resume-parts education">
                    <div className="title">
                        <p>
                            Bio
                        </p>
                        <img src={BioIcon} alt="bio-icon"/>
                    </div>
                    <div className="resume-list">
                        <div className="experience">
                            <div className="date">
                                <span>2000</span>
                                <span>9 Apr.</span>
                            </div>
                            <div className="description">
                                <div className="text">
                                    <strong>Born</strong>
                                    <p>
                                        The day I was born!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="experience">
                            <div className="date">
                                <span>2014</span>
                                <span>Sep.</span>
                            </div>
                            <div className="description">
                                <div className="text">
                                    <strong>High School</strong>
                                    <p>
                                        I studied high school in Sampad <span>(National Organization for Development of Exceptional Talents)</span> schools!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="experience">
                            <div className="date">
                                <span>2018</span>
                                <span>Sep.</span>
                            </div>
                            <div className="description">
                                <div className="text">
                                    <strong>University</strong>
                                    <p>
                                        I entered Azerbaijan Shahid Madani University to study computer engineering!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="experience">
                            <div className="date">
                                <span>2020</span>
                            </div>
                            <div className="description">
                                <div className="text">
                                    <strong>Started to self learn front-end development</strong>
                                    <p>
                                        I started to self-learn front-end programming with Html & Css.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="experience">
                            <div className="date">
                                <span>2021</span>
                                <span>Apr.</span>
                            </div>
                            <div className="description">
                                <div className="text">
                                    <strong>Front-end Intern</strong>
                                    <p>
                                        I was a front-end intern at a remote company and worked with the Vue & Nuxt framework for 6 months!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="experience">
                            <div className="date">
                                <span>2021</span>
                                <span>Apr.</span>
                            </div>
                            <div className="description">
                                <div className="text">
                                    <strong>Back-end course</strong>
                                    <p>
                                        I started taking a back-end course on the Quera site and finished the course with Perfect score!
                                        <br/>
                                        <a target="_blank" rel="noopener noreferrer" href="https://quera.org/certificate/PZFJf70b/">
                                            Read on <b>Quera</b>!
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="experience">
                            <div className="date">
                                <span>2021</span>
                                <span>Apr.</span>
                            </div>
                            <div className="description">
                                <div className="text">
                                    <strong>Started to self learn react development</strong>
                                    <p>
                                        I started to self-learn front-end programming with React and I have developed this WebSite with React :)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="resume-parts skills">
                    <div className="title">
                        <p>
                            Skills
                        </p>
                        <img src={CodeIcon} alt="code-icon"/>
                    </div>
                    <div className="skills-list">
                        <div className="item">
                            <span>Html</span>
                            <ProgressBar progress="80" bgcolor="#dd4b25"/>
                        </div>
                        <div className="item">
                            <span>Css</span>
                            <ProgressBar progress="70" bgcolor="#264de4"/>
                        </div>
                        <div className="item">
                            <span>Python</span>
                            <ProgressBar progress="65" bgcolor="#3a72a3"/>
                        </div>
                        <div className="item">
                            <span>Scss</span>
                            <ProgressBar progress="40" bgcolor="#c96195"/>
                        </div>
                        <div className="item">
                            <span>Js</span>
                            <ProgressBar progress="50" bgcolor="#efd81d"/>
                        </div>
                        <div className="item">
                            <span>Django & DRF</span>
                            <ProgressBar progress="40" bgcolor="#0b4931"/>
                        </div>
                        <div className="item">
                            <span>React</span>
                            <ProgressBar progress="55" bgcolor="#5dd4f2"/>
                        </div>
                        <div className="item">
                            <span>Vue & Nuxt</span>
                            <ProgressBar progress="30" bgcolor="#00bf8a"/>
                        </div>
                        <div className="item">
                            <span>Linux</span>
                            <ProgressBar progress="20" bgcolor="#d64613"/>
                        </div>
                        <div className="item">
                            <span>Axios</span>
                            <ProgressBar progress="70" bgcolor="#813f90"/>
                        </div>
                        <div className="item">
                            <span>Git</span>
                            <ProgressBar progress="30" bgcolor="#e84d31"/>
                        </div>
                    </div>
                </div>
                <div className="resume-parts projects">
                    <div className="title">
                        <p>
                            Projects
                        </p>
                        <img src={SiteIcon} alt="site-icon"/>
                    </div>
                    <div className="project-list">
                        <div className="project">
                            <div className="project-title">
                                <strong>
                                    Daneshkade Online
                                </strong>
                            </div>
                            <div className="project-description">
                                <p>
                                    I developed this site with Nuxt and it has 4 panels that I worked on for three months!
                                    <br/>
                                    See On
                                    <a target="_blank" rel="noopener noreferrer" href="https://DaneshkadeOnline.ir">
                                       &nbsp; DaneshkadeOnline.ir
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="project">
                            <div className="project-title">
                                <strong>
                                    Compiler design lesson project
                                </strong>
                            </div>
                            <div className="project-description">
                                <p>
                                    The final project of the compiler design lesson, you can look at code in the
                                    <br/>
                                    See On
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Khanzadeh-AH/compiler_project2">
                                        &nbsp; Github
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Resume;
