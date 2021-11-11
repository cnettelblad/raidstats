export default class FilterService
{
  static applyBossFilters(filters, bosses) {
    if (!filters || !filters.bosses) return bosses

    return filters.bosses.map((boss) => {
      return bosses[boss]
    })
  }

  static applyWipeFilters(wipes, fights) {
    if (wipes) return fights

    return fights.filter(fight => fight.isKill)
  }

  static applyFightsFilters(filters, fights) {
    
  }
}