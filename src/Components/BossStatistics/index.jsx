import { GuildContext } from "Contexts/GuildContext"
import { FiltersContext } from "Contexts/FiltersContext"

import NetworkService from "Services/NetworkService"
import FilterService from "Services/FilterService"

import BossChart from 'Components/BossChart'

import styles from './styles.module.scss'

import { useContext, useEffect, useState } from "react"

const BossStatistics = () => {
  const { guild } = useContext(GuildContext)
  const { wipes: wipesFilter, bosses: bossFilters } = useContext(FiltersContext)
  const [bosses, setBosses] = useState([])
  const [activeBosses, setActiveBosses] = useState([])

  useEffect(() => {
    if (!guild || !guild.id) return
    NetworkService.get('reports', guild.id).then(data => {
      setBosses(data)
    })
  }, [guild])

  useEffect(() => {
    setActiveBosses(
      bosses.filter(boss => {
        return bossFilters.includes(boss.id)
      })
    )
  }, [bossFilters, bosses])

  return (
    <div className={styles.container}>
      {bosses.map(boss => {
        return (
          <div>
            <h2>{boss.name}</h2>
            <BossChart fights={FilterService.applyWipeFilters(wipesFilter, boss.fights)}/>
          </div>
        )
      })}

      {activeBosses.length === 0 && <h1>No reports found/selected</h1>}
    </div>
  )
}

export default BossStatistics