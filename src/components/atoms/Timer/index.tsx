import { useCallback, useEffect, useState } from 'react'
import * as S from './styles'

type TimerTypes = {
  time: string
  start?: boolean
}

function Timer({ time, start = true }: TimerTypes) {
  // 4:00
  const [fullTime, setTime] = useState('')

  const countDown = useCallback(() => {
    const arrTimer = time.split(':')

    const minute = Number(arrTimer[0]) * 60
    let secondsTotal = Number(arrTimer[1]) + minute

    setInterval(() => {
      secondsTotal = secondsTotal - 1

      const backMinutes = Math.floor(secondsTotal / 60)
      const backSeconds = secondsTotal % 60

      setTime(
        `0${backMinutes}:${backSeconds < 10 ? `0${backSeconds}` : backSeconds}`
      )
    }, 1000)
  }, [time])

  useEffect(() => {
    if (time && start) {
      countDown()
    } else {
      setTime(time)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time, start])

  return <S.Container>{fullTime}</S.Container>
}

export default Timer
