import React, { useState, useRef } from "react";
import MusicButton from "./MusicButton";
import CircularText from "./CircularText";

const MusicPlayer = () => {
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef(null);

  const handleClick = () => {
    if (isPlaying) {
      const newMute = !isMuted;
      audioRef.current.muted = newMute;
      setIsMuted(newMute);
    } else {
      setOpen(true);
    }
  };

  const handleYes = () => {
    audioRef.current.play();
    setIsPlaying(true);
    setIsMuted(false);
    setOpen(false);
  };

  return (
    <>
      {/* 🔊 AUDIO */}
      <audio ref={audioRef} src="/Chanakya.mp3" loop />

      {/* 🌑 MODAL */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-neutral-900 text-black dark:text-white p-8 rounded-2xl shadow-2xl w-[90%] max-w-md text-center">
            <h2 className="text-xl font-semibold mb-4">
              Do you want to continue with music?
            </h2>

            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={handleYes}
                className="px-5 py-2 rounded-full bg-green-500 text-white"
              >
                Yes
              </button>

              <button
                onClick={() => setOpen(false)}
                className="px-5 py-2 rounded-full bg-red-500 text-white"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CIRCULAR TEXT WITH CENTER BUTTON */}
      <CircularText
        text="♪ CHANAKYA • BY RISHAB SHARMA "
        centerContent={
          <MusicButton
            isPlaying={isPlaying}
            isMuted={isMuted}
            onClick={handleClick}
          />
        }
      />
    </>
  );
};

export default MusicPlayer;
