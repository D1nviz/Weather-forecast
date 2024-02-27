import { IconsWeather } from 'src/configs/icons'

export type IconT = keyof typeof IconsWeather

export type ForecastDayT = {
  datetime: string
  tempmax: number
  tempmin: number
  icon: IconT
}

export type GetForecastForTimelineResponseT = {
  days: ForecastDayT[]
  address: string
  timezone: string
}

export type GetForecastForTimelineBody = {
  city: string
  startDate: string
  endDate: string
}

export type TripDetailsT = GetForecastForTimelineBody & { img: string }

export type GetForecastForTodayResponseT = {
  address: string
  days: ForecastTodayT[]
}

export type ForecastTodayT = {
  datetime: string
  datetimeEpoch: number
  temp: number
  icon: IconT
}

export type AvaliableCitiesT = {
  city: string
  img: string
}