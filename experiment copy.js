// initialize jsPsych
const jsPsych = initJsPsych({})

// data pipe variables
const subject_id = jsPsych.randomization.randomID(10);

// experiment variables
var earnings = 0
const estimate_earnings = [5, 4, 3, 2, 1]

const num_spins = 5
var pot = 100
var last_answers = [null, null, null]
var last_answers_correct = [null, null, null]
const correct_responses = [
    "Estimate the chance of winning of the wheel",
    "Decide the smallest chance of winning where they are willing to bet the amount at stake",
    "Only when the Reporter's estimate is greater than or equal to the number the Decider enters"
]
const options = [
    [
        "Estimate the percentage of the wheel that is black",
        "Guess what number the Decider will enter",
        "Estimate the chance of winning of the wheel",
        "Guess whether money will be on the line or not"
    ],
    [
        "Decide which color to bet on",
        "Decide the smallest chance of winning where they are willing to bet the amount at stake",
        "Decide whether or not the wheel will be spun",
        "Decide the amount of money at stake for each round"
    ],
    [
        "Every round, regardless of what numbers the Decider and the Reporter enter",
        "On randomly chosen rounds, regardless of what numbers the Decider and the Reporter enter",
        "Only when the Reporter's estimate is lower than the number the Decider enters",
        "Only when the Reporter's estimate is greater than or equal to the number the Decider enters"
    ]
]
var skip_less_than_half = true

var current_minimum
var current_truth
var current_report
var current_rotation
var current_estimate
var current_distance
var reporter_count = 6

const dvs = {
    manip_check: ["Lower", "They were equal", "Higher"],
    truth_bn: ["False", "True"],
    truth_lk: ["1", "2", "3", "4", "5", "6", "7"],
}

// trials

// consent form
const consent = {
    type: jsPsychHtmlButtonResponse,
    stimulus: consent_html,
    choices: ["Consent not given", "Consent given"],
    button_html: [
        `<button class="jspsych-btn" onclick="window.open('https://app.prolific.com/submissions/complete?cc=C1I9FHR3', '_blank')">%choice%</button>`,
        `<button class="jspsych-btn">%choice%</button>`
    ],
    on_finish: function(data) {
        // if no consent, send back to prolific with no consent code
        if (data.response == 0) {
            document.getElementById("jspsych-content").style.margin = "auto"

            jsPsych.endExperiment(
                "You chose not to consent to participate.<br>If you were not automatically directed back to Prolific, please go back and enter the completion code C1I9FHR3"
            )
        }
    },
    data: {
        type_of_trial: "consent",
        subject_id: subject_id
    }
}

// prolific id, instructions
const prolific_id = {
    type: jsPsychSurveyText,
    questions: [
        {
            prompt: "Please copy and paste your Prolific ID here.",
            name: "prolific_id",
            required: true
        }
    ],
    data: {
        type_of_trial: "prolific",
        subject_id: subject_id
    },
    on_load: function() {
        document.getElementById("jspsych-content").style.margin = "auto"
    },
    on_finish: function(data) {
        document.getElementById("jspsych-content").style.margin = "50px auto"

        data.prolific_id = data.response["prolific_id"]
    }
}

const first_instructions = {
    type: jsPsychInstructions,
    pages: function() {
        var instructions_pages = []

        instructions_pages.push(
            instructions_page1,
            instructions_page2,
            instructions_page3,
            instructions_page4,
            instructions_page5
        )

        return instructions_pages
    },
    allow_keys: false,
    show_clickable_nav: true,
    data: {
        type_of_trial: "instructions",
        subject_id: subject_id
    }
}

