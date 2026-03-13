// const { module } = require("browserify/lib/builtins")

// const date = new Date()
// console.log(date) --> this returns a date in the ISO 8601 format,
// commonly used in databases, APIs and JavaScript

// e.g "2026-03-09T11:42:13.260Z"
// Date portion --> "YYYY-MM-DD" --> "2026-03-09"
// Time portion --> "HH:MM:SS.milliseconds" --> "11:42:13.260Z"
// T --> Indicator for time portion starting point
// Z --> "Zulu Time"/"Coordinated Universal Time (UTC)"

// const d = new Date("October 13, 2014 11:13:00")
// console.log(d) --> this also returns the date in ISO 8601 format
// C:\Users\FullstackCreator\Documents\Programming\date-formatt

function iso(date) {
    return date.toISOString().split("T")[0]
}

function short(date) {
    return date.toLocaleDateString("en", {
        day: "numeric",
        month: "short",
        year: "numeric"
    })
}

function long(date) {
    return date.toLocaleDateString("en", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    })
}

function dateTime(date) {
    return date.toLocaleString("en", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit"
    })
}

function time(date) {
    return date.toLocaleTimeString("en", {
        hour: "numeric",
        minute: "2-digit"
    })
}

module.exports = {
    iso,
    short,
    long,
    dateTime,
    time
}