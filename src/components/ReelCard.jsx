import React from "react";

export default function ReelCard({ reel }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-3">
      <div className="mb-2 font-medium text-center playwrite-de-sas">{reel.title}</div>
      <video
      style={{aspectRatio: '9:16', border: '5px solid orange'}}
        controls
        playsInline
        preload="metadata"
        poster={reel.poster || ""}
        className="w-full h-64"
        height={600}
      >
        <source src={reel.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
