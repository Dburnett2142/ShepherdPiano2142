import React from 'react';
import './Header.css';
import Navigation from './Navigation';

function Header() {
    return (
        <header className="site-header full-width">
            <div className="header-content">
                <h1 className="site-title">Kamryn Shepherd Piano</h1>
            </div>
            <Navigation />
        </header>
    );
}

export default Header;