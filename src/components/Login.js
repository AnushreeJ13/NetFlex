import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Home from './Home';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('http://localhost:5001/Login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            console.log('Response Status:', response.status); // Log the response status
            console.log('Data:', data); // Log the returned data

            if (response.ok && data.message === 'Login successful!') {
                console.log('Login successful:', data);
                setIsLoggedIn(true);
                navigate('/Home');
            } else {
                setError(data.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An error occurred. Please try again.');
        } finally {
            setEmail(''); // Clear email input after submission
            setPassword(''); // Clear password input after submission
        }
    };

    // Render Home component if logged in
    if (isLoggedIn) {
        return <Home />;
    }

    return (
        <div className="min-h-screen flex flex-col hero-bg">
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

                .hero-bg {
                    background: url("/img2.png") no-repeat center center;
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

                .form-container {
                    position: relative;
                    z-index: 2;
                    max-width: 400px;
                    margin-left: 90px;
                    margin-top: 10%;
                    padding: 20px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    opacity: 0;
                    transform: translateY(30px);
                    animation: slideUpFadeIn 1s ease forwards 0.5s;
                }

                .input-field {
                    border: 1px solid #E50914;
                    background-color: transparent;
                    color: white;
                    padding: 12px;
                    margin-bottom: 15px;
                    border-radius: 4px;
                    transition: border-color 0.3s ease;
                }

                .input-field:focus {
                    border-color: #f40612;
                }

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
                `}
            </style>

            <div className="overlay"></div>

            <header className="px-4 py-6 absolute w-full z-10">
                <h1 className="logo">NETFLEX</h1>
            </header>

            <main className="flex-grow flex items-center justify-start text-center text-white">
                <div className="form-container">
                    <h2 className="text-3xl font-bold mb-4">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            className="input-field w-full"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            className="input-field w-full"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && <p className="text-red-500">{error}</p>}
                        <button type="submit" className="cta-button text-xl px-12 py-4 rounded w-full">
                            Submit
                        </button>
                    </form>
                    <p className="mt-4">
                        Don't have an account? 
                        <Link to="/Signup" className="text-red-500 hover:underline"> Sign Up</Link>
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Login;
