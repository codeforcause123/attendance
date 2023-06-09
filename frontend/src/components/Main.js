import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Skeleton from "@mui/material/Skeleton";

export default function Main(props) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const n = 13;
  return (
    <div className="justify-center bg-gradient-to-b from-rose-500 to-indigo-700 sm:px-16 lg:px-48 py-4">
      {props.att.length
        ? props.att.map((item, index) => {
            return (
              <div className="sm:w-fit lg:w-full mx-8 my-8" key={index}>
                <div
                  className="xt-card rounded-2xl text-white xt-links-default bg-black my-4"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  <div className="p-3 sm:p-9 text-base">
                    <div
                      className="text-3xl pb-2 font-semibold"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      {item.Course || <Skeleton animation="wave" />}
                    </div>
                    <div className="pl-2">
                      <p
                        className="text-orange-600 text-xl"
                        style={{ fontFamily: "JetBrains Mono" }}
                      >
                        Conducted: {item.Conducted}
                      </p>
                      <p
                        className="text-green-600 text-xl"
                        style={{ fontFamily: "JetBrains Mono" }}
                      >
                        Attended: {item.Attended}
                      </p>
                      <p
                        className="text-blue-600 text-xl"
                        style={{ fontFamily: "JetBrains Mono" }}
                      >
                        Attendance: {item.Attendance} %
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : [...Array(n)].map((e, i) => (
            <>
              <Skeleton
                animation="wave"
                variant="rounded"
                height={120}
                key={i}
              />
              <br></br>
            </>
          ))}
    </div>
  );
}
