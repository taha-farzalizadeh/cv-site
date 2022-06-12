import React from 'react';
import "./styles/Contact.scss"
import ContactIcon from "../assets/icons/contact.png"
const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-info">
                <p className="contact-text">
                    Contact
                </p>
                <div className="contact-ways">
                    <h3 className="contact-ways-title">
                        Telegram:
                    </h3>
                    <a target="_blank" rel="noopener noreferrer" className="contact-ways-text" title="https://t.me/tahaaaaaaa1" href="https://t.me/tahaaaaaaa1">
                        @tahaaaaaaa1
                    </a>
                </div>
                <div className="contact-ways">
                    <h3 className="contact-ways-title">
                        Github:
                    </h3>
                    <a target="_blank" rel="noopener noreferrer" className="contact-ways-text" title="https://github.com/taha-farzalizadeh" href="https://github.com/taha-farzalizadeh">
                        taha-farzalizadeh
                    </a>
                </div>
                <div className="contact-ways">
                    <h3 className="contact-ways-title">
                        Email:
                    </h3>
                    <a target="_blank" rel="noopener noreferrer" className="contact-ways-text" title="mailto:tahaff79@gmail.com" href="mailto:tahaff79@gmail.com">
                        tahaff79@gmail.com
                    </a>
                </div>
                <div className="contact-ways">
                    <h3 className="contact-ways-title">
                        Instagram:
                    </h3>
                    <a target="_blank" rel="noopener noreferrer" className="contact-ways-text" title="https://www.instagram.com/taha._.ff/" href="https://www.instagram.com/taha._.ff/">
                        taha._.ff
                    </a>
                </div>
                <div className="contact-ways">
                    <h3 className="contact-ways-title">
                        WebSite:
                    </h3>
                    <a target="_blank" rel="noopener noreferrer" className="contact-ways-text" title="https://tf-dev.netlify.app" href="https://tf-dev.netlify.app">
                        tf-dev.netlify.app
                    </a>
                </div>
                <div className="contact-ways">
                    <h3 className="contact-ways-title">
                        Quera:
                    </h3>
                    <a target="_blank" rel="noopener noreferrer" className="contact-ways-text" title="https://quera.org/profile/TahaFarzalizadeh" href="https://quera.org/profile/TahaFarzalizadeh">
                        TahaFarzalizadeh
                    </a>
                </div>
            </div>
            <div className="contact-icon">
                <img src={ContactIcon} alt="contact icon"/>
            </div>
        </div>
    );
};

export default Contact;
