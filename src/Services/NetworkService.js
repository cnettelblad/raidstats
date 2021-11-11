import axios from 'axios'

export default class NetworkService
{
  static apiURL = process.env.REACT_APP_API_URL
  static async get(endpoint, ...params) {
    const { data } = await axios.get(
      `${this.apiURL}/${endpoint}/${params.map(param => `${param}/`).join('')}`
    )
    return data
  }
}