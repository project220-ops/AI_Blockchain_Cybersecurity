import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import ThreatLogs from './components/ThreatLogs';
import SecureStorage from './components/SecureStorage';

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/threat-logs" element={<ThreatLogs />} />
                    <Route path="/secure-storage" element={<SecureStorage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
