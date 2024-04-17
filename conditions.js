// REPORTER
const reporter_conditions = [
    {
        "percent": 31
    },
    {
        "percent": 35
    },
    {
        "percent": 46
    },
    {
        "percent": 50
    },
    {
        "percent": 54
    },
    {
        "percent": 61
    },
    {
        "percent": 64
    },
    {
        "percent": 69
    }
]

// DECIDER
var decider_conditions = [
    {
        "bet": 0,
        "outcome": 0,
        "cons": 0,
        "valence": "neutral",
        "gainloss": 0,
        "error": 6
    },
    {
        "bet": 0,
        "outcome": 0,
        "cons": 1,
        "valence": "positive",
        "gainloss": 0,
        "error": 4
    },
    {
        "bet": 0,
        "outcome": 1,
        "cons": 0,
        "valence": "neutral",
        "gainloss": 0,
        "error": 4
    },
    {
        "bet": 0,
        "outcome": 1,
        "cons": 1,
        "valence": "negative",
        "gainloss": 0,
        "error": 6
    },
    {
        "bet": 1,
        "outcome": 0,
        "cons": 0,
        "valence": "neutral",
        "gainloss": -1,
        "error": 6
    },
    {
        "bet": 1,
        "outcome": 0,
        "cons": 1,
        "valence": "negative",
        "gainloss": -1,
        "error": 4
    },
    {
        "bet": 1,
        "outcome": 1,
        "cons": 0,
        "valence": "neutral",
        "gainloss": 1,
        "error": 4
    },
    {
        "bet": 1,
        "outcome": 1,
        "cons": 1,
        "valence": "positive",
        "gainloss": 1,
        "error": 6
    }
]

const ranges = {
    s: {
        min: 1,
        max: 10
    },
    m: {
        min: 11,
        max: 20
    },
    l: {
        min: 21,
        max: 30
    }
}

var range_array = ["s", "s", "s", "m", "m", "l", "l", "l"]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}

shuffleArray(range_array)

for (let i = 0; i < decider_conditions.length; i++) {
    let condition = decider_conditions[i]
    condition.range = range_array[i]
    condition.buyin = Math.floor(Math.random() * (ranges[condition.range].max - ranges[condition.range].min + 1)) + ranges[condition.range].min
}

