import React from "react";
import "./styles/About.css";

const About = () => {
    return (
        <section className="about-page">
            <div className="about-hero">
                <div className="about-hero-card">
                    <p className="about-kicker">Zdart Gallery</p>
                    <h1>About Me</h1>
                    <p className="about-lead">
                        I create sketches because I love it. This gift was inherited from my
                        father’s talent, and I want to continue no matter the cost. I share my work
                        so people can see what I have created and what I’ve experienced through those
                        artworks — every artwork has pieces of information inside it.
                    </p>
                    <div className="about-actions">
                        <a
                            className="about-icon-button"
                            href="https://www.instagram.com/_yuzuhisa_11/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6zm5.2-.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z" />
                            </svg>
                        </a>
                        <a
                            className="about-icon-button"
                            href="https://t.me/yuzuking11"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Telegram"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M21.5 3.3a1.2 1.2 0 0 0-1.3-.2L3.2 9.6a1.2 1.2 0 0 0 .1 2.3l4.2 1.3 1.6 5.4a1.2 1.2 0 0 0 2 .5l2.6-2.6 4.9 3.6a1.2 1.2 0 0 0 1.9-.7l2.6-14a1.2 1.2 0 0 0-.6-1.1zM9.2 13.3l8.9-6.2-6.9 7.6-.2 2.3-1.1-3.7-3-.9 2.3-1.1z" />
                            </svg>
                        </a>
                    </div>
                    <div className="about-credit">
                        <span>Designed & Developed by Ramdinmawia Zadeng</span>
                        <a
                            className="about-icon-button"
                            href="https://t.me/yuzuking11"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Telegram"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M21.5 3.3a1.2 1.2 0 0 0-1.3-.2L3.2 9.6a1.2 1.2 0 0 0 .1 2.3l4.2 1.3 1.6 5.4a1.2 1.2 0 0 0 2 .5l2.6-2.6 4.9 3.6a1.2 1.2 0 0 0 1.9-.7l2.6-14a1.2 1.2 0 0 0-.6-1.1zM9.2 13.3l8.9-6.2-6.9 7.6-.2 2.3-1.1-3.7-3-.9 2.3-1.1z" />
                            </svg>
                        </a>
                        <a
                            className="about-icon-button"
                            href="https://www.instagram.com/_yuzuhisa_11/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6zm5.2-.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;