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
        "cons": 0,
        "magnitude": "low",
        "valence": "negative"
    },
    {
        "cons": 0,
        "magnitude": "low",
        "valence": "positive"
    },
    {
        "cons": 0,
        "magnitude": "high",
        "valence": "negative"
    },
    {
        "cons": 0,
        "magnitude": "high",
        "valence": "positive"
    },
    {
        "cons": 1,
        "magnitude": "low",
        "valence": "negative"
    },
    {
        "cons": 1,
        "magnitude": "low",
        "valence": "positive"
    },
    {
        "cons": 1,
        "magnitude": "high",
        "valence": "negative"
    },
    {
        "cons": 1,
        "magnitude": "high",
        "valence": "positive"
    }
]

var error_array1 = [4, 4, 6, 6]
var error_array2 = [4, 4, 6, 6]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}

shuffleArray(error_array1)
shuffleArray(error_array2)

error_array = error_array1.concat(error_array2)

var bet_array = [0, 0, 0, 0, 1, 1, 1, 1]

shuffleArray(bet_array)

for (let i = 0; i < decider_conditions.length; i++) {
    let condition = decider_conditions[i]

    // assign random high or low value of magnitude
    condition.buyin = condition.magnitude == "low" ? Math.floor(Math.random() * 15) + 1 : Math.floor(Math.random() * 15) + 16

    // assign random error 4 or 6
    condition.error = error_array[i]

    condition.bet = bet_array[i]

    condition.outcome = condition.valence == "positive" ? condition.bet : (condition.bet * (-1)) + 1
}