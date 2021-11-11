import { createContext, useState } from "react"

export const FiltersContext = createContext()

export const FiltersProvider = ({children}) => {
  // Enable SSC by default
  const defaultBosses = [730, 731, 732, 733]

  const [wipes, setWipes] = useState(true)
  const [bosses, setBosses] = useState(defaultBosses)

  const updateFilters = (field, data) => {
    switch(field) {
      case 'wipes':
        setWipes(data)
        break
      case 'bosses':
        setBosses(data)
        break
      default:
        throw new Error('Unknown filter')
    }

  }

  return <FiltersContext.Provider value={{wipes, bosses, updateFilters}}>{children}</FiltersContext.Provider>
}
