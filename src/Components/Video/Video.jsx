import React from "react";

const Video = (props) => {
  let { title, thumbnail, channel, views, uploadDate } = props;

  return (
    <div>
      <img className="rounded-lg" src={thumbnail} alt={title} />
      <h1 className="w-75">{title}</h1>
      <p>
        {channel} • {views} • {uploadDate}
      </p>
    </div>
  );
};

export default Video;
