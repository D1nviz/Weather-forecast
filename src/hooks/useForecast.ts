import { useState, useEffect } from 'react'
import type {
  GetForecastForTimelineResponseT,
  GetForecastForTimelineBody,
} from '../types'
import { getForecastForTimeline } from 'src/api/getForecastForTimeline' // replace with the actual path to your function
import { normalizeForecastData } from 'src/utils'

export const useForecast = (params: GetForecastForTimelineBody) => {
  const [isLoading, setIsLoading] = useState(true)
  const [weather, setWeather] = useState<GetForecastForTimelineResponseT | null>(
    null,
  )
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    setIsLoading(true)
    const fetchWeather = async () => {
      setIsLoading(true)
      getForecastForTimeline(params)
        .then(data => {
          setWeather(normalizeForecastData(data))
        })
        .catch(error => {
          setError(error)
        })
        .finally(() => setIsLoading(false))
    }

    fetchWeather()
  }, [params])

  return {
    isLoading,
    setIsLoading,
    weather,
    setWeather,
    error,
    setError,
  }
}
