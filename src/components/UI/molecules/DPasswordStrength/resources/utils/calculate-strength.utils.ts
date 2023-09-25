const calculateStrength = (password: string): number => {
    const conditions = [
        /[a-z]/, // At least one lowercase letter
        /[A-Z]/, // At least one uppercase letter
        /\d/, // At least one digit
        /[@$!%*?&]/, // At least one special character
    ]

    return conditions.reduce((totalStrength, condition) => {
        return totalStrength + (condition.test(password) ? 25 : 0)
    }, 0)
}

export default calculateStrength
