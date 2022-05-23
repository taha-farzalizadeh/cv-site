import React from 'react';
import './styles/Home.scss'
import myPic from "../assets/images/my-pic.jpg";


const Home = () => {
    return (
        <div className="home">
            <div className="my-pic">
                <img src={myPic} alt=""/>
            </div>
            <div className="about-me">
                <p className="hi">
                    Hello!
                </p>
                <p className="about-me-title">
                    I am Taha and its a little bit about me:
                </p>
                <p className="about-me-text">
                    Interested in computer and programming and gain more experience.I would like to learn new technology and languages, but now I am coding with React and learning more Django and coding with it.I have high learning power and good problem solving and algorithmic power
                </p>
            </div>
        </div>
    );
};

export default Home;
