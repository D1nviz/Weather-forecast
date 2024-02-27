import { FC, useState, useEffect } from 'react'
import Select from 'src/components/select'
import { avaliableCities } from 'src/configs/cities'
import { useIsOpenModalContext } from 'src/context/is-open-modal-provider'
import { useTripDetailsContext } from 'src/context/trip-details-provider'
import styles from 'src/features/add-trip-modal/styles.module.css'

const AddTripModal: FC = () => {
  const { isOpenModal, setIsOpenModal } = useIsOpenModalContext()
  const { tripDetails, setTripDetails } = useTripDetailsContext()
  const [tripData, setTripData] = useState({
    tripName: '',
    startDate: '',
    endDate: '',
  })

  const [dateConstraints, setDateConstraints] = useState({
    minStartDate: '',
    maxEndDate: '',
  })

  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  const formatDate = (date: Date) => date.toISOString().split('T')[0]

  useEffect(() => {
    const date = new Date()
    date.setDate(date.getDate() )
    setDateConstraints(prevState => ({
      ...prevState,
      minStartDate: formatDate(date),
    }))
  }, [])

  useEffect(() => {
    if (tripData.startDate) {
      const date = new Date(tripData.startDate)
      date.setDate(date.getDate() + 15)
      setDateConstraints(prevState => ({
        ...prevState,
        maxEndDate: formatDate(date),
      }))
    }
  }, [tripData.startDate])

  const handleSave = () => {
    const selectedCity = avaliableCities.find(
      city => city.city === tripData.tripName,
    )
    setIsOpenModal(false)
    setTripDetails([
      ...tripDetails!,
      {
        city: tripData.tripName,
        startDate: tripData.startDate,
        endDate: tripData.endDate,
        img: selectedCity?.img!,
      },
    ])
  }

  if (!isOpenModal) {
    return null
  }

  return (
    <>
      <div className={styles.container} onClick={handleCloseModal}></div>

      <div className={styles.modal}>
        <button onClick={handleCloseModal} className={styles.button_close}>
          x
        </button>
        <h2 className={styles.modal_heading}>Add a new trip</h2>
        <Select
          options={avaliableCities.map(city => city.city)}
          onChange={value =>
            setTripData(prevState => ({ ...prevState, tripName: value }))
          }
        />
        <input
          className={styles.add_date}
          type="date"
          value={tripData.startDate}
          min={dateConstraints.minStartDate}
          onChange={e =>
            setTripData(prevState => ({ ...prevState, startDate: e.target.value }))
          }
          placeholder="Enter start date"
        />
        <input
          className={styles.add_date}
          type="date"
          value={tripData.endDate}
          min={tripData.startDate}
          max={dateConstraints.maxEndDate}
          onChange={e =>
            setTripData(prevState => ({ ...prevState, endDate: e.target.value }))
          }
          placeholder="Enter end date"
        />
        <button className={styles.add_button} onClick={handleSave}>
          Save
        </button>
      </div>
    </>
  )
}

export default AddTripModal
