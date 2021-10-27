import axios from "axios"

export default class ReportService
{
  constructor()
  {
    this._guild = null
    this._reports = []
  }

  /**
   * Get fights and optionally pass filters.
   *
   * @param {*} filters
   * @returns []
   */
  getFights(filters = {}) {
    return !filters ? this._reports : this._reports.map((report) => {
      report.filter((fight) => {
        Object.keys(filters).forEach((filter) => {
          // Check if the fight has a key matching our filter
          // and if so, check if the values correspond.
          if (fight[filter] && fight[filter] !== filters[filter]) {
            return false
          }
        })
        return true
      })
    })
  }
}