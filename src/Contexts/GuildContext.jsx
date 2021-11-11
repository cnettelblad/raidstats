import { createContext, useState, useEffect } from "react"

export const GuildContext = createContext()

export const GuildProvider = ({children}) => {
  const [guild, setGuild] = useState()

  useEffect(() => {
    const guildData = JSON.parse(localStorage.getItem('guild'))
    
    if (guildData) {
        setGuild(guildData)
    }
  }, [])

  const updateGuild = (data) => {
    setGuild(data)
    localStorage.setItem('guild', JSON.stringify(data))
  }

  return <GuildContext.Provider value={{guild, updateGuild}}>{children}</GuildContext.Provider>
}
