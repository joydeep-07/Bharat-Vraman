import React from "react";
import { FaMusic, FaVolumeMute } from "react-icons/fa";

const MusicButton = ({ isPlaying, isMuted, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="md:p-4 p-3 bg-amber-500/20 rounded-full text-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
    >
      {isPlaying ? (
        isMuted ? (
          <FaVolumeMute size={14} />
        ) : (
          <FaMusic size={14}/>
        )
      ) : (
        <FaMusic size={14} />
      )}
    </button>
  );
};

export default MusicButton;