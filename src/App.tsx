import './styles/main.css'

import logoImag from './assets/logo-nlw-esports.svg';
import GamerBanner from './Components/GamerBanner';
import { CreateBanner } from './Components/CreateBanner';
import { useEffect, useState } from 'react';

interface GameProps {
  bannerUrl: string;
  id: string;
  title: string;
  _count: {
    ads: number
  }
}

function App() {
  const [games, setGames] = useState<GameProps[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(resp => resp.json())
      .then(data => { setGames(data) });
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20" >
      <img src={logoImag} alt="logo nlw esports" />
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => (
          <GamerBanner
            key={game.id}
            bannerUrl={game.bannerUrl}
            title={game.title}
            adsCount={game._count.ads}
          />
        ))}

      </div>

      <CreateBanner />

    </div>
  )
}

export default App
