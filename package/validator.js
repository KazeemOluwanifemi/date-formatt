const fakeDateError = [null, "", 'boolean', undefined]

function validate(input) {
    const inValid = fakeDateError.some(errorType => input === errorType || typeof(input) === 'boolean')
    if(inValid) {
        throw new TypeError("Input cannot be a null, boolean or undefined.")
    }


    let inputArray

    try {
        inputArray = input.split('-')
    } catch (error) {
        throw new TypeError(error + ": Your input should be in the format 'YYYY - MM - DD'")
    }

    const year = inputArray[0]
    const month = inputArray[1]
    const day = inputArray[2]

    const date = new Date(input)

    if(date.getFullYear() !== Number(year) || date.getMonth() +1 !== Number(month) || date.getDate() !== Number(day)){
        console.log(date.getFullYear())
        console.log(date.getMonth())
        console.log(date.getDate())
        console.log(Number(year))
        console.log(Number(month))
        console.log(Number(day))
        throw new TypeError("Your input should be in the format 'YYYY - MM - DD' and not 'YYYY-DD-MM'")
    }

    if(Number.isNaN(date.getTime())) {
        throw new TypeError("Input must be of a valid date type.")
    }

    return date
}

module.exports = {
    validate
}