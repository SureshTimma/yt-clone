import React from "react";

const Sidebar = () => {
  return (
    <div className="text-white flex flex-col bg-[#0F0F0F] h-screen w-60">
      <ul className="space-y-4 m-4">
        <li className="">🏠 Home</li>
        <li>⚡ Shorts</li>
        <li>📺 Subscriptions</li>
      </ul>
      <hr />
    </div>
  );
};

export default Sidebar;
