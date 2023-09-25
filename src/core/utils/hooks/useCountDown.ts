'use client'

import { useEffect, useState } from 'react'

const useCountDown = (initialSeconds: number, callBackFn: () => void) => {
    const [time, setTime] = useState({
        hours: Math.floor(initialSeconds / 3600),
        minutes: Math.floor((initialSeconds % 3600) / 60),
        seconds: Math.floor(initialSeconds % 60),
    })

    useEffect(() => {
        const totalSeconds = time.hours * 3600 + time.minutes * 60 + time.seconds

        if (totalSeconds <= 0) {
            callBackFn()
            return
        }

        const customInterval = setInterval(() => {
            setTime((prevTime) => {
                const remainingSeconds = prevTime.hours * 3600 + prevTime.minutes * 60 + prevTime.seconds - 1

                return {
                    hours: Math.floor(remainingSeconds / 3600),
                    minutes: Math.floor((remainingSeconds % 3600) / 60),
                    seconds: Math.floor(remainingSeconds % 60),
                }
            })
        }, 1000)

        return () => {
            clearInterval(customInterval)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [time])

    return time
}

export default useCountDown
