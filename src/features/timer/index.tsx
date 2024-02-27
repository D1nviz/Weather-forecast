import { FC } from 'react'
import styles from 'src/features/timer/styles.module.css'
import { useTimer } from 'src/hooks/useTimer'

type TimerProps = {
  startDate: string
}
const Timer: FC<TimerProps> = ({ startDate }) => {
  const { days, hours, minutes, seconds } = useTimer(startDate)

  return (
    <div className={styles.container_timer}>
      <div className={styles.timer_element}>
        <span>{days}</span> <span>days</span>
      </div>
      <div className={styles.timer_element}>
        <span>{hours}</span> <span>hours</span>
      </div>
      <div className={styles.timer_element}>
        <span>{minutes}</span> <span>minutes</span>
      </div>
      <div className={styles.timer_element}>
        <span>{seconds}</span> <span>seconds</span>
      </div>
    </div>
  )
}

export default Timer
