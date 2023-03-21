import "./App.css";
import { useState, useEffect } from "react";
import { Skeleton } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  const [att, setAtt] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(
        "https://attendancebackend.onrender.com/data"
      );
      const json = await response.json();
      if (response.ok) {
        const dataArray = Object.values(json[0].att[0]);
        dataArray.pop();
        setAtt(dataArray);
      }
    };
    fetchdata();
  }, []);
  return (
    <div className="bg-black">
      <Header />
      <div className="justify-center bg-gradient-to-r from-teal-200 to-lime-200 px-40 py-4">
        {att.map((item, index) => {
          return (
            <div className="w-full mx-8 my-8" key={index}>
              <div className="xt-card rounded-2xl text-gray-900 xt-links-default bg-stone-100 my-4">
                <div className="p-7 sm:p-9 text-base">
                  <div className="text-3xl pb-2 font-semibold">{item.Course || <Skeleton animation="wave"/>}</div>
                  <div className="pl-2">
                    <p className="text-orange-600 text-xl">Conducted: {item.Conducted}</p>
                    <p className="text-green-600 text-xl">Attended: {item.Attended}</p>
                    <p className="text-blue-600 text-xl">Attendance: {item.Attendance}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
export default App;
