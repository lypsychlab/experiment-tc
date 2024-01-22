// initialize jsPsych
const jsPsych = initJsPsych(
    {
        on_finish: function() {
            jsPsych.data.displayData()
            jsPsych.data.get().localSave('csv','last_data.csv');
        }
    }
)

// define experiment variables
const correct_responses = {
    Q0: "One exact amount of money and one approximate amount of money.",
    Q1: "Yes",
    Q2: "For each round, a different random participant provided an approximate value of the exact amount.",
    Q3: "The amount the previous player gained based on their choice."
}

var last_answers = [null, null, null, null]
var last_answers_correct = [null, null, null, null]

const dvs = [
    {
        options: [
            "False",
            "True"
        ]
    },
    {
        options: [
            "Completely false",
            "Mostly false",
            "Somewhat false",
            "Neither true nor false",
            "Somewhat true",
            "Mostly true",
            "Completely true"
        ]
    },
    {
        options: [
            "No",
            "Yes"
        ]
    }
]

var score = 0
var trial_counter = 0

const PROLIFIC_PID = jsPsych.data.getURLVariable("PROLIFIC_PID")
const subject_id = jsPsych.randomization.randomID(10)
const filename = `${subject_id}.csv`

jsPsych.data.addProperties({
    subject_id: subject_id
})

/* INDIVIDUAL PAGES */

// consent form
const consent = {
    type: jsPsychHtmlButtonResponse,
    stimulus: consent_html,
    choices: ["Consent not given", "Consent given"],
    button_html: [
        `<button class="jspsych-btn" onclick="window.open('https://prolific.com', '_blank')">%choice%</button>`,
        `<button class="jspsych-btn">%choice%</button>`
    ],
    on_load: function() {
        style_jspsych()
    },
    on_finish: function(data) {
        unstyle_jspsych()

        // if no consent, send back to prolific with no consent code
        if (data.response == 0) {
            jsPsych.endExperiment(
                "You chose not to consent to participate. <br>If you were not automatically directed back to Prolific, please go back and enter the completion code XXXXXX."
            )
        }
    },
    data: {
        type_of_trial: "consent"
    }
}

// prolific id, instructions and comprehension check
const prolific_id = {
    type: jsPsychSurveyText,
    questions: [
        {
            prompt: "Please copy and paste your Prolific ID here.",
            name: "prolific_id",
            placeholder: PROLIFIC_PID,
            required: true
        }
    ],
    data: {
        type_of_trial: "prolific"
    },
    on_finish: function(data) {
        data.prolific_id = data.response["prolific_id"]
    }
}

const instructions = {
    type: jsPsychInstructions,
    pages: function() {
        var instructions_pages = []

        instructions_pages.push(
            instructions_page1, 
            instructions_page2, 
            instructions_page3,
            instructions_page4,
            instructions_page5,
            instructions_page6,
            instructions_page7
            )

        return instructions_pages
    },
    allow_keys: false,
    show_clickable_nav: true,
    on_load: function() {
        style_jspsych()
    },
    on_finish: function() {
        unstyle_jspsych()
    },
    data: {
        type_of_trial: "instructions"
    }
}

const comprehension = {
    type: jsPsychSurveyMultiChoice,
    preamble: "We know there were a lot of instructions for this study. To make sure you remember all of the details, please complete the following questions:",
    questions: [
        {
            prompt: "In each round, the previous player had to choose between:",
            options: [
                "Two approximate amounts of money.",
                "One exact amount of money and one approximate amount of money.",
                "One approximate amount of money and the chance to double their money in the next round.",
            ],
            required: true
        },
        {
            prompt: "Did the previous player know which option was exact and which option was approximate?",
            options: [
                "Yes",
                "No",
            ],
            required: true
        },
        {
            prompt: "How was the approximate amount of money displayed in each round calculated?",
            options: [
                "The exact amount for each round was rounded to the nearest multiple of ten.",
                "For each round, a different random participant provided an approximate value of the exact amount.",
                "It was chosen by a random number generator."
            ],
            required: true
        },
        {
            prompt: "Each round, your bonus will increase in proportion to:",
            options: [
                "The choices you make.",
                "An amount chosen by a random number generator.",
                "The amount the previous player gained based on their choice."
            ],
            required: true
        }
    ],
    on_load: function() {
        style_jspsych()
    },
    on_finish: function(data) {
        unstyle_jspsych()

        if (data.response.Q0 == correct_responses.Q0 && data.response.Q1 == correct_responses.Q1 && data.response.Q2 == correct_responses.Q2 && data.response.Q3 == correct_responses.Q3) {
            jsPsych.endCurrentTimeline()
        } else {
            last_answers[0] = data.response.Q0
            last_answers[1] = data.response.Q1
            last_answers[2] = data.response.Q2
            last_answers[3] = data.response.Q3

            last_answers_correct[0] = data.response.Q0 == correct_responses.Q0
            last_answers_correct[1] = data.response.Q1 == correct_responses.Q1
            last_answers_correct[2] = data.response.Q2 == correct_responses.Q2
            last_answers_correct[3] = data.response.Q3 == correct_responses.Q3
        }
    },
    data: {
        type_of_trial: "comprehension"
    }
}

