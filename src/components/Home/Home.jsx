// CardComponent.js
import React from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom"

const Home = () => {
    let navigate = useNavigate(); 
    const navigateEditor = () => {
     
        navigate('/editor');
    };
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-background">
                
                </div>
                <div className="card-content">
                    <div className="icon">
                        <FontAwesomeIcon className='icon' icon={faFilePen} bounce />
                    </div>
                    <div className="card-overlay">
                        <p className='content1'>Hello.</p>
                        <p className='content2'>Want a simple and easy text editor for quick work along with a markdown file for it?</p>
                        <button onClick={navigateEditor}>Get Started</button>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home
