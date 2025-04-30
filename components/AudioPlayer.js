// components/AudioPlayer.jsx
import { forwardRef, useImperativeHandle, useRef } from "react";

const AudioPlayer = forwardRef((props, ref) => {
  const audioRef = useRef();

  useImperativeHandle(ref, () => ({
    play: () => {
      audioRef.current?.play();
    },
  }));

  return (
    <audio ref={audioRef} loop>
      <source src="/Backsound.mp3" type="audio/mpeg" />
    </audio>
  );
});

export default AudioPlayer;
