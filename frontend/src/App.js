import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
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
      <Main att={att} />
      <Footer />
    </div>
  );
}
export default App;