const second_instructions = {
    type: jsPsychInstructions,
    pages: function() {
        var instructions_pages = []

        instructions_pages.push(
            instructions_page6,
            instructions_page7,
            instructions_page8,
            instructions_page9,
            instructions_page10,
            instructions_page11,
            instructions_page12,
            instructions_page13,
            instructions_page14
        )

        return instructions_pages
    },
    allow_keys: false,
    show_clickable_nav: true,
    show_page_number: true,
    data: {
        type_of_trial: "instructions",
        subject_id: subject_id
    },
    on_load: function() {
        document.getElementById("jspsych-content").style.margin = "50px auto"
        
        // Select the node that you want to observe
        const targetNode = document.getElementById('jspsych-content')
        
        // Options for the observer (which mutations to observe)
        const config = { attributes: true, childList: true, subtree: true, characterData: true }
        
        // Callback function to execute when mutations are observed
        const callback = function(mutationsList, observer) {
            if (document.querySelector(".jspsych-instructions-pagenum")) {
                if (!(typeof change_inst_box === "undefined")) {
                    clearTimeout(change_inst_box)
                }

                if (document.querySelector(".jspsych-instructions-pagenum").textContent == "Page 7/9" && !document.querySelector(".number-line")) {
                    setTimeout(function() {
                        document.getElementById("wheel").style.transition = "rotate 4000ms ease-out"
                        document.getElementById("wheel").style.rotate = `${num_spins * 360 + 340}deg`
                    }, 1)

                    change_inst_box = setTimeout(function() {
                        document.querySelector(".instructions-box").outerHTML = instructions_page12_full_box
                    }, 4001)
                }
            } else {
                // Stop observing
                observer.disconnect()
            }
        }
        
        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(callback)
        
        // Start observing the target node for configured mutations
        observer.observe(targetNode, config)
    }
}

const comprehension = {
    type: jsPsychSurveyMultiChoice,
    preamble: `
        We know there were a lot of rules for this game. 
        To make sure you remember them, please answer the following questions. 
        If you need to reference the rules, you can find them <a href="instructions.html" target="_blank">here</a>.
    `,
    questions: [
        {
            prompt: "What is the Reporter trying to do?",
            options: [
                "Estimate the percentage of the wheel that is black",
                "Guess what number the Decider will enter",
                "Estimate the chance of winning of the wheel",
                "Guess whether money will be on the line or not"
            ],
            required: true
        },
        {
            prompt: "What is the Decider trying to do?",
            options: [
                "Decide which color to bet on",
                "Decide the smallest chance of winning where they are willing to bet the amount at stake",
                "Decide whether or not the wheel will be spun",
                "Decide the amount of money at stake for each round"
            ],
            required: true
        },
        {
            prompt: "When will money be on the line?",
            options: [
                "Every round, regardless of what numbers the Decider and the Reporter enter",
                "On randomly chosen rounds, regardless of what numbers the Decider and the Reporter enter",
                "Only when the Reporter's estimate is lower than the number the Decider enters",
                "Only when the Reporter's estimate is greater than or equal to the number the Decider enters"
            ],
            required: true
        }
    ],
    on_finish: function(data) {
        if (data.response.Q0 == correct_responses[0] && data.response.Q1 == correct_responses[1] && data.response.Q2 == correct_responses[2]) {
            jsPsych.endCurrentTimeline()
        } else {
            last_answers[0] = data.response.Q0
            last_answers[1] = data.response.Q1
            last_answers[2] = data.response.Q2

            last_answers_correct[0] = data.response.Q0 == correct_responses[0]
            last_answers_correct[1] = data.response.Q1 == correct_responses[1]
            last_answers_correct[2] = data.response.Q2 == correct_responses[2]
        }
    },
    data: {
        type_of_trial: "comprehension",
        subject_id: subject_id
    }
}

const incorrect_response = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function() {
        return incorrect_response_stimulus()
    },
    choices: ["Answer the questions again"],
    data: {
        type_of_trial: "incorrect_response",
        subject_id: subject_id
    }
}

var comprehension_timeline = []

for (let i = 0; i < 100; i++) {
    comprehension_timeline.push(comprehension, incorrect_response)
}

const comprehension_loop = {
    timeline: comprehension_timeline
}

// REPORTER TASK
const move_to_experiment_reporter = {
    type: jsPsychHtmlKeyboardResponse,
    choices: " ",
    stimulus: `
        You answered all the questions correctly.
        <br>
        <br>
        You will now play as the Reporter for 8 rounds.
        <br>
        <br>
        When you are ready, press space to begin.
    `,
    on_load: function() {
        document.getElementById("jspsych-content").style.margin = "auto"

        reporter_count = 0
    },
    data: {
        type_of_trial: "begin_reporter",
        subject_id: subject_id
    }

}

