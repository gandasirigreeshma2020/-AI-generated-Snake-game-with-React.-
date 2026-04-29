/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import MusicPlayer from './components/MusicPlayer';
import SnakeGame from './components/SnakeGame';

export default function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="min-h-screen bg-black text-cyan-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 uppercase tracking-widest">
        Neon Beats Snake
      </h1>

      <div className="flex gap-8 items-start w-full max-w-4xl">
        <SnakeGame onScoreUpdate={setScore} />
        <div className="flex flex-col gap-4 flex-1">
          <MusicPlayer />
          <div className="bg-gray-900 border border-fuchsia-500 rounded-lg p-6 shadow-[0_0_15px_rgba(217,70,239,0.5)]">
            <h2 className="text-xl font-bold mb-2 font-mono text-fuchsia-400">Score</h2>
            <p className="text-4xl font-bold font-mono">{score}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
