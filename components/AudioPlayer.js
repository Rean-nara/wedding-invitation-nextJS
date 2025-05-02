// components/AudioPlayer.jsx
"use client";
import { forwardRef, useImperativeHandle, useRef } from "react";

const AudioPlayer = forwardRef((props, ref) => {
  const audioRef = useRef();

  useImperativeHandle(ref, () => ({
    play: () => {
      const audio = audioRef.current;
      if (audio) {
        audio.muted = false; // pastikan tidak mute
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Autoplay diblokir browser, tunggu interaksi user");
          });
        }
      }
    },
  }));

  return (
    <audio ref={audioRef} loop>
      <source src="/Backsound.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
});

export default AudioPlayer;
