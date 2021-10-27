import React, {useState} from 'react'
import GuildService from 'Services/GuildService'
import serverList from '../../assets/servers.json'
import styles from './styles.module.scss'

const GuildSelector = () => {
  const [region, setRegion] = useState(null)
  const [server, setServer] = useState(null)
  const [guildName, setGuildName] = useState(null)

  const handleForm = async (event) => {
    event.preventDefault()
    const service = new GuildService()
    await service.retrieveGuild(region.compactName, server.name, guildName)
    console.log(service)
  }

  return (
    <form className={styles.container} onSubmit={handleForm}>
      <label>
        Select region
        <select
          placeholder="Server region"
          onChange={(e) => setRegion(serverList[e.target.value])}
        >
          <option disabled selected hidden>Select server</option>
          {serverList.map((region, index) => <option value={index}>{region.compactName}</option>)}
        </select>
      </label>
      <label>
        Select server
        <select
          placeholder="Server name"
          onChange={(e) => setServer(region.servers[e.target.value])}
          disabled={!region}
        >
          <option disabled selected hidden>Select server</option>
          {region && region.servers.map((server, index) => <option value={index}>{server.name}</option>)}
        </select>
      </label>
      <label>
        Enter guild name
        <input
          type="text"
          placeholder="Uptime"
          onChange={(e) => setGuildName(e.target.value)} disabled={!server}
        />
      </label>
      <button disabled={!guildName}>Submit</button>
    </form>
  )
}

export default GuildSelector