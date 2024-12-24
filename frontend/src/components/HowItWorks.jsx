import React, { useState } from "react";
import "../styles/howItWorks.scss";
import axios from "axios";

const Report = () => {
  const [logs, setLogs] = useState([]);
  const [showReport, setShowReport] = useState(false);

  const fetchReport = async () => {
    try {
      const response = await axios.get("http://localhost:5000/report", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setLogs(response.data);
      setShowReport(true);
    } catch (error) {
      console.error("Error fetching report:", error.response?.data || error.message);
      alert("Unable to fetch the report. Please try again later.");
    }
  };

  return (
    <section className="report">
      {/* Center Top Button */}
      <div className="header-button">
        <button onClick={fetchReport} className="fetch-report-button">
          Show Weather Search Report
        </button>
      </div>

      {/* Report Section */}
      {showReport && (
        <div className="report-logs">
          {logs.length === 0 ? (
            <p className="no-logs">No search logs available.</p>
          ) : (
            logs.map((log, index) => (
              <div className="card" key={index}>
                <div className="card-content">
                  <h3>{log.city}</h3>
                  <p>
                    <strong>User:</strong> {log.username}
                  </p>
                  <p>
                    <strong>Weather Data:</strong>{" "}
                    {typeof log.weather_data === "object" ? (
                      <pre>{JSON.stringify(log.weather_data, null, 2)}</pre>
                    ) : (
                      log.weather_data
                    )}
                  </p>
                  <p>
                    <strong>Timestamp:</strong>{" "}
                    {new Date(log.timestamp).toLocaleString()}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </section>
  );
};

export default Report;
