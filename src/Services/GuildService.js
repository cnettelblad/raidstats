import axios from 'axios'
import Axios from 'axios'

export default class GuildService
{
  constructor()
  {
    this._name = null
    this._server = null
    this._region = null
    this._faction = null
    this._id = null
  }

  async retrieveGuild(
    region,
    server,
    name
  ) {
    try {
      const {
        data: {guild}
      } = await axios.get(`${process.env.REACT_APP_API_URL}/guild/${region}/${server}/${name}`)
      
      this._id = guild.id
      this._name = guild.name
      this._faction = guild.faction.name
      this._server = server
      this._region = region
    } catch (e) {
      console.log(e)
    }
  }
}