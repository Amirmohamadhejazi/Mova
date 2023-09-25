const getStrengthColor = (strength: number): string => {
    if (strength > 75) return 'bg-success-500'
    if (strength > 50) return 'bg-yellow-500'
    if (strength > 25) return 'bg-warning-500'
    if (strength > 0) return 'bg-danger-500'
    return ''
}

export default getStrengthColor
