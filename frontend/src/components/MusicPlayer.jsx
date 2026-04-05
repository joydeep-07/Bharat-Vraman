import React, { useState, useRef, useEffect } from "react";
import MusicButton from "./MusicButton";
import CircularText from "./CircularText";
import { Music2 } from "lucide-react";
import CircleCursor from "./CircleCursor";

const MusicPlayer = () => {
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
    audioRef.current.volume = 0.2;
    audioRef.current.play();
    setIsPlaying(true);
    setIsMuted(false);
    setOpen(false);
  };

  return (
    <>
      {/* AUDIO */}
      <audio ref={audioRef} src="/Chanakya.mp3" loop />

      {/* MODAL (UPDATED DESIGN) */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="flex flex-col items-center bg-[var(--bg-main)] shadow-xl rounded-sm py-6 px-5 md:w-[460px] w-[370px] border border-[var(--border-light)]/40">
            {/* ICON */}
            <div className="flex items-center justify-center p-4 bg-[var(--accent-primary)]/10 border border-[var(--border-light)] rounded-full">
              <Music2 className="text-[var(--accent-primary)]" />
            </div>

            {/* TITLE */}
            <h2 className="text-[var(--text-main)] font-semibold mt-4 text-[2vh] text-center">
              Would you like to continue with music ?
            </h2>

            {/* DESCRIPTION */}
            <p className="text-sm text-[var(--text-secondary)] mt-2 text-center">
              You can mute/unmute anytime.
            </p>

            {/* BUTTONS */}
            <div className="flex items-center justify-center gap-4 mt-5 w-full">
              <button
                onClick={() => setOpen(false)}
                className="w-full cursor-pointer md:w-36 h-10 rounded-sm bg-neutral-800 text-[var(--bg-main)] font-medium text-sm hover:opacity-90 transition duration-200"
              >
                No
              </button>

              <button
                onClick={handleYes}
                className="w-full cursor-pointer md:w-36 h-10 rounded-sm text-white bg-green-600 font-medium text-sm hover:bg-green-700 transition duration-200"
              >
                Yes
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
