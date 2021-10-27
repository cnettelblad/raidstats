import React, {useEffect, useState} from 'react'
import axios from 'axios'
import BossStatistics from './Components/BossStatistics'
import ServerSelector from './Components/GuildSelector'

const App = () => {
  const [data, setData] = useState(null)
  
  const SSC = [
    'Hydross the Unstable',
    'The Lurker Below',
    'Leotheras the Blind',
    'Fathom-Lord Karathress',
    'Morogrim Tidewalker',
    'Lady Vashj'
  ]

  const TK = [
    'Al\'ar',
    'Void Reaver',
    'High Astromancer Solarian',
    'Kael\'thas Sunstrider'
  ]

  useEffect(() => {
    axios.get('http://localhost:8080/').then(res => {
      setData(res.data)
    }).catch(error => console.log(error))
  }, [])

  return (
    <div className="App" style={{display: 'flex', justifyContent: 'space-between', maxWidth: '1500px', margin: '0 auto'}}>
      <ServerSelector />
      <div key="ssc">
        <h2>Serpentshrine Cavern</h2>  
        {data && SSC.map(bossName => {
          return <BossStatistics bossName={bossName} fights={data[bossName]} />
        })}
      </div>
      <div key="tk">
        <h2>Tempest Keep</h2>
        {data && TK.map(bossName => {
          return <BossStatistics bossName={bossName} fights={data[bossName]} />
        })}
      </div>
    </div>
  );
}

export default App;
