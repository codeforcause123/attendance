import "./App.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(
        "https://attendancebackend.onrender.com/data"
      );
      const json = await response.json();
      if (response.ok) {
        setData(json);
      }
    };
    fetchdata();
  }, []);
  console.log(data);
  return (
    <div className="flex flex-row min-h-screen justify-center items-center">
      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled elevation buttons"
      >
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
