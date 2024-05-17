import React from 'react';

import './header-styles.css';

function HeaderLayout(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal; }) {
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