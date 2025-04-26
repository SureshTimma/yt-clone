import React from "react";

const Sidebar = () => {
  return (
    <div className="text-white flex flex-col bg-[#0F0F0F] h-screen w-60 overflow-auto">
      <ul className="space-y-4 m-4">
        <li className="bg-[#272727] rounded-lg p-2">🏠 Home</li>
        <li>⚡ Shorts</li>
        <li>📺 Subscriptions</li>
      </ul>
      <hr />

      <h1 className="ml-6 mt-4">Categories</h1>
      <ul className="space-y-4 m-4 p-2">
        <li>All</li>
        <li>Comedy</li>
        <li>Action</li>
        <li>Sports</li>
        <li>Music</li>
        <li>Technology</li>
        <li>Education</li>
        <li>Entertainment</li>
        <li>News</li>
      </ul>
    </div>
  );
};

export default Sidebar;
