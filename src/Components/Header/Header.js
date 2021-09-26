import React from 'react';
import '../Header/Header.css'

const Header = () => {
    return (
        <div className="header">
            {/* header  */}
            <h1 className="fw-bold">Worlds Best Movies</h1>
            <hr />
            <h3 className="">Total Budget: 100 Million</h3>
        </div>
    );
};

export default Header;