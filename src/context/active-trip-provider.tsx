import React, { useState, createContext, useContext } from 'react'
import { exampleCities } from 'src/configs/cities'
import type { GetForecastForTimelineBody } from 'src/types'

type ActiveTripContextType = {
  activeTrip: GetForecastForTimelineBody
  setActiveTrip: React.Dispatch<React.SetStateAction<GetForecastForTimelineBody>>
}

type ActiveTripProviderProps = {
  children: React.ReactNode
}

export const ActiveTripContext = createContext<ActiveTripContextType | null>(null)

export default function ActiveTripProvider({ children }: ActiveTripProviderProps) {
  const [activeTrip, setActiveTrip] = useState<GetForecastForTimelineBody>(
    exampleCities[0],
  )

  return (
    <ActiveTripContext.Provider value={{ activeTrip, setActiveTrip }}>
      {children}
    </ActiveTripContext.Provider>
  )
}

export function useActiveTripContext() {
  const context = useContext(ActiveTripContext)

  if (context === null) {
    throw new Error('useActiveTripContext must be used within an ActiveTripProvider')
  }

  return context
}
