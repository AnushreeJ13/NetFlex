import React, { useCallback, useEffect, useRef } from 'react';
import Navbar from './Navbar';

const Home = () => {
    const currentWordIndex = useRef(0); // Use useRef to persist the index across renders

    const typeWord = (word, callback) => {
        let i = 0;
        const typewriterElement = document.getElementById('typewriter');
        typewriterElement.textContent = '';

        const type = () => {
            if (i < word.length) {
                typewriterElement.textContent += word.charAt(i);
                i++;
                setTimeout(type, 100);
            } else {
                setTimeout(callback, 1500);
            }
        };
        type();
    };

    const eraseWord = (callback) => {
        const typewriterElement = document.getElementById('typewriter');
        let text = typewriterElement.textContent;

        const erase = () => {
            if (text.length > 0) {
                text = text.slice(0, -1);
                typewriterElement.textContent = text;
                setTimeout(erase, 50);
            } else {
                callback();
            }
        };
        setTimeout(erase, 100);
    };

    const typeWriterEffect = useCallback(() => {
        const words = ['Teammate', 'Opponent']; // Move words inside useCallback

        typeWord(words[currentWordIndex.current], () => {
            eraseWord(() => {
                currentWordIndex.current = (currentWordIndex.current + 1) % words.length; // Update useRef value
                typeWriterEffect(); // Recursively call the effect
            });
        });
    }, []); // No dependencies, as words are inside

    useEffect(() => {
        typeWriterEffect();
    }, [typeWriterEffect]);

    return (
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#000', overflowX: 'hidden' }}>
            <style>
            {`
                    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

                    .logo {
                        color: #E50914;
                        font-family: 'Bebas Neue', sans-serif;
                        font-size: 4rem;
                        opacity: 0;
                        transform: scale(0.8);
                        animation: fadeInScale 1.5s forwards;
                        margin: 0;
                    }

                    .hero-bg {
                        background: url("./i3.png") no-repeat center center;
                        background-size: cover;
                        position: relative;
                        height: 100vh;
                        overflow: hidden;
                    }

                    .overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.5);
                        z-index: 1;
                    }

                    .find-your {
                        font-size: 3rem;
                        font-weight: 300;
                        color: #ffffff;
                        margin-bottom: -0.5rem;
                        text-align: left;
                    }

                    .typewriter {
                        font-size: 6rem;
                        font-family: 'Bebas Neue', sans-serif;
                        color: #E50914;
                        white-space: nowrap;
                        overflow: hidden;
                        border-right: .15em solid #E50914;
                        animation: blink-caret .5s step-end infinite;
                        line-height: 1;
                    }

                    .content-wrapper {
                        position: absolute;
                        top: 30%;
                        left: 4rem;
                        transform: translateY(-50%);
                    }

                    .header-link {
                        color: white;
                        font-size: 1.2rem;
                        text-decoration: none;
                        position: relative;
                        cursor: pointer;
                        font-style: italic;
                    }

                    .header-link::after {
                        content: '';
                        position: absolute;
                        width: 100%;
                        height: 1px;
                        bottom: -2px;
                        left: 0;
                        background-color: white;
                        transform: scaleX(0);
                        transition: transform 0.3s ease-in-out;
                    }

                    .header-link:hover::after {
                        transform: scaleX(1);
                    }

                    .nav-links {
                        margin-left: auto;
                        padding-right: 10%;
                    }

                    @keyframes blink-caret {
                        from, to { border-color: transparent; }
                        50% { border-color: #E50914; }
                    }

                    @keyframes fadeInScale {
                        0% {
                            opacity: 0;
                            transform: scale(0.8);
                        }
                        100% {
                            opacity: 1;
                            transform: scale(1);
                        }
                    }
                `}
            </style>

            {/* Navbar Component */}
            <Navbar />

            <main className="flex-grow relative hero-bg">
                <div className="overlay"></div>
                <div className="content-wrapper">
                    <h2 className="find-your">Find Your</h2>
                    <div id="typewriter" className="typewriter"></div>
                </div>
            </main>
        </div>
    );
};

export default Home;
