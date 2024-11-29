import React, { useState, useEffect } from 'react';
import axios from '../utils/api';

const Dashboard = () => {
    const [threats, setThreats] = useState([]);

    useEffect(() => {
        axios.get('/api/threats').then(response => {
            setThreats(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Threat Dashboard</h1>
            <ul>
                {threats.map((threat, index) => (
                    <li key={index}>{threat.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
