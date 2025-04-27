import React from "react";
import { videoData } from "../../data/videoData";
import Video from "../Video/Video";

const Feed = () => {
  return (
    <div className="h-screen overflow-auto w-full flex flex-wrap bg-[#0F0F0F] text-white justify-center items-center p-2">
      {videoData.map((i) => {
        return (
          <Video
            title={i.title}
            uploadDate={i.uploadDate}
            thumbnail={i.thumbnail}
          />
        );
      })}
    </div>
  );
};

export default Feed;
