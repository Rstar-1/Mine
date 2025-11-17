import React from "react";
import { NavLink } from "react-router-dom";
import NavData from "../api/Navdata.json";

const Sidebar = () => {
  const [openIndex, setOpenIndex] = React.useState(null);
  const toggleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="h-100 overflow-auto bg-white b-shadow bordr">
      <div className="p-10">
        <h1 className="head-text text-primary">Fund Manager</h1>
        <p className="small-text text-gray">What Are you Do!</p>
      </div>
      <div className="py-14 px-10">
        <div className="grid-cols-1 gap-4">
          {NavData.filter((item) => item.status).map((item, index) => (
            <div key={index}>
              <NavLink
                to={item.category?.length > 0 ? null : item?.route}
                className={({ isActive }) =>
                  `flex justify-between items-center cursor-pointer px-8 py-${
                    isActive ? "10" : "9"
                  } ${
                    isActive && !item.category?.length
                      ? "bg-forth"
                      : "bg-white"
                  }`
                }
                onClick={() => toggleCollapse(index)}
              >
                <div className="flex items-center gap-6">
                  <span dangerouslySetInnerHTML={{ __html: item.icon }} />
                  <p className="text-gray para-text">{item.name}</p>
                </div>
                {item.category?.length > 0 && (
                  <>
                    {openIndex === index ? (
                      <svg
                        viewBox="0 0 24 24"
                        width="15"
                        height="15"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        className="flex text-gray"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        width="15"
                        height="15"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        className="flex text-gray"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    )}
                  </>
                )}
              </NavLink>
              {openIndex === index && item.category?.length > 0 && (
                <div className="grid-cols-1 gap-4 px-10 py-5">
                  {item.category
                    .filter((sub) => sub.status)
                    .map((sub, subIndex) => (
                      <NavLink
                        key={subIndex}
                        className={({ isActive }) =>
                          `flex items-center cursor-pointer gap-6 px-15 py-${
                            isActive ? "8 bg-forth rounded-5" : "6"
                          }`
                        }
                        to={sub?.route}
                      >
                        <span dangerouslySetInnerHTML={{ __html: sub.icon }} />
                        <p className="text-gray small-text">{sub.name}</p>
                      </NavLink>
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
