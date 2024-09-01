/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

export function Sidebar({
  check = "false",
  items = [""],
  options = [""],
  link = "/",
}) {
    console.log(items)
  return (
    <div
      className={`nav bg-[#202123] min-h-[100vh] p-1 flex fixed top-0 sm:w-[80%] md:w-[40%] lg:w-[20%] ${
        check ? "left-[-10000px]" : "left-0"
      } ${check ? "" : "lg:relative"}`}
    >
      <div className="flex flex-col justify-between w-[100%]">
        <div>
          {items.map((item, index) => (
            <div key={index}>
              <Link to={`${link}`}>
                <div
                  className={`new-chat text-[13px] border border-solid border-[${item.borerColor}] text-[#FFFFFF] rounded flex items-center gap-2 px-3 mt-2 py-2 cursor-pointer bg-[${item.backgroundColor}]`}
                >
                  <div className="icon-plus">{item.icon}</div>
                  <span>{item.text}</span>
                  <div className="icon-right flex items-center gap-2">
                    {item.icons.map((iconComponent, i) => (
                      <React.Fragment key={i}>{iconComponent}</React.Fragment>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="options mt-1 border-t border-[#444654]">
          {options.map((option, index) => (
            <div
              key={index}
              className="icons-options text-[13px] flex items-center text-[#FFFFFF] gap-2 px-2 py-3 cursor-pointer"
            >
              <div className="icon">{option.icon}</div>
              {option.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
