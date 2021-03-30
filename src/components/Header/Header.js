import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>ONLINE COURSES</h1>
           <nav>
               <a href="/courses">All Courses</a>
               <a href="/business">Corporate E-learning</a>
               <a href="/dashboard">Dashboard Login</a>
            </nav>
        </div>
    );
};

export default Header;