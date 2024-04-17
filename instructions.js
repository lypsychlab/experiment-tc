// initialize jsPsych
const jsPsych = initJsPsych(
    {
        on_finish: function() {
            jsPsych.data.displayData()
        }
    }
)

// define instructions
const first_instructions = {
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
            instructions_page7,
            instructions_page8,
            instructions_page9,
            instructions_page10,
            instructions_page11,
        )

        return instructions_pages
    },
    allow_keys: false,
    show_clickable_nav: true
}

var experiment = []

experiment.push(
    first_instructions,
    first_instructions,
    first_instructions,
    first_instructions,
    first_instructions,
    first_instructions,
    first_instructions,
    first_instructions,
    first_instructions,
    first_instructions,
    first_instructions,
    first_instructions,
    first_instructions,
    first_instructions,
    first_instructions,
    first_instructions,
    first_instructions
)

jsPsych.run(experiment)