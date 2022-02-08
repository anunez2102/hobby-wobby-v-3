import React from 'react';
import { Link } from 'react-router-dom'

function Nav () {
    const navStyle = {
        color: 'white'
    };
    return (
        <>
            <nav>
                <h2>Logo</h2>
                <ul className='nav-links'></ul>
                <Link to="/">Home</Link>
                <Link to="youtube">Youtube</Link>
                <Link to="favorites">Favorites</Link>
                <Link style={navStyle} to="materials">Materials</Link>
                <Link to="videoPlayer">VideoPlayer</Link>
            </nav>
            </>
);
}

export default Nav;