const begin_reporter = {
    type: jsPsychHtmlKeyboardResponse,
    choices: " ",
    stimulus: `Press the space bar to see the first wheel.`,
    on_load: function() {
        document.getElementById("jspsych-content").style.margin = "auto"
    },
    data: {
        type_of_trial: "begin_reporter",
        subject_id: subject_id
    }
}

const fixation = {
    type: jsPsychHtmlKeyboardResponse,
    choices: "NO_KEYS",
    trial_duration: 1000,
    stimulus: `
        <div style="font-size: 30px;">
            +
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
        </div>
    `,
    on_load: function() {
        document.getElementById("jspsych-content").style.margin = "auto"
    },
    data: {
        type_of_trial: "fixation",
        subject_id: subject_id
    }
}

const show_wheel = {
    type: jsPsychHtmlKeyboardResponse,
    choices: " ",
    trial_duration: 1000,
    stimulus: function() {
        return show_wheel_stimulus(jsPsych.timelineVariable("percent"))
    },
    data: {
        type_of_trial: "show_wheel",
        subject_id: subject_id
    }
}

const estimate_wheel = {
    type: jsPsychSurveyHtmlForm,
    html: `
        What is the chance of winning of the wheel you just saw?
        <br>
        <br>
        <input id="estimate" class="percentage-enter" name="estimate" type="number" max="85" min="15" required="true"/>
        <br>
        <br>
    `,
    autofocus: "estimate",
    on_finish: function(data) {
        current_estimate = data.response.estimate
        current_distance = Math.abs(current_estimate - parseInt(jsPsych.timelineVariable("percent")))

        if (current_distance < 5) {
            earnings += estimate_earnings[current_distance]
        }

        data.estimate = data.response.estimate
        data.distance = current_distance
    },
    data: {
        type_of_trial: "estimate_wheel",
        percent: jsPsych.timelineVariable("percent"),
        subject_id: subject_id
    }
}

const reporter_feedback = {
    type: jsPsychHtmlKeyboardResponse,
    choices: " ",
    stimulus: function() {
        return reporter_feedback_stimulus(jsPsych.timelineVariable("percent"))
    },
    on_finish: function() {
        document.getElementById("jspsych-content").style.margin = "50px auto"

        reporter_count += 1
    },
    data: {
        type_of_trial: "reporter_feedback",
        subject_id: subject_id
    }
}

const reporter_task = {
    timeline: [fixation, show_wheel, estimate_wheel, reporter_feedback],
    timeline_variables: reporter_conditions,
    randomize_order: true
}

const estimate_wheel_prac = {
    type: jsPsychSurveyHtmlForm,
    html: `
        What is the chance of winning of the wheel you just saw?
        <br>
        <br>
        <input id="estimate" class="percentage-enter" name="estimate" type="number" max="85" min="15" required="true"/>
        <br>
        <br>
    `,
    autofocus: "estimate",
    on_finish: function(data) {
        current_estimate = data.response.estimate
        current_distance = Math.abs(current_estimate - parseInt(jsPsych.timelineVariable("percent")))

        data.estimate = data.response.estimate
        data.distance = current_distance
    },
    data: {
        type_of_trial: "estimate_wheel_prac",
        percent: jsPsych.timelineVariable("percent"),
        subject_id: subject_id
    }
}

const reporter_task_prac = {
    timeline: [fixation, show_wheel, estimate_wheel_prac, reporter_feedback],
    timeline_variables: [
        {
            "percent": 46
        },
        {
            "percent": 58
        }
    ],
    randomize_order: true
}

