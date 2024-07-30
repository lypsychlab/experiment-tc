// initialize jsPsych
const jsPsych = initJsPsych(
    {
        on_finish: function() {
            jsPsych.data.displayData()
        }
    }
)

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
        type_of_trial: "instructions"
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
        type_of_trial: "instructions"
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

var experiment = []

experiment.push(
    first_instructions,
    second_instructions,
    first_instructions,
    second_instructions,
    first_instructions,
    second_instructions,
    first_instructions,
    second_instructions,
    first_instructions,
    second_instructions,
    first_instructions,
    second_instructions,
    first_instructions,
    second_instructions,
    first_instructions,
    second_instructions,
    first_instructions,
    second_instructions,
    first_instructions,
    second_instructions,
    first_instructions,
    second_instructions,
    first_instructions,
    second_instructions,
    first_instructions,
    second_instructions,
    first_instructions,
    second_instructions,
    first_instructions,
    second_instructions,
    first_instructions,
    second_instructions,
    first_instructions,
    second_instructions,
    first_instructions,
    second_instructions,
    first_instructions,
    second_instructions,
    first_instructions,
    second_instructions,
    first_instructions,
    second_instructions,
    first_instructions,
    second_instructions,
)

jsPsych.run(experiment)