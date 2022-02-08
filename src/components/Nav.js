import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
            <nav>
                <Link to='/'>Home</Link>
                <Link to='youtube'>Youtube</Link>
                <Link to='favorites'>Favorites</Link>
                <Link to='materials'>Materials</Link>
                <Link to='videoPlayer'>VideoPlayer</Link>
            </nav>
);
}

export default Nav;