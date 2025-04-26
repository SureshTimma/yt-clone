import React from "react";
import { categories, sidebarMenuItems } from "../../data/sidebarData";

const Sidebar = () => {
  return (
    <div className="text-white flex flex-col bg-[#0F0F0F] h-screen w-60 overflow-auto">
      <ul className="space-y-4 m-4">
        {sidebarMenuItems.map((i) => {
          return (
            <li className="ml-2 mb-2">
              {i.icon} {i.label}
            </li>
          ); // Added explicit return and key
        })}
      </ul>
      <hr />

      <ul>
        <h1 className="m-4">Categories</h1>
        {categories.map((i) => {
          return <li className="ml-6 mb-2">{i}</li>; // Added explicit return and key
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