// ATTENTION CHECK
const attention = {
    type: jsPsychSurveyMultiChoice,
    preamble: `
        Sometimes respondents to our surveys are bots rather than real people. 
        We need to remove those responses from our data to make sure our research findings are valid. 
        To help us know who is actually a real person, please ignore the question wording below and select 'Mostly false.' 
        This is not intended to trick you and will not affect your payment. Thank you!
    `,
    questions: [
        {
            prompt: "How true or false is it to say that 48 is approximately 50?",
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
    on_finish: function(data) {
        data.response = data.response.Q0
    },
    data: {
        type_of_trial: "attention",
        subject_id: subject_id
    }
}

// DECIDER TASK
const move_to_experiment_decider = {
    type: jsPsychHtmlKeyboardResponse,
    choices: " ",
    stimulus: function() {
        return move_to_decider_stimulus()
    },
    on_load: function() {
        document.getElementById("jspsych-content").style.margin = "auto"
    },
    on_finish: function() {
        document.getElementById("jspsych-content").style.margin = "50px auto"
        pot = 100
    },
    data: {
        type_of_trial: "begin_reporter",
        subject_id: subject_id
    }

}

const enter_minimum = {
    type: jsPsychSurveyHtmlForm,
    html: function() {
        return minimum_stimulus(jsPsych.timelineVariable("buyin"))
    },
    autofocus: "minimum",
    on_finish: function(data) {
        current_minimum = parseInt(data.response.minimum)
        set_global_vars(current_minimum, jsPsych.timelineVariable("bet"), jsPsych.timelineVariable("outcome"), jsPsych.timelineVariable("cons"), jsPsych.timelineVariable("error"))

        if (current_minimum < 50) {
            skip_less_than_half = false
        }
    },
    data: {
        type_of_trial: "enter_minimum",
        subject_id: subject_id
    }
}

const see_report = {
    type: jsPsychHtmlButtonResponse,
    choices: ["See this round's wheel"],
    stimulus: function() {
        return see_report_stimulus(jsPsych.timelineVariable("buyin"), jsPsych.timelineVariable("bet"))
    },
    data: {
        type_of_trial: "see_report",
        subject_id: subject_id
    }
}

const see_wheel = {
    type: jsPsychHtmlButtonResponse,
    choices: ["Spin the Wheel"],
    stimulus: function() {
        return see_wheel_stimulus(jsPsych.timelineVariable("buyin"), jsPsych.timelineVariable("bet"))
    },
    data: {
        type_of_trial: "see_wheel",
        subject_id: subject_id
    }
}

const spin_wheel = {
    type: jsPsychHtmlKeyboardResponse,
    choices: " ",
    stimulus: function() {
        return spin_stimulus(jsPsych.timelineVariable("buyin"), jsPsych.timelineVariable("bet"))
    },
    trial_duration: 4500,
    on_load: function() {
        setTimeout(function() {
            document.getElementById("wheel").style.transition = "rotate 4000ms ease-out"
            document.getElementById("wheel").style.rotate = `${num_spins * 360 + current_rotation}deg`
        }, 1)
    },
    data: {
        type_of_trial: "spin_wheel",
        subject_id: subject_id
    }
}

const see_outcome = {
    type: jsPsychSurveyMultiChoice,
    preamble: function() {
        return outcome_stimulus(jsPsych.timelineVariable("buyin"), jsPsych.timelineVariable("bet"), jsPsych.timelineVariable("outcome"))
    },
    questions: function() {
        return outcome_questions()
    },
    on_start: function() {
        setTimeout(() => {
            for (let i = 0; i < 7; i ++) {
                let label = document.querySelector("#jspsych-survey-multi-choice-option-2-" + i + " label")
                let br = document.createElement("br")
    
                label.insertBefore(br, label.childNodes[1])

                if (i == 0) {
                    label.appendChild(document.createElement("br"))
                    label.appendChild(document.createTextNode("Completely false"))
                }

                if (i == 6) {
                    label.appendChild(document.createElement("br"))
                    label.appendChild(document.createTextNode("Completely true"))
                }
            }
        }, 1)
    },
    on_finish: function(data) {
        update_pot(jsPsych.timelineVariable("buyin"), jsPsych.timelineVariable("bet"), jsPsych.timelineVariable("outcome"))

        data.manip_check = dvs.manip_check.indexOf(data.response.manip_check)
        data.truth_bn = dvs.truth_bn.indexOf(data.response.truth_bn)
        data.truth_lk = dvs.truth_lk.indexOf(data.response.truth_lk)
        data.minimum = current_minimum
        data.report = current_report
        data.truth = current_truth
        data.wallet = pot
    },
    data: {
        type_of_trial: "measures",
        buyin: jsPsych.timelineVariable("buyin"),
        bet: jsPsych.timelineVariable("bet"),
        result: jsPsych.timelineVariable("outcome"),
        cons: jsPsych.timelineVariable("cons"),
        outcome_valence: jsPsych.timelineVariable("outcome_valence"),
        error: jsPsych.timelineVariable("error"),
        subject_id: subject_id
    }
}

const decider_task = {
    timeline: [enter_minimum, see_report, see_wheel, spin_wheel, see_outcome],
    timeline_variables: decider_conditions,
    // randomize_order: true
}

const see_outcome_prac = {
    type: jsPsychSurveyMultiChoice,
    preamble: function() {
        return outcome_stimulus(jsPsych.timelineVariable("buyin"), jsPsych.timelineVariable("bet"), jsPsych.timelineVariable("outcome"))
    },
    questions: function() {
        return outcome_questions()
    },
    on_start: function() {
        setTimeout(() => {
            for (let i = 0; i < 7; i ++) {
                let label = document.querySelector("#jspsych-survey-multi-choice-option-2-" + i + " label")
                let br = document.createElement("br")
    
                label.insertBefore(br, label.childNodes[1])

                if (i == 0) {
                    label.appendChild(document.createElement("br"))
                    label.appendChild(document.createTextNode("Completely false"))
                }

                if (i == 6) {
                    label.appendChild(document.createElement("br"))
                    label.appendChild(document.createTextNode("Completely true"))
                }
            }
        }, 1)
    },
    on_finish: function(data) {
        update_pot(jsPsych.timelineVariable("buyin"), jsPsych.timelineVariable("bet"), jsPsych.timelineVariable("outcome"))

        data.manip_check = dvs.manip_check.indexOf(data.response.manip_check)
        data.truth_bn = dvs.truth_bn.indexOf(data.response.truth_bn)
        data.truth_lk = dvs.truth_lk.indexOf(data.response.truth_lk)
        data.minimum = current_minimum
        data.report = current_report
        data.truth = current_truth
    },
    data: {
        type_of_trial: "measures_prac",
        buyin: jsPsych.timelineVariable("buyin"),
        bet: jsPsych.timelineVariable("bet"),
        outcome: jsPsych.timelineVariable("outcome"),
        cons: jsPsych.timelineVariable("cons"),
        valence: jsPsych.timelineVariable("valence"),
        error: jsPsych.timelineVariable("error"),
        gain_loss: jsPsych.timelineVariable("gainloss"),
        subject_id: subject_id
    }
}

const decider_task_prac = {
    timeline: [enter_minimum, see_report, see_wheel, spin_wheel, see_outcome_prac],
    timeline_variables: [
        {
            "bet": 0,
            "outcome": 0,
            "cons": 1,
            "valence": "positive",
            "gainloss": 0,
            "error": 4,
            "buyin": 17
        },
        {
            "bet": 1,
            "outcome": 1,
            "cons": 0,
            "valence": "neutral",
            "gainloss": 1,
            "error": 6,
            "buyin": 9
        }
    ],
    randomize_order: true
}

// DEMOGRAPHICS, DEBRIEF, FINAL ITEMS
const bonus_report = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function() {
        return bonus_report_stimulus()
    },
    choices: ["Ok"],
    on_load: function() {
        document.getElementById("jspsych-content").style.margin = "auto"
    },
    on_finish: function(data) {
        document.getElementById("jspsych-content").style.margin = "50px auto"

        data.earnings = earnings
        data.wallet = pot
        data.bonus = pot + earnings
    },
    data: {
        type_of_trial: "bonus_report",
        subject_id: subject_id
    }
}

const demographics = {
    type: jsPsychSurveyHtmlForm,
    preamble: "The following questions are optional, but should be answered thruthfully.",
    html: function() {
        return demographics_questions
    },
    data: {
        type_of_trial: "demographics",
        subject_id: subject_id
    },
    on_finish: function(data) {
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
    }
}

const debrief = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function() {
        return debrief_html
    },
    choices: ["Continue"],
    data: {
        type_of_trial: "debrief",
        subject_id: subject_id
    }
}

