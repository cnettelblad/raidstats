import GuildSelector from 'Components/GuildSelector' 
import BossStatistics from 'Components/BossStatistics'
import Sidebar        from 'Components/Sidebar'

import styles from './styles.module.scss' 

const Home = () => {
  return (
    <div className={styles.container}>
      <Sidebar>
        <h2>Guild</h2>
        <GuildSelector />
      </Sidebar>
      <BossStatistics />
    </div>
  );
}

export default Home