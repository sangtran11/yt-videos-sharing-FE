import React from "react";

const EmbedVideos = ({ videoId }) => {
  return (
    <div>
      {" "}
      <iframe
        width="300"
        height="250"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Youtube video"
      />
    </div>
  );
};

export default EmbedVideos;
