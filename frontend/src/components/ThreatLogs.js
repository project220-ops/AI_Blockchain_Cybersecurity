import React, { useState, useEffect } from 'react';
import axios from '../utils/api';

const ThreatLogs = () => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        // Fetch threat logs from the backend
        axios.get('/api/threats')
            .then(response => setLogs(response.data))
            .catch(error => console.error('Error fetching threat logs:', error));
    }, []);

    return (
        <div>
            <h1>Threat Logs</h1>
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>{log.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default ThreatLogs;
