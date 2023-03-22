import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Skeleton } from "@mui/material";
export default function Main(props) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="justify-center bg-gradient-to-r from-teal-200 to-lime-200 sm:px-16 lg:px-48 py-4">
      {props.att.map((item, index) => {
        return (
          <div className="sm:w-fit lg:w-full mx-8 my-8" key={index}>
            <div
              className="xt-card rounded-2xl text-gray-900 xt-links-default bg-stone-100 my-4"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="p-3 sm:p-9 text-base">
                <div className="text-3xl pb-2 font-semibold">
                  {item.Course || <Skeleton animation="wave" />}
                </div>
                <div className="pl-2">
                  <p className="text-orange-600 text-xl">
                    Conducted: {item.Conducted}
                  </p>
                  <p className="text-green-600 text-xl">
                    Attended: {item.Attended}
                  </p>
                  <p className="text-blue-600 text-xl">
                    Attendance: {item.Attendance}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