const feedback = {
    type: jsPsychSurveyHtmlForm,
    preamble: "We are in the process of improving this study, and we would love any feedback you have about it.",
    html: feedback_questions,
    on_finish: function(data) {
        // populate data
        data.understand = data.response.understandable
        data.confusing = data.response.confusing
        data.annoying = data.response.annoying
        data.issues = data.response.issues
        data.other_feedback = data.response.other_feedback
    },
    data: {
        type_of_trial: "feedback",
        subject_id: subject_id
    }
}

// const truth_survey_general = {
//     type: jsPsychSurveyHtmlForm,
//     preamble: "Please answer the following questions honestly.",
//     html: truth_survey_general_questions,
//     on_finish: function(data) {
//         // populate data
//         data.gen_self_cons = data.response.self_cons
//         data.gen_other_cons = data.response.other_cons
//         data.gen_should_cons = data.response.should_cons
//     },
//     data: {
//         type_of_trial: "truth_survey",
//         subject_id: subject_id
//     }
// }

const truth_survey_specific = {
    type: jsPsychSurveyHtmlForm,
    preamble: "Please answer the following questions honestly.",
    html: truth_survey_specific_questions,
    on_finish: function(data) {
        // populate data
        data.spec_self_cons = data.response.self_cons
        data.spec_other_cons = data.response.other_cons
        data.spec_should_cons = data.response.should_cons
    },
    data: {
        type_of_trial: "truth_survey",
        subject_id: subject_id
    }
}

