import React from "react";
import { FaMusic, FaVolumeMute } from "react-icons/fa";

const MusicButton = ({ isPlaying, isMuted, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-4 rounded-full text-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
    >
      {isPlaying ? (
        isMuted ? (
          <FaVolumeMute size={15} />
        ) : (
          <FaMusic size={15} className="animate-spin-slow" />
        )
      ) : (
        <FaMusic size={15} />
      )}
    </button>
  );
};

export default MusicButton;
