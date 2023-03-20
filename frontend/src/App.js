import "./App.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState, useEffect } from "react";
import { Skeleton } from "@mui/material";
function App() {
  const [data, setData] = useState([]);
  const [att,Setatt] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(
        "https://attendancebackend.onrender.com/data"
      );
      const json = await response.json();
      if (response.ok) {
        setData(json);
        const dataArray = Object.values(json[0].att[0]);
        Setatt(dataArray);
      }
    };
    fetchdata();
  }, []);
  console.log(data);
  return (
    <div className="flex flex-row min-h-screen justify-center items-center">
      {att.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.Course}</h2>
            <p>Conducted {item.Conducted}</p>
            <p>Attended {item.Attended}</p>
            <p>Attendance {item.Attendance}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