// const truth_survey = {
//     timeline: Math.random() > 0.5 ? [truth_survey_specific, truth_survey_general] : [truth_survey_general, truth_survey_specific]
// }

const less_than_half = {
    type: jsPsychSurveyHtmlForm,
    preamble: "Please answer the following questions honestly.",
    html: less_than_half_questions,
    on_load: function() {
        if (skip_less_than_half) {
            jsPsych.finishTrial()
        }
    },
    on_finish: function(data) {
        // populate data
        if (!skip_less_than_half) {
            data.low_thresholds = data.response.low_thresholds
        } else {
            data.low_thresholds = ""
        }
    },
    data: {
        type_of_trial: "less_than_half",
        subject_id: subject_id
    }
}

const back_to_prolific = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
        Thank you for participating in this study. Your response has been recorded.
        <br>
        <br>
        If the button below does not automatically enter your completion code, please copy and paste this code into Prolific: CS3EJJ9B
        <br>
        <br>
    `,
    choices: ["Back to Prolific"],
    button_html: `<button class="jspsych-btn" onclick="window.open('https://app.prolific.com/submissions/complete?cc=CCCYIGU3', '_blank')">%choice%</button>`,
    on_load: function() {
        document.getElementById("jspsych-content").style.margin = "auto"
    },
    on_finish: function() {
        jsPsych.endExperiment(
            "Thank you for your participation!.<br>Your completion code is CCCYIGU3"
        )
    },
    data: {
        type_of_trial: "back_to_prolific",
        subject_id: subject_id
    }
}

// data pipe
const save_data_reporter = {
    type: jsPsychPipe,
    action: "save",
    experiment_id: "JcVrcc15Vyhc",
    filename: `${subject_id}_reporter.csv`,
    data_string: () => jsPsych.data.get().csv(),
    data: {
        type_of_trial: "data_pipe",
        subject_id: subject_id
    }
}

const save_data_decider = {
    type: jsPsychPipe,
    action: "save",
    experiment_id: "JcVrcc15Vyhc",
    filename: `${subject_id}_decider.csv`,
    data_string: () => jsPsych.data.get().csv(),
    data: {
        type_of_trial: "data_pipe",
        subject_id: subject_id
    }
}

const save_data_final = {
    type: jsPsychPipe,
    action: "save",
    experiment_id: "JcVrcc15Vyhc",
    filename: `${subject_id}_final.csv`,
    data_string: () => jsPsych.data.get().csv(),
    data: {
        type_of_trial: "data_pipe",
        subject_id: subject_id
    }
}

// define and run the experiment
var experiment = []

experiment.push(
    // consent,
    // prolific_id,
    // first_instructions,
    // begin_reporter,
    // reporter_task_prac,
    // second_instructions,
    // decider_task_prac,
    // comprehension_loop,
    // move_to_experiment_reporter,
    // begin_reporter,
    // reporter_task,
    // attention,
    // save_data_reporter,
    // move_to_experiment_decider,
    decider_task,
    save_data_decider,
    bonus_report,
    truth_survey_specific,
    less_than_half,
    demographics,
    debrief,
    feedback,
    save_data_final,
    back_to_prolific
)

jsPsych.run(experiment)