const incorrect_response = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function() {
        return incorrect_response_stimulus()
    },
    choices: ["Back to instructions"],
    on_load: function() {
        style_jspsych()
    },
    on_finish: function() {
        unstyle_jspsych()
    },
    data: {
        type_of_trial: "incorrect_response"
    }
}

// transition from instructions to trials
const move_to_experiment = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `You answered all comprehension questions correctly. Please click the button below to begin moving through the rounds.<br><br><u>Reminder:</u> in the tutorial, you had to click the "Next" button to see the next bit of information, but from now on, the experiment will automatically move between screens.<br><br>`,
    choices: ["Begin"],
    data: {
        type_of_trial: "move_to_experiment"
    }
}

// main trial
const trial_claims = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function() {
        return claims_stimulus(jsPsych.timelineVariable("exact"), jsPsych.timelineVariable("round"))
    },
    choices: [" "],
    trial_duration: 3000,
    on_load: function() {
        style_jspsych()
    },
    on_finish: function() {
        unstyle_jspsych()
    },
    data: {
        type_of_trial: "claims"
    }
}

const trial_outcome_choice = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function() {
        return outcome_stimulus_choice(jsPsych.timelineVariable("exact"), jsPsych.timelineVariable("round"), jsPsych.timelineVariable("choice"))
    },
    choices: [" "],
    trial_duration: 3000,
    on_load: function() {
        style_jspsych()
    },
    on_finish: function() {
        unstyle_jspsych()
    },
    data: {
        type_of_trial: "choice"
    }
}

const trial_outcome_payouts = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function() {
        return outcome_stimulus_payouts(jsPsych.timelineVariable("exact"), jsPsych.timelineVariable("round"), jsPsych.timelineVariable("truth"), jsPsych.timelineVariable("choice"))
    },
    choices: [" "],
    trial_duration: 3000,
    on_load: function() {
        style_jspsych()
    },
    on_finish: function() {
        unstyle_jspsych()
    },
    data: {
        type_of_trial: "payouts"
    }
}

const trial_outcome_report = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function() {
        return outcome_stimulus_report(jsPsych.timelineVariable("exact"), jsPsych.timelineVariable("round"), jsPsych.timelineVariable("truth"), jsPsych.timelineVariable("choice"))
    },
    choices: [" "],
    trial_duration: 3000,
    on_load: function() {
        style_jspsych()
    },
    on_finish: function() {
        unstyle_jspsych()
    },
    data: {
        type_of_trial: "report"
    }
}

const trial_outcome_questions = {
    type: jsPsychSurveyMultiChoice,
    preamble: function() {
        let string = outcome_stimulus_report(jsPsych.timelineVariable("exact"), jsPsych.timelineVariable("round"), jsPsych.timelineVariable("truth"), jsPsych.timelineVariable("choice"))
        string += "<br><hr>"

        return string
    },
    questions: function() {
        return outcome_questions(jsPsych.timelineVariable("round"), jsPsych.timelineVariable("truth"))
    },
    on_load: function() {
        // set jspsych-content styling
        style_jspsych()
    },
    on_finish: function(data) {
        // restore jspsych-content styling
        unstyle_jspsych()

        // populate data columns
        data.truth_bn = dvs[0].options.indexOf(data.response.Q0)
        data.truth_lk = dvs[1].options.indexOf(data.response.Q1)
        data.choose_dif = dvs[2].options.indexOf(data.response.Q2)

        // update score
        let earnings = 0 

        if (jsPsych.timelineVariable("choice") == "round") {
            earnings = parseInt(jsPsych.timelineVariable("truth"))
        } else {
            earnings = parseInt(jsPsych.timelineVariable("exact"))
        }

        score += earnings
    },
    data: {
        type_of_trial: "measures",
        exact: jsPsych.timelineVariable("exact"),
        round: jsPsych.timelineVariable("round"),
        truth: jsPsych.timelineVariable("truth"),
        choice: jsPsych.timelineVariable("choice"),
        spread: jsPsych.timelineVariable("spread"),
        valence: jsPsych.timelineVariable("valence"),
        consequence: jsPsych.timelineVariable("consequence")
    }
}

