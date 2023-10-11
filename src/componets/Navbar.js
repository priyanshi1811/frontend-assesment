import React from "react";

const Navbar = () => {
  const navbar = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    {
      name: "Our Products",
      id: "product",
      child: [
        { name: "Product 1", id: "p1" },
        { name: "Product 2", id: "p2" },
        { name: "Product 3", id: "p3" },
        { name: "Product 4", id: "p4" },
      ],
    },
    { name: "Contact Us", id: "contact" },
  ];

  return (
    <div className="flex justify-between ml-20 text-[18px] mt-3 cursor-pointer font-syne font-[400] text-[#fff] w-[50%]">
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
