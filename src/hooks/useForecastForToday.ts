import { useState, useEffect } from 'react'
import type { GetForecastForTodayResponseT } from '../types'
import { getForecastForToday } from 'src/api/getForecastForToday'

export const useForecastForToday = (city: string) => {
  const [isLoading, setIsLoading] = useState(true)
  const [forecast, setForecast] = useState<GetForecastForTodayResponseT | null>(null)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    setIsLoading(true)
    const fetchWeather = async () => {
      setIsLoading(true)
      getForecastForToday(city)
        .then(data => {
          setForecast(data)
        })
        .catch(error => {
          setError(error)
        })
        .finally(() => setIsLoading(false))
    }

    fetchWeather()
  }, [city])

  return {
    isLoading,
    setIsLoading,
    forecast,
    setForecast,
    error,
    setError,
  }
}
