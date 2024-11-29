import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/threat-logs">Threat Logs</Link></li>
                <li><Link to="/secure-storage">Secure Storage</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
