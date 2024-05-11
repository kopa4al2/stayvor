import React from 'react';

import './header-styles.css';

function HeaderLayout(props) {
    return (
        <div className="wrapper">
            <ul className="header">
                <li className="header-item">
                    <a href="/"> Home</a>
                </li>
                <li className="header-item">
                    <a href="/shop">Shop</a>
                </li>
                <li className="header-item">
                    <a href="/contacts">Contacts</a>
                </li>
            </ul>
            <div className="content">
                {props.children}
            </div>
        </div>
    );
}

export default HeaderLayout;