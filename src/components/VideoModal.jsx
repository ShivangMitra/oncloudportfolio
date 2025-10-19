import React from "react";

export default function VideoModal({ videoSrc, onClose }) {
  if (!videoSrc) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
      {/* Video container 50% of viewport */}
      <div className="w-1/2 max-w-[90vw] max-h-[80vh]">
        <video
          key={videoSrc}
          src={videoSrc}
          controls
          autoPlay
          playsInline
          className="w-full h-full object-contain rounded-lg shadow-2xl"
        />
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white font-bold text-2xl"
      >
        ×
      </button>
    </div>
  );
}
