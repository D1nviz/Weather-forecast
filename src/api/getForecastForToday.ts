import type { GetForecastForTodayResponseT } from 'src/types'

export const getForecastForToday = async (
  city: string,
): Promise<GetForecastForTodayResponseT> => {
  const url = `${process.env.REACT_APP_API_URL}/${city}/today?unitGroup=metric&key=${process.env.REACT_APP_API_KEY}&include=current`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('There was a problem with the fetch operation: ', error)
    throw error
  }
}
