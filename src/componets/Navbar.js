import React from "react";
import { navbar } from "../assets/data";
const Navbar = () => {


  return (
    <div className="hidden md:flex justify-between flex-row ml-20 text-[18px] mt-3 cursor-pointer font-syne font-[400] text-[#fff] w-[50%]">
      {navbar.map((item) => (
        <ul key={item.id}>
          <li>
            <a
              href={`#${item.id}`}
              className="text-white-600 hover:text-white-800"
            >
              {item.name}
            </a>
            {item.child && (
              <ul>
                {item.child.map((childItem) => (
                  <li key={childItem.id}>
                    <a
                      href={`#${childItem.id}`}
                      className="text-white-600 hover:text-white-800"
                    >
                      {childItem.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Navbar;
