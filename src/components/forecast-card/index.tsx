import { FC } from 'react'
import { ForecastDayT } from 'src/types'
import ForecastIcon from '../forecast-icon'
import styles from 'src/components/forecast-card/styles.module.css'

type ForecastCardProps = {
  forecast: ForecastDayT
}
const ForecastCard: FC<ForecastCardProps> = ({ forecast }) => {
  const { icon, datetime, tempmax, tempmin } = forecast
  return (
    <div className={styles.container}>
      <h2>{datetime}</h2>
      <ForecastIcon iconKey={icon} />
      <span>
        {tempmin}°/{tempmax}°
      </span>
    </div>
  )
}

export default ForecastCard
