import styles from 'src/components/trip-card/styles.module.css'
import { TripDetailsT } from 'src/types'
import { FC } from 'react'

type TripCardProps = {
  trip: TripDetailsT
}
const TripCard: FC<TripCardProps> = ({ trip }) => {
  const { city, startDate, endDate, img } = trip
  return (
    <div className={styles.container}>
      <img src={img} alt="city" />
      <div className={styles.info}>
        <h2>{city}</h2>
        <span>
          {startDate} —  {endDate}
        </span>
      </div>
    </div>
  )
}

export default TripCard
