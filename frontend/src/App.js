import "./App.css";
import { useState, useEffect } from "react";
import { Skeleton } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  const [data, setData] = useState([]);
  const [att, setAtt] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(
        "https://attendancebackend.onrender.com/data"
      );
      const json = await response.json();
      if (response.ok) {
        setData(json);
        const dataArray = Object.values(json[0].att[0]);
        dataArray.pop();
        setAtt(dataArray);
      }
    };
    fetchdata();
  }, []);
  console.log(data);
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen justify-center items-center bg-gradient-to-r from-teal-200 to-lime-200">
        {att.map((item, index) => {
          return (
            <div
              key={index}
              className="block max-w-7xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 my-4"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.Course || <Skeleton animation="wave" />}
              </h5>
              <p className="font-normal text-yellow-700 dark:text-yellow-400">
                Conducted: {item.Conducted}
              </p>
              <p className="font-normal text-green-700 dark:text-green-400">
                Attended: {item.Attended}
              </p>
              <p className="font-normal text-blue-700 dark:text-blue-400">
                Attendance: {item.Attendance}%
              </p>
              <p className="font-normal text-red-700 dark:text-red-400">
                Required: {(0.75 * item.Conducted - item.Attended) / 0.25}
              </p>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
export default App;
