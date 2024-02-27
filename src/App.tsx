import ForecastList from './features/forecast-list'
import styles from 'src/styles.module.css'
import TripList from './features/trip-list'
import ActiveTripProvider from './context/active-trip-provider'
import TripDetailsProvider from './context/trip-details-provider'
import ForecastForToday from './features/forecast-for-today'
import AddTripModal from './features/add-trip-modal'
import IsOpenModalProvider from './context/is-open-modal-provider'
import { SearchProvider } from './context/search-provider'
import Search from './components/search'

import Logo from 'src/assets/logo.png'
import { useUser, RedirectToSignIn } from '@clerk/clerk-react'
import SignOutButton from './components/sign-out-button'

const App = () => {
  const { user } = useUser()

  if (!user) {
    return <RedirectToSignIn />
  }

  return (
    <ActiveTripProvider>
      <TripDetailsProvider>
        <IsOpenModalProvider>
          <SearchProvider>
            <div className={styles.wrapper}>
              <div className={styles.head_container}>
                <h1 className={styles.heading}>
                  <div className={styles.logo}>
                    <img src={Logo} alt="logo" />
                  </div>
                  Weather Forecast
                </h1>
                <Search />

                <SignOutButton />
              </div>

              <div className={styles.container}>
                <div className={styles.forecast_info}>
                  <TripList />
                  <ForecastList />
                </div>

                <ForecastForToday />
              </div>
            </div>
          </SearchProvider>
          <AddTripModal />
        </IsOpenModalProvider>
      </TripDetailsProvider>
    </ActiveTripProvider>
  )
}

export default App
