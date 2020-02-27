import React from 'react';
import { Link, withRouter } from 'react-router-dom';

/**
 * This func checks whether the current menu item is the page we are on
 * If we are on the same page, then the menu items text-color will change
 */
const isActive = (history, path) => {
    // comes from the browser itself
    if (history.location.pathname === path) {
        return { color: '#000' };
    }
    return { color: '#fff' };
};

/**
 * Creates a menu component that can be used on any page
 * destructures the history from the props
 */

const Menu = ({ history }) => {
    return (
        <nav id="menu-div">
            <ul className="nav nav-tabs bg-warning">
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, '/')}
                        to="/"
                    >
                        Home
                    </Link>
                </li>

                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, '/admin')}
                        to="/admin"
                    >
                        Admin Dashboard
                    </Link>
                </li>

                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, '/signout')}
                        to="/signout"
                    >
                        Sign Out
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default withRouter(Menu);
