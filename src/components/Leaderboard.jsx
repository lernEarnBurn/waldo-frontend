import { useEffect, useState } from 'react';
import { ArrowBigLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';

export function Leaderboard() {
  const navigate = useNavigate();

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
  };

  const localStoragePlayer = JSON.parse(localStorage.getItem('player'));

  const initialLeaderboard = Array.from({ length: 14 }, (_, index) => ({
    id: uuidv4(),
    name: `Player${index + 1}`,
    totalSeconds: Math.floor(Math.random() * 50) + 1,
  }));

  if (localStoragePlayer) {
    initialLeaderboard.push(localStoragePlayer);
  }

  const [leaderboard, setLeaderboard] = useState(initialLeaderboard);

  useEffect(() => {
    const sortedLeaderboard = [...leaderboard].sort(
      (a, b) => a.totalSeconds - b.totalSeconds
    );

    setLeaderboard(sortedLeaderboard);
  }, [leaderboard]);

  return (
    <section className="flex gap-2 flex-col items-center justify-center">
      <div className="flex gap-56 mt-9">
        <h1 className="relative left-5 text-2xl header-clr">Leaders</h1>
        <h1 className="text-2xl header-clr">Seconds</h1>
      </div>
      <div className=" rounded-lg border-red-400 border-2">
        {leaderboard.map((item, index) => (
          <div
            key={index}
            className={`flex justify-between py-1 px-10 w-[30vw] ${index > 0 ? 'border-t-2 border-red-400' : ''}`}
          >
            <p className="text-xl ml-3">{item.name}</p>
            <p className="text-xl mr-6">{item.totalSeconds}</p>
          </div>
        ))}
      </div>
      <motion.button
        className="rounded-lg game-button back-pos w-16 h-13 grid place-items-center"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="rest"
        initial="rest"
        onClick={() => {
          navigate('/waldo-frontend/main-menu');
        }}
      >
        <ArrowBigLeft height={45} width={60} />
      </motion.button>
    </section>
  );
}
