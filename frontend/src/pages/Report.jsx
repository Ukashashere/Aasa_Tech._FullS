import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Report() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const fetchLogs = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/report`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setLogs(response.data);
            } catch (error) {
                alert('Unable to fetch report');
            }
        };
        fetchLogs();
    }, []);

    return (
        <div>
            <h1>Search Report</h1>
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>
                        {log.city} - {new Date(log.timestamp).toLocaleString()} - {JSON.stringify(log.weather_data)}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Report;
