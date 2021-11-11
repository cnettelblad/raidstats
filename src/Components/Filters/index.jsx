import RaidFilters from 'Components/Filters/RaidFilters'
import { FiltersContext } from "Contexts/FiltersContext"
import raids from 'assets/raids.json'
import { useContext } from 'react'

const Filters = () => {
  const { wipes, updateFilters } = useContext(FiltersContext)
  return (
    <div>
      <h3>Filters</h3>
      <h4>Raids</h4>
      { raids.map(raid => <RaidFilters raid={raid} />) }
      <h4>Misc</h4>
      <div>
        <label>
        <input type="checkbox" name="include-wipes" onChange={(ev) => {
          updateFilters('wipes', ev.target.checked)
        }} checked={wipes}/>
          Include Wipes
        </label>
      </div>
    </div>
  )
}

export default Filters