const attention = {
    type: jsPsychSurveyMultiChoice,
    preamble: "Sometimes respondents to our surveys are bots rather than real people. We need to remove those responses from our data to make sure our research findings are valid. To help us know who is actually a real person, please ignore the question wording below and select 'Somewhat false.' This is not intended to trick you and will not affect your payment. Thank you!",
    questions: [
        {
            prompt: "How true or false is it to say that 56 is approximately 100?",
            options: [
                "Completely false",
                "Mostly false",
                "Somewhat false",
                "Neither true nor false",
                "Somewhat true",
                "Mostly true",
                "Completely true"
            ],
            required: true
        }
    ],
    on_load: function() {
        style_jspsych()

        trial_counter += 1
        if (trial_counter != 5) {
            jsPsych.finishTrial()
        }
    },
    on_finish: function(data) {
        unstyle_jspsych()

        // populate data
        if (typeof data.response != "undefined") {
            data.response = data.response.Q0
        }
    },
    data: {
        type_of_trial: "attention"
    }
}

/* MAIN BLOCKS */ 

// instructions + comprehension check loop
var intro_timeline = [prolific_id]

for (let i = 0; i < 100; i++) {
    intro_timeline.push(instructions, comprehension, incorrect_response)
}

const intro = {
    timeline: intro_timeline
}

// define main trial loop
const trials = {
    timeline: [trial_claims, trial_outcome_choice, trial_outcome_payouts, trial_outcome_report, trial_outcome_questions, attention],
    timeline_variables: conditions,
    randomize_order: true
}

// demographics questions
const demographics = {
    type: jsPsychSurveyHtmlForm,
    preamble: "The following questions are optional, but should be answered thruthfully.",
    html: function() {
        return demographics_questions
    },
    on_load: function() {
        style_jspsych()
    },
    on_finish: function(data) {
        unstyle_jspsych()

        // populate data
        data.age = data.response.age

        data.gender = data.response.gender
        if (data.response.unlisted_gender != "") {
            data.gender = data.response.unlisted_gender
        }

        let re_keys = Object.keys(data.response).filter(key => data.response[key] === "on")
        if (data.response.other_race_ethnicity_text != "") {
            re_keys.push(data.response.other_race_ethnicity_text)
        }
        data.race_ethnicity = re_keys

        data.income = data.response.income
        data.education = data.response.education
        data.ses = data.response.ses

        data.party = data.response.party
        if (data.response.other_party_text != "") {
            data.party = data.response.other_party_text
        }

        data.politics = data.response.politics
        data.religiosity = data.response.religiosity
    },
    data: {
        type_of_trial: "demographics"
    }
}

// outro

const feedback = {
    type: jsPsychSurveyHtmlForm,
    preamble: "We are in the process of improving this study, and we would love any feedback you have about it.",
    html: function() {
        return feedback_questions
    },
    on_load: function() {
        style_jspsych()
    },
    on_finish: function(data) {
        unstyle_jspsych()

        // populate data
        data.understand = data.response.understandable
        data.confusing = data.response.confusing
        data.annoying = data.response.annoying
        data.issues = data.response.issues
        data.other_feedback = data.response.other_feedback
    },
    data: {
        type_of_trial: "feedback"
    }
}

const save_data = {
    type: jsPsychPipe,
    action: "save",
    experiment_id: "u9KgpAqC5lYb",
    filename: filename,
    data_string: () => jsPsych.data.get().csv(),
    data: {
        type_of_trial: "save_data"
    }
}

const debrief = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function() {
        return debrief_html
    },
    choices: ["Back to Prolific"],
    button_html: `<button class="jspsych-btn" onclick="window.open('https://prolific.com', '_blank')">%choice%</button>`,
    data: {
        type_of_trial: "debrief"
    },
    on_load: function () {
        style_jspsych()
    },
    on_finish: function (data) {
        unstyle_jspsych()
    }
}

const outro = {
    timeline: [feedback, save_data, debrief]
}

// define and run the experiment
var experiment = []

experiment.push(
    consent,
    intro,                  // prolific id, instructions, comprehension
    move_to_experiment,
    trials,
    demographics,
    outro                   // feedback, save_data, debrief screen
)

jsPsych.run(experiment)