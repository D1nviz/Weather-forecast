import {
  GetForecastForTimelineBody,
  GetForecastForTimelineResponseT,
  TripDetailsT,
} from 'src/types'

export const formatDate = (datetime: string): string => {
  return new Date(datetime).toLocaleDateString('en-US', {
    weekday: 'long',
  })
}
export const checkActive = (
  activeTrip: TripDetailsT,
  trip: GetForecastForTimelineBody,
): boolean => {
  return (
    activeTrip.city === trip.city 
  )
}
export const normalizeForecastData = (
  data: GetForecastForTimelineResponseT,
): GetForecastForTimelineResponseT => {
  const normalizedDays = data.days.map(day => ({
    ...day,
    datetime: formatDate(day.datetime),
    tempmax: Math.round(day.tempmax),
    tempmin: Math.round(day.tempmin),
  }))

  return {
    ...data,
    days: normalizedDays,
  }
}
