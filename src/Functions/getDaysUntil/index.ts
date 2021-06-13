const millisecondsPerDay: number = (24*3600*1000)

const getDaysUntil = (futureDate: Date) => {
    const currentDate: Date = new Date()
    const differenceInMilliseconds: number = futureDate.getMilliseconds()-currentDate.getMilliseconds()
    const daysUntil: number = differenceInMilliseconds/millisecondsPerDay

    return daysUntil.toString()
}

export default getDaysUntil