import React, { useState } from 'react';
import axios from '../utils/api';

const SecureStorage = () => {
    const [key, setKey] = useState('');
    const [value, setValue] = useState('');
    const [retrievedData, setRetrievedData] = useState(null);

    const handleStoreData = () => {
        axios.post('/api/secure-data', { key, value })
            .then(response => {
                alert('Data stored successfully!');
                setKey('');
                setValue('');
            })
            .catch(error => console.error('Error storing data:', error));
    };

    const handleRetrieveData = () => {
        axios.get(`/api/secure-data/${key}`)
            .then(response => setRetrievedData(response.data))
            .catch(error => console.error('Error retrieving data:', error));
    };

    return (
        <div>
            <h1>Secure Data Storage</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter Key"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter Value"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button onClick={handleStoreData}>Store Data</button>
            </div>
            <div>
                <button onClick={handleRetrieveData}>Retrieve Data</button>
                {retrievedData && (
                    <div>
                        <p><strong>Key:</strong> {retrievedData.key}</p>
                        <p><strong>Value:</strong> {retrievedData.value}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SecureStorage;
