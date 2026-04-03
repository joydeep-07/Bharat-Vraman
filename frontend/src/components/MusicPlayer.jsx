import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { FaMusic, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const MusicPlayer = () => {
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const dialogRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (open) {
      gsap.fromTo(
        dialogRef.current,
        { scale: 0.6, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "power3.out" },
      );
    }
  }, [open]);

  
  const handleYes = () => {
    audioRef.current.play();
    setIsPlaying(true);
    setIsMuted(false);
    setOpen(false);
  };

  
  const handleNo = () => {
    setOpen(false);
  };

  
  const handleButtonClick = () => {
    if (isPlaying) {
      // toggle mute
      const newMute = !isMuted;
      audioRef.current.muted = newMute;
      setIsMuted(newMute);
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      {/* 🎵 Floating Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={handleButtonClick}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-white text-xl shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center"
        >
          {isPlaying ? (
            isMuted ? (
              <FaVolumeMute size={15} />
            ) : (
              <FaMusic
                size={15}
                className={isPlaying ? "animate-spin-slow" : ""}
              />
            )
          ) : (
            <FaMusic
              size={15}
              className={isPlaying ? "animate-spin-slow" : ""}
            />
          )}
        </button>
      </div>
      {/* 🔊 Audio */}
      <audio ref={audioRef} src="/Chanakya.mp3" loop />

      {/* 🌑 Dialog */}
      {open && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div
            ref={dialogRef}
            className="bg-white dark:bg-neutral-900 text-black dark:text-white p-8 rounded-2xl shadow-2xl w-[90%] max-w-md text-center"
          >
            <h2 className="text-xl font-semibold mb-4">
              Do you want to continue with music?
            </h2>

            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={handleYes}
                className="px-5 py-2 rounded-full bg-green-500 text-white hover:scale-105 transition"
              >
                Yes
              </button>

              <button
                onClick={handleNo}
                className="px-5 py-2 rounded-full bg-red-500 text-white hover:scale-105 transition"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MusicPlayer;
