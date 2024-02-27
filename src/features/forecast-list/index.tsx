import { FC } from 'react'
import ForecastCard from 'src/components/forecast-card'
import { useForecast } from 'src/hooks/useForecast'
import { ForecastDayT } from 'src/types'
import styles from './styles.module.css'
import { useActiveTripContext } from 'src/context/active-trip-provider'

const ForecastList: FC = () => {
  const { activeTrip } = useActiveTripContext()
  const { isLoading, weather } = useForecast(activeTrip)

  return (
    <div className={styles.container}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          weather?.days?.map((day: ForecastDayT, index: number) => (
            <ForecastCard key={index} forecast={day} />
          ))
        )}
    </div>
  )
}

export default ForecastList
