import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack } from 'lucide-react';
import { MUSIC_TRACKS } from '../constants';

export default function MusicPlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentTrack = MUSIC_TRACKS[currentTrackIndex];

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, currentTrackIndex]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % MUSIC_TRACKS.length);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + MUSIC_TRACKS.length) % MUSIC_TRACKS.length);
  };

  return (
    <div className="bg-gray-900 border border-cyan-500 rounded-lg p-6 shadow-[0_0_15px_rgba(6,182,212,0.5)] text-cyan-400">
      <h2 className="text-xl font-bold mb-4 font-mono text-cyan-200 uppercase tracking-widest">Player</h2>
      <div className="mb-4">
        <p className="text-lg font-bold">{currentTrack.title}</p>
        <p className="text-sm text-gray-400">{currentTrack.artist}</p>
      </div>
      <audio ref={audioRef} src={currentTrack.src} onEnded={nextTrack} />
      <div className="flex justify-center items-center gap-4">
        <button onClick={prevTrack} className="hover:text-white"><SkipBack /></button>
        <button onClick={togglePlay} className="p-3 bg-cyan-900 rounded-full hover:bg-cyan-700">
          {isPlaying ? <Pause /> : <Play />}
        </button>
        <button onClick={nextTrack} className="hover:text-white"><SkipForward /></button>
      </div>
    </div>
  );
}
