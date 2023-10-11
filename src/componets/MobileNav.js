import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { mob_navbar } from "../assets/data";

const MobileNav = ({ open, setOpen }) => {

  const [nav, setNav] = useState(false);
  console.log("----->", open);
  const navHandler = () => {
    setNav(!nav);
    setOpen(false);
  };

  return (
    <div>
      {!nav&&<GiHamburgerMenu
        className="md:hidden absolute top-[65px] right-10 text-white text-[25px]"
        onClick={navHandler}
      />}
     {nav && <RxCross1
        className="md:hidden absolute top-[65px] font-[800px] right-10 text-white text-[25px]"
        onClick={navHandler}
      />}

      {/* <div className="md:hidden flex flex-row text-[25px] justify-center items-center flex font-poppins mb-2">
        
      </div> */}

      {nav && (
        <div className="md:hidden w-full fixed mt-[55px] text-[18px] flex flex-col h-screen bg-[#1A1A1A] text-white items-center z-20 ">
          {mob_navbar.map((item) => (
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
      )}
    </div>
  );
};

export default MobileNav;
