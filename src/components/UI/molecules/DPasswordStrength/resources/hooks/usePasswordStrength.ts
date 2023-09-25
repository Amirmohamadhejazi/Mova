import { useEffect, useState } from 'react'

import calculateStrength from '../utils/calculate-strength.utils'
import getStrengthColor from '../utils/get-strength-color.utils'

const usePasswordStrength = (password: string) => {
    const [strength, setStrength] = useState<number>(0)
    const [strengthColor, setStrengthColor] = useState<string>('')

    useEffect(() => {
        const strengthValue = calculateStrength(password)
        setStrength(strengthValue)
    }, [password])

    useEffect(() => {
        const strengthColor = getStrengthColor(strength)
        setStrengthColor(strengthColor)
    }, [strength])

    return { strength, strengthColor }
}

export default usePasswordStrength
