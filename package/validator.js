const fakeDateError = [null, "", 'boolean', undefined]

function validate(input) {
    fakeDateError.forEach((errorType) => {
        if(input == errorType || typeof(input) == errorType) {
            throw new TypeError("Input must be a null, boolean or undefined. ")
        }
    })

    let inputArray

    try {
        inputArray = input.split('-')
    } catch (error) {
        let typeOf = typeof(error)
        throw new typeOf ("Your input should be in the format 'YYYY - MM - DD'")
    }

    const year = inputArray[0]
    const month = inputArray[1]
    const day = inputArray[2]

    const date = new Date(input)

    if(date.getFullYear() !== year || date.getMonth !== month || date.getDate !== day){
        throw new TypeError("Your input should be in the format 'YYYY - MM - DD'")
    }

    if(Number.isNaN(date.getTime())) {
        throw new TypeError("Input must be of a valid date type.")
    }
}