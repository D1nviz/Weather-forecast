import React, { FC } from 'react'
import TripCard from 'src/components/trip-card'
import { useTripDetailsContext } from 'src/context/trip-details-provider'
import styles from './styles.module.css'
import { ReactComponent as Add } from 'src/assets/icons/add.svg'
import { useActiveTripContext } from 'src/context/active-trip-provider'
import { TripDetailsT } from 'src/types'
import { useIsOpenModalContext } from 'src/context/is-open-modal-provider'
import { useSearchContext } from 'src/context/search-provider'
import classNames from 'classnames'

const TripList: FC = () => {
  const { tripDetails } = useTripDetailsContext()
  const { activeTrip, setActiveTrip } = useActiveTripContext()
  const { setIsOpenModal } = useIsOpenModalContext()
  const { search } = useSearchContext()

  const handleActiveTrip = (trip: TripDetailsT) => {
    setActiveTrip(trip)
  }

  const sortedTrips = tripDetails
    ?.filter(trip => trip.city.toLowerCase().includes(search.toLowerCase()))
    .sort(
      (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
    )

  return (
    <div className={styles.container}>
      <div className={styles.container_add}>
        <span onClick={() => setIsOpenModal(true)}>
          <Add />
        </span>
      </div>
      {sortedTrips?.map((trip, index) => (
        <div
          key={index}
          className={classNames(styles.button, {
            [styles.active]:
              activeTrip?.city === trip.city &&
              activeTrip?.startDate === trip.startDate,
          })}
          onClick={() => handleActiveTrip(trip)}
        >
          <TripCard trip={trip} />
        </div>
      ))}
    </div>
  )
}

export default TripList
