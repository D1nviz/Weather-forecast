import React from 'react'
import { IconsWeather } from 'src/configs/icons' // replace with the actual path to your icons file
import { IconT } from 'src/types'
import styles from 'src/components/forecast-icon/styles.module.css'

type IconProps = {
  iconKey: IconT
}

const ForecastIcon: React.FC<IconProps> = ({ iconKey }) => {
  const IconComponent = IconsWeather[iconKey]

  return <IconComponent className={styles.container} />
}

export default ForecastIcon
