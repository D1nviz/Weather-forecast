import { AvaliableCitiesT } from 'src/types'
import ParisImg from 'src/assets/cities/Paris.jpg'
import OdessaImg from 'src/assets/cities/Odessa.png'
import UzhhorodImg from 'src/assets/cities/Uzhhorod.jpg'
import KyivImg from 'src/assets/cities/Kyiv.jpeg'

export const exampleCities = [
  {
    city: 'Paris',
    startDate: '2024-03-15',
    endDate: '2024-03-30',
    img: ParisImg,
  },

  {
    city: 'Odessa',
    startDate: '2024-04-02',
    endDate: '2024-04-17',
    img: OdessaImg,
  },
  {
    city: 'Kyiv',
    startDate: '2024-04-03',
    endDate: '2024-04-18',
    img: KyivImg,
  },
  {
    city: 'Uzhhorod',
    startDate: '2024-04-04',
    endDate: '2024-04-19',
    img: UzhhorodImg,
  },
]

export const avaliableCities: AvaliableCitiesT[] = [
  {
    city: 'Paris',
    img: ParisImg,
  },
  {
    city: 'Kyiv',
    img: KyivImg,
  },
  {
    city: 'Uzhhorod',
    img: UzhhorodImg,
  },
  { city: 'Odessa', img: OdessaImg },
]
