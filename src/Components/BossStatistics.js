import { BarChart, XAxis, Tooltip, Bar, Rectangle } from "recharts"

const BossStatistics = ({bossName = '', fights = []}) => {

  /**
   * Takes "raw" fight data and make it prettier.
   * Sorts the output by "raw" date.
   * @returns {}[]
   */
  const getFightData = () => {
    console.log('Logging fights for: ' + bossName)
    const arr = fights.map(fight => {
      const date = new Date(fight.date)
      return {
        ...fight, 
        dateString: `
          ${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} 
          ${date.getHours().toString().padStart(2,0)}:${date.getMinutes().toString().padStart(2,0)}
        `,
        time: fight.time / 1000
      }
    })
    return arr.sort((a, b) => a.date > b.date ? 1 : -1)
  }

  return (
    <div>
      <h3>{bossName}</h3>
      <BarChart width={600} height={250} data={getFightData()}>
        <XAxis dataKey="dateString" />
        <Tooltip
          contentStyle={{
            background: '#1e2127',
            borderRadius: '5px',
            borderColor: '#43516b',
            color: '#fff'
          }}
          cursor={{fill: '#1e2127'}} 
        />
        <Bar shape={(props) => {
          return <Rectangle {...props} fill={props.isKill ? '#4abd9a' : '#bf414e'} />
        }} dataKey="time" />
      </BarChart>
    </div>
  )
}

export default BossStatistics