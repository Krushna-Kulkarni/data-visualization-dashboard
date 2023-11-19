import "./App.css";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import BarChart from "./components/BarChart";

function App() {
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const googleSheetUrl =
        "https://docs.google.com/spreadsheets/d/1l7GstWHc69HPV0irSdvoMIyHgtufUPKsbtCiNw7IKR0/export?format=csv";

      try {
        const response = await fetch(googleSheetUrl);
        const data = await response.text();

        // Use papaparse to parse CSV data
        Papa.parse(data, {
          header: true,
          // converting values to its data types - eg 8 - number
          dynamicTyping: true,
          complete: (results) => {
            // Set the array of objects in the component state
            setCsvData(results.data);
          },
          error: (error) => {
            console.error("Error parsing CSV:", error.message);
          },
        });
      } catch (error) {
        console.error("Error fetching data from Google Sheets:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <BarChart data={csvData} />
    </div>
  );
}

export default App;
