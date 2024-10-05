import React, { useEffect, useState } from 'react';

const LandingPage = () => {
    const [loading, setLoading] = useState(true);
    const [audio] = useState(new Audio('/tudum.mp3'));

    useEffect(() => {
        // Simulate loading duration
        const timer = setTimeout(() => {
            setLoading(false);
            // Play sound after loading is done
            audio.play().catch((error) => console.error('Error playing sound:', error));
        }, 2000); // Adjust the delay as needed

        return () => clearTimeout(timer);
    }, [audio]);

    return (
        <div className="min-h-screen flex flex-col">
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

                body {
                    background-color: #000;
                    font-family: 'Helvetica Neue', Arial, sans-serif;
                    overflow-x: hidden;
                }

                .logo {
                    color: #E50914;
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: 4rem;
                    opacity: 0;
                    transform: scale(0.8);
                    animation: fadeInScale 1.5s forwards;
                }

                .hero {
                    background: url("/img1.png") no-repeat center center;
                    background-size: cover;
                    position: relative;
                    overflow: hidden;
                    animation: fadeIn 1.5s ease-in-out;
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

                .fade-in {
                    opacity: 0;
                    transform: translateY(30px);
                    animation: slideUpFadeIn 1s forwards;
                }

                .fade-in:nth-child(1) { animation-delay: 0.3s; }
                .fade-in:nth-child(2) { animation-delay: 0.6s; }
                .fade-in:nth-child(3) { animation-delay: 0.9s; }

                .cta-button {
                    background-color: #E50914;
                    transition: background-color 0.3s ease, transform 0.3s ease;
                }

                .cta-button:hover {
                    background-color: #f40612;
                    transform: scale(1.05);
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

                @keyframes slideUpFadeIn {
                    0% {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .loading-screen {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: black;
                    color: #E50914;
                    font-size: 3rem;
                    z-index: 9999;
                    animation: fadeOut 1s forwards;
                    opacity: 1;
                }

                @keyframes fadeOut {
                    to {
                        opacity: 0;
                        visibility: hidden;
                    }
                }
                `}
            </style>

            {loading ? (
                <div className="loading-screen">
                    Loading...
                </div>
            ) : (
                <>
                    <header className="px-4 py-6 absolute w-full z-10">
                        <h1 className="logo">NETFLEX</h1>
                    </header>
                    
                    <main className="flex-grow hero flex items-center justify-center text-center text-white">
                        <div className="overlay"></div>
                        <div className="max-w-3xl mx-auto px-4 relative z-20">
                            <h2 className="text-5xl font-bold mb-4 fade-in">
                                Find the right <span style={{ color: "#E50914" }}>Net</span>work and <br />
                                <span style={{ color: "#E50914" }}>Flex</span> those muscles
                            </h2>
                            <h3 className="text-2xl mb-6 fade-in">Join pickup games. Meet athletes. Play anywhere.</h3>
                            <p className="text-xl mb-6 fade-in">Ready to play? Enter your email to create or restart your membership.</p>
                            <button onClick={() => window.location.href='/Signup'} className="cta-button text-xl px-12 py-4 rounded fade-in">
                                Login / Signup
                            </button>
                        </div>
                    </main>
                </>
            )}
        </div>
    );
};

export default LandingPage;
