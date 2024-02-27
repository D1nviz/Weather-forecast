import { FC } from 'react'
import ForecastIcon from 'src/components/forecast-icon'
import { useActiveTripContext } from 'src/context/active-trip-provider'
import styles from 'src/features/forecast-for-today/styles.module.css'
import { useForecastForToday } from 'src/hooks/useForecastForToday'
import { formatDate } from 'src/utils'
import Timer from 'src/features/timer'

const ForecastForToday: FC = () => {
  const { activeTrip } = useActiveTripContext()

  const { forecast, isLoading } = useForecastForToday(activeTrip.city)

  const today = forecast?.days[0]

  return (
    <div className={styles.wrapper}>
      <div className={styles.container} >
        {isLoading ? null : (
          <div className={styles.forecast}>
            <h3>{formatDate(today?.datetime || '')}</h3>
            <ForecastIcon iconKey={today?.icon!} />
            <span> {today?.temp}°C</span>
            <span className={styles.city}>{forecast?.address}</span>
          </div>
        )}
        <div className={styles.timer}>
          <Timer startDate={activeTrip.startDate} />
        </div>
      </div>
    </div>
  )
}

export default ForecastForToday
