const millisecondsPerDay: number = (24*3600*1000)

const getDaysUntil = (futureDate: Date) => {
    const currentDate: Date = new Date()
    const differenceInMilliseconds: number = futureDate.getTime()-currentDate.getTime()
    const daysUntil: number = differenceInMilliseconds/millisecondsPerDay

    return Math.ceil(daysUntil).toString()
}

export default getDaysUntil