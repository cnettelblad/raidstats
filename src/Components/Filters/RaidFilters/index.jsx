import { FiltersContext } from "Contexts/FiltersContext"
import { useContext, useState } from "react"
import { useEffect } from "react/cjs/react.development"

import styles from './styles.module.scss'

const RaidFilters = ({raid}) => {

  const {bosses: bossFilter, updateFilters} = useContext(FiltersContext)
  const [expandRaid, setExpandRaid] = useState(false)
  const [raidIncluded, setRaidIncluded] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState(bossFilter)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    updateFilters('bosses', selectedFilters)
    setLoading(false)
  }, [selectedFilters, updateFilters])

  return (
    <div className={styles.container}>
      <h5 onClick={() => {setExpandRaid(!expandRaid)}}>{raid.name}</h5>
      {expandRaid && raid.bosses.map(boss => {
        var isChecked = selectedFilters.indexOf(boss.id) !== -1
        return (
          <div className={bossFilter.includes(boss.id) ? styles.included : styles.excluded}>
            <label>
              <input 
                type="checkbox"
                name={boss.slug}
                key={boss.id}
                id={boss.id}
                // checked={isChecked}
                onClick={ev => {
                  isChecked = !isChecked
                }}
              />
              {boss.name}
            </label>
          </div>
        )
      })}
    </div>
  )
}

export default RaidFilters