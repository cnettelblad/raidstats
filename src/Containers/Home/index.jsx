import GuildSelector  from 'Components/GuildSelector' 
import BossStatistics from 'Components/BossStatistics'
import Filters        from 'Components/Filters'
import Sidebar        from 'Components/Sidebar'
import Content        from 'Components/Content'

import { GuildContext } from 'Contexts/GuildContext'

import styles from './styles.module.scss' 
import orc from 'assets/orc_01.png'
import { useContext, useEffect, useState } from 'react'

const Home = () => {
  const { guild } = useContext(GuildContext)
  const [showSelector, setShowSelector] = useState(true)

  useEffect(() => {
    setShowSelector(!guild)
  }, [guild])

  return (
    <div className={styles.container}>
      <Sidebar>
        {guild && guild.name && 
          <h2 
            style={{color: guild.faction.name === "Horde" ? '#8C1616' : '#004a93'}}
          >
            {`<${guild.name}>`}
            <sub>{guild.server.name} - {guild.server.region.slug}</sub>
          </h2>
        }
        {showSelector && <GuildSelector />}
        {!showSelector && <sub onClick={() => setShowSelector(true)}>Change guild</sub>}
        <Filters />
      </Sidebar>
      <Content>
      {guild ? <BossStatistics /> : <img alt="orc" src={orc} />}
      </Content>
    </div>
  );
}

export default Home