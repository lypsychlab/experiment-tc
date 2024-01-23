// custom jspsych styling
function style_jspsych() {
    document.getElementById("jspsych-content").style.margin = "50px auto"
    document.getElementById("jspsych-content").style.width = "900px"
}

function unstyle_jspsych() {
    document.getElementById("jspsych-content").style.margin = "auto"
    document.getElementById("jspsych-content").style.width = null
}

// consent
const consent_html = `
    <p style="text-align:left;">
        You are being asked to participate in a research study titled 
        "Truth in Games." You were selected to participate in 
        this project because you are an adult over age 18. This study is sponsored by 
        Boston College and the John Templeton Foundation.
    </p>
    <p style="text-align: left;">
        The purpose of this study is to understand how we weigh information what other people say. 
        This study will be conducted through this online survey. The survey 
        should take you 10 minutes to complete. There are no direct 
        benefits to you, but you may feel gratified knowing that you helped further 
        the scholarly work in this research area, and you will be compensated $2.00 for your 
        participation. There are no costs to you associated with your participation.
    </p>
    <p style="text-align: left;">
        The researchers do not believe participation would entail any risks or 
        discomforts beyond those ordinarily encountered in everyday life.
    </p>
    <p style="text-align: left;">
        This Principal Investigator, Dr. Liane Young, will exert all reasonable efforts 
        to keep your responses and your identity confidential. We will not maintain 
        within our research data any information that uniquely identifies you, such as 
        your name, location, or Internet Protocol (IP) address. In any report we 
        publish, we will not include any information that will make it possible to 
        identify a participant. Data collected from the experiment will be coded to remove your name and any other 
        personal identifiers. All records will be secured in a locked cabinet in our lab. 
        The Institutional Review Board at Boston College and internal Boston College 
        auditors may review the research records. State or federal laws or court 
        orders may also require that information from research study records be 
        released. Otherwise, the researchers will not release to others any 
        information that could indicate your identity unless you give your permission, 
        or unless the researchers become legally required to do so.
    </p>
    <p style="text-align: left;">
        Although the survey will not prompt you directly to identify yourself by 
        name, email address or the like, the survey will include several demographic 
        items that would prompt you to provide certain demographic information, 
        such as your age, gender, ethnicity, education level and the like. In 
        combination, responses to such questions could suggest your identity. 
        Regardless, please know that the researchers will make no purposeful effort 
        to discern your identity based on such information. Additionally, please note 
        that you may opt to leave any such questions blank.
    </p>
    <p style="text-align: left;">
        Your participation is voluntary. If you choose not to participate it will not 
        affect your relations with Boston College. Some questions on the survey, 
        such as comprehension questions, may be required in order to complete the 
        survey and receive compensation. However, you may still choose to end 
        your participation in the study at any time. If you have questions or concerns 
        concerning this research you may contact the Principal Investigator at 
        <a href="tel:16175520240">+1 (617) 552-0240</a>
        or <a href="mailto:liane.young@bc.edu">liane.young@bc.edu</a>. If you have 
        questions about your rights as a research participant, you may contact the
        Office for Research Protections, Boston College, at 
        <a href="tel:16175524778">+1 (617) 552-4778</a> or
        <a href="mailto:irb@bc.edu">irb@bc.edu</a>.
    </p>
    <p style="text-align: left;">
        If you agree to the statements above and agree to participate in this study,
        please select the "Consent given" button below to continue.
    </p>
`

// instructions html
const instructions_page1 = `
    <p style="text-align: left">
        <strong>Overview:</strong>
        <br>
        In this experiment, you will observe and evaluate a player's actions in a decision-making game.
        Specifically, you will see decisions made by a player from a previous experiment and evaluate the information that the player was working with at the time.
        <br>
        <br>
        <strong>Basic rules of the game:</strong>
        <br>
        The player started with a score of 0 coins. Their goal was to gain as many coins as they could by collecting payments. 
        Each round, they chose between two options. Option 1 was labeled with the exact amount of coins that it would award, 
        but Option 2 was labeled with a rough approximation of the amount of coins it would award.
        <br>
        <br>
        So, if the player chose Option 1, they were guaranteed to gain the amount of coins displayed.
        But if they chose Option 2, they only knew that they would gain somewhere near the amount of coins displayed.
        <br>
        <br>
    </p>
`

const instructions_page2 = `
    <p style="text-align: left">
        <strong>What you will do:</strong>
        <br>
        In this experiment, you will go through each round that a previous player played. 
        First, you will see the exact value of Option 1 and the approximate value of Option 2. Then, you will see which option the previous player chose. 
        Finally, you will see the exact value of Option 2, which the previous player <u>did not see, even after making their choice</u>.
        <br>
        <br>
        Once you have all the information, you will be asked some questions about the round. After you answer them, the next round will begin.
        <br>
        <br>
        Finally, to make the game more interesting for you, your bonus for this experiment will grow as the previous player collects payments. 
        Specifically, for every in-game coin that the previous player gained, your bonus will increase by ${ratios[which_list]} cents. 
        For example, if the previous player's final score was 2500 coins, your bonus will be $${(2500 * ratios[which_list] / 100).toFixed(2)}.
        The experiment will keep track of your score throughout, and the final value will be converted to a bonus.
        <br>
        <br>
        Click "Next" to see an example round of the game.
        <br>
        <br>
    </p>
`

const instructions_page3 = `
    <p>
        <u>EXAMPLE ROUND</u>
    </p>
    <div id="payments-wrapper" class="wrapper">
        <div id="payment-1" class="payment">
            <u>Option 1</u>
            <br>
            EXACT VALUE: 979 coins
        </div>
        <div id="payment-2" class="payment">
            <u>Option 2</u>
            <br>
            <i class="fa-solid fa-comment-dots"></i> APPROXIMATE VALUE: 1000 coins
        </div>
    </div>
    <div id="outcome-wrapper" class="wrapper">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <hr>
        <br>
        In each trial, you will first see Option 1 and Option 2 in gray boxes.
        <br>
        <br>
        <u>Note:</u> in this tutorial, you have to click the "Next" button to see the next bit of information, 
        but outside of this tutorial, the screen will automatically update.
        <br>
        <br>
    </div>
`

const instructions_page4 = `
    <p>
        <u>EXAMPLE ROUND</u>
    </p>
    <div id="payments-wrapper" class="wrapper">
        <div id="payment-1" class="payment">
            <u>Option 1</u>
            <br>
            EXACT VALUE: 979 coins
        </div>
        <div id="payment-2" class="payment chosen">
            <u>Option 2</u>
            <br>
            <i class="fa-solid fa-comment-dots"></i> APPROXIMATE VALUE: 1000 coins
        </div>
    </div>
    <div id="outcome-wrapper" class="wrapper">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <hr>
        <br>
        Then, the option that the previous player chose will be highlighted in blue.
        <br>
        <br>
    </div>
`

const instructions_page5 = `
    <p>
        <u>EXAMPLE ROUND</u>
    </p>
    <div id="payments-wrapper" class="wrapper">
        <div id="payment-1" class="payment">
            <u>Option 1</u>
            <br>
            EXACT VALUE: 979 coins
        </div>
        <div id="payment-2" class="payment chosen">
            <u>Option 2</u>
            <br>
            <i class="fa-solid fa-comment-dots"></i> APPROXIMATE VALUE: 1000 coins
            <br>
            <br>
            EXACT VALUE: 958 coins
        </div>
    </div>
    <div id="outcome-wrapper" class="wrapper">
        <br>
        <br>
        <br>
        <br>
        <hr>
        <br>
        Then, the exact value of Option 2 will be revealed to you.
        <br>
        <br>
    </div>
`

const instructions_page6 = `
    <p>
        <u>EXAMPLE ROUND</u>
    </p>
    <div id="payments-wrapper" class="wrapper">
        <div id="payment-1" class="payment">
            <u>Option 1</u>
            <br>
            EXACT VALUE: 979 coins
        </div>
        <div id="payment-2" class="payment chosen">
            <u>Option 2</u>
            <br>
            <i class="fa-solid fa-comment-dots"></i> APPROXIMATE VALUE: 1000 coins
            <br>
            <br>
            EXACT VALUE: 958 coins
        </div>
    </div>
    <div id="outcome-wrapper" class="wrapper">
        The chosen option made you <span style="background-color: tomato"> 21 fewer coins</span> than the other option would have made you.
        <br>
        <br>
        Your score: 0 coins <span style="font-weight: bold"> &rarr; </span> 958 coins
        <br>
        <br>
        <hr>
        <br>
        Finally, you will see a summary of how well you fared relative to the unchosen option, and your score will be updated.
        <br>
        <br>
    </div>
`

const instructions_page7 = `
    <p>
        <u>EXAMPLE ROUND</u>
    </p>
    <div id="payments-wrapper" class="wrapper">
        <div id="payment-1" class="payment">
            <u>Option 1</u>
            <br>
            EXACT VALUE: 979 coins
        </div>
        <div id="payment-2" class="payment chosen">
            <u>Option 2</u>
            <br>
            <i class="fa-solid fa-comment-dots"></i> APPROXIMATE VALUE: 1000 coins
            <br>
            <br>
            EXACT VALUE: 958 coins
        </div>
    </div>
    <div id="outcome-wrapper" class="wrapper">
        The chosen option made you <span style="background-color: tomato"> 21 fewer coins</span> than the other option would have made you.
        <br>
        <br>
        Your score: 0 coins <span style="font-weight: bold"> &rarr; </span> 958 coins
        <br>
        <br>
        <hr>
        <br>
        In the above example, the player could either choose Option 1 for exactly 979 coins or Option 2 for approximately 1000 coins.
        They chose Option 2, hoping for something close to 1000 coins, but it turned out that the exact value of Option 2 was only 958 coins.
        So, the player (and you) gained <span style="background-color: tomato">21 fewer coins</span> than the unchosen option would have given them.
        <br>
        <br>
    </div>
`

const instructions_page8 = `
    <p>
        <u>EXAMPLE ROUND</u>
    </p>
    <div id="payments-wrapper" class="wrapper">
        <div id="payment-1" class="payment">
            <u>Option 1</u>
            <br>
            EXACT VALUE: 979 coins
        </div>
        <div id="payment-2" class="payment chosen">
            <u>Option 2</u>
            <br>
            <i class="fa-solid fa-comment-dots"></i> APPROXIMATE VALUE: 1000 coins
            <br>
            <br>
            EXACT VALUE: 958 coins
        </div>
    </div>
    <div id="outcome-wrapper" class="wrapper">
        The chosen option made you <span style="background-color: tomato"> 21 fewer coins</span> than the other option would have made you.
        <br>
        <br>
        Your score: 0 coins <span style="font-weight: bold"> &rarr; </span> 958 coins
        <br>
        <br>
        <hr>
        <br>
        <p style="text-align: left">
            <strong>How were the approximations calculated?</strong>
            <br>
            In each round, the approximation of Option 2 was generated by a random other participant (<u>NOT</u> the player who was choosing between Option 1 and Option 2).
            <br>
            <br>
            These participants were shown the exact values for the options, and they were asked to write down approximations of them.
            We did not specify how they were supposed to approximate the values.
            So, while one participant might approximate an exact value of 86 to 90, another participant might approximate it to 85, 100, or another number they thought was reasonable.
            <br>
            <br>
            Click "Next" to answer a few short questions about the rules of the game in order to make sure the explanation was clear.
            <br>
            <br>
        </p>
    </div>
`

function incorrect_response_stimulus() {
    let checked = [["", "", ""], ["", ""], ["", "", ""], ["", "", ""]]
    let correct = ["black", "black", "black", "black"]

    for (let i = 0; i < 4; i++) {
        checked[i][comprehension.questions[i].options.indexOf(last_answers[i])] = "checked"

        if (!last_answers_correct[i]) {
            correct[i] = "firebrick"
        }
    }

    let string = `
        <div style="text-align: left">
            You answered at least one question incorrectly. 
            In order to make sure our data is valid, we need to know that you understand the game.
            The questions that you answered incorrectly are highlighted below in red. 
            Please look back through the instructions to find the answers to those questions.
            Thank you for your cooperation!
            <br>
            <br>
            <form autocomplete="off">
                <div style="color: ${correct[0]}">
                    <p>In each round, the previous player had to choose between:</p>
                    <div>
                        <label>
                            <input ${checked[0][0]} disabled type="radio" name="jspsych-survey-multi-choice-response-0" id="jspsych-survey-multi-choice-response-0-0" value="Two approximate amounts of money." required="">
                            Two approximate amounts of money.
                        </label>
                    </div>
                    <div>
                        <label>
                            <input ${checked[0][1]} disabled type="radio" name="jspsych-survey-multi-choice-response-0" id="jspsych-survey-multi-choice-response-0-1" value="One exact amount of money and one approximate amount of money." required="">
                            One exact amount of money and one approximate amount of money.
                        </label>
                    </div>
                    <div>
                        <label>
                            <input ${checked[0][2]} disabled type="radio" name="jspsych-survey-multi-choice-response-0" id="jspsych-survey-multi-choice-response-0-2" value="One approximate amount of money and the chance to double their money in the next round." required="">
                            One approximate amount of money and the chance to double their money in the next round.
                        </label>
                    </div>
                </div>
                <div style="color: ${correct[1]}">
                    <p>Did the previous player know which option was exact and which option was approximate?</p>
                    <div>
                        <label>
                            <input ${checked[1][0]} disabled type="radio" name="jspsych-survey-multi-choice-response-1" id="jspsych-survey-multi-choice-response-1-0" value="Yes" required="">
                            Yes
                        </label>
                    </div>
                    <div id="jspsych-survey-multi-choice-option-1-1" class="jspsych-survey-multi-choice-option">
                        <label class="jspsych-survey-multi-choice-text" for="jspsych-survey-multi-choice-response-1-1">
                            <input ${checked[1][1]} disabled type="radio" name="jspsych-survey-multi-choice-response-1" id="jspsych-survey-multi-choice-response-1-1" value="No" required="">
                            No
                        </label>
                    </div>
                </div>
                <div style="color: ${correct[2]}">
                    <p>How was the approximate amount of money displayed in each round calculated?</p>
                    <div>
                        <label>
                            <input ${checked[2][0]} disabled type="radio" name="jspsych-survey-multi-choice-response-2" id="jspsych-survey-multi-choice-response-2-0" value="The exact amount for each round was rounded to the nearest multiple of ten." required="">
                            The exact amount for each round was rounded to the nearest multiple of ten.
                        </label>
                    </div>
                    <div>
                        <label>
                            <input ${checked[2][1]} disabled type="radio" name="jspsych-survey-multi-choice-response-2" id="jspsych-survey-multi-choice-response-2-1" value="For each round, a different random participant provided an approximate value of the exact amount." required="">
                            For each round, a different random participant provided an approximate value of the exact amount.
                        </label>
                    </div>
                    <div>
                        <label>
                            <input ${checked[2][2]} disabled type="radio" name="jspsych-survey-multi-choice-response-2" id="jspsych-survey-multi-choice-response-2-2" value="It was chosen by a random number generator." required="">
                            It was chosen by a random number generator.
                        </label>
                    </div>
                </div>
                <div style="color: ${correct[3]}">
                    <p>Each round, your bonus will increase in proportion to:</p>
                    <div>
                        <label>
                            <input ${checked[3][0]} disabled type="radio" name="jspsych-survey-multi-choice-response-3" id="jspsych-survey-multi-choice-response-3-0" value="The choices you make." required="">
                            The choices you make.
                        </label>
                    </div>
                    <div>
                        <label>
                            <input ${checked[3][1]} disabled type="radio" name="jspsych-survey-multi-choice-response-3" id="jspsych-survey-multi-choice-response-3-1" value="An amount chosen by a random number generator." required="">
                            An amount chosen by a random number generator.
                        </label>
                    </div>
                    <div>
                        <label>
                            <input ${checked[3][2]} disabled type="radio" name="jspsych-survey-multi-choice-response-3" id="jspsych-survey-multi-choice-response-3-2" value="The amount the previous player gained based on their choice." required="">
                            The amount the previous player gained based on their choice.
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <br>
        <br>
    `

    return string
}

// stimulus for trial_claims
function claims_stimulus(exact, round) {
    // convert variables to usable format
    exact = parseInt(exact)
    round = parseInt(round)

    let string = `
        <div id="payments-wrapper" class="wrapper">
            <div id="payment-1" class="payment">
                <u>Option 1</u>
                <br>
                EXACT VALUE: ${exact} coins
            </div>
            <div id="payment-2" class="payment">
                <u>Option 2</u>
                <br>
                <i class="fa-solid fa-comment-dots"></i> APPROXIMATE VALUE: ${round} coins
            </div>
        </div>
    `

    return string
}

// stimulus for trial_outcome
function outcome_stimulus_choice(exact, round, choice) {
    // convert variables to usable format
    exact = parseInt(exact)
    round = parseInt(round)

    let choices = ["", ""]
    if (choice == "exact") {
        choices[0] = "chosen"
    } else {
        choices[1] = "chosen"
    }

    let string = `
        <div id="payments-wrapper" class="wrapper">
            <div id="payment-1" class="payment ${choices[0]}">
                <u>Option 1</u>
                <br>
                EXACT VALUE: ${exact} coins
            </div>
            <div id="payment-2" class="payment ${choices[1]}">
                <u>Option 2</u>
                <br>
                <i class="fa-solid fa-comment-dots"></i> APPROXIMATE VALUE: ${round} coins
            </div>
        </div>
    `

    return string
}

function outcome_stimulus_payouts(exact, round, truth, choice) {
    // convert variables to usable format
    exact = parseInt(exact)
    round = parseInt(round)
    truth = parseInt(truth)

    let choices = ["", ""]
    if (choice == "exact") {
        choices[0] = "chosen"
    } else {
        choices[1] = "chosen"
    }

    let string = `
        <div id="payments-wrapper" class="wrapper">
            <div id="payment-1" class="payment ${choices[0]}">
                <u>Option 1</u>
                <br>
                EXACT VALUE: ${exact} coins
            </div>
            <div id="payment-2" class="payment ${choices[1]}">
                <u>Option 2</u>
                <br>
                <i class="fa-solid fa-comment-dots"></i> APPROXIMATE VALUE: ${round} coins
                <br>
                <br>
                EXACT VALUE: ${truth} coins
            </div>
        </div>
    `

    return string
}

function outcome_stimulus_report(exact, round, truth, choice) {
    // convert variables to usable format
    exact = parseInt(exact)
    round = parseInt(round)
    truth = parseInt(truth)

    let report_number = Math.abs(exact - truth)
    let report_text = "more"
    let report_highlight = "lightgreen"
    let report_payout = truth

    if ((choice == "exact" & exact < truth) || (choice == "round" & truth < exact)) {
        report_text = "fewer"
        report_highlight = "tomato"
    }

    let choices = ["", ""]
    if (choice == "exact") {
        choices[0] = "chosen"
        report_payout = exact
    } else {
        choices[1] = "chosen"
    }

    let string = `
        <div id="payments-wrapper" class="wrapper">
            <div id="payment-1" class="payment ${choices[0]}">
                <u>Option 1</u>
                <br>
                EXACT VALUE: ${exact} coins
            </div>
            <div id="payment-2" class="payment ${choices[1]}">
                <u>Option 2</u>
                <br>
                <i class="fa-solid fa-comment-dots"></i> APPROXIMATE VALUE: ${round} coins
                <br>
                <br>
                EXACT VALUE: ${truth} coins
            </div>
        </div>
        <div id="outcome-wrapper" class="wrapper">
            The chosen option made you <span style="background-color: ${report_highlight}"> ${report_number} ${report_text} coins</span> than the other option would have made you.
            <br>
            <br>
            Your score: ${score} coins <span style="font-weight: bold"> &rarr; </span> ${score + report_payout} coins
        </div>
    `

    return string
}

function outcome_questions(round, truth) {
    round = parseInt(round)
    truth = parseInt(truth)

    questions = [
        {
            prompt: `<strong>A previous participant approximated the exact value of Option 2 from ${truth} to ${round}.</strong> <br> <br> Would you consider the information provided by the previous participant to be true or false?`,
            options: [
                "False",
                "True"
            ],
            required: true
        },
        {
            prompt: `How true or false would you consider the information provided by the previous participant to be?`,
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
        },
        {
            prompt: `Do you think the player would have chosen differently if they had known the exact value of Option 2 instead?`,
            options: [
                "No",
                "Yes"
            ],
            required: true
        }
    ]

    return questions
}

const demographics_questions = `
    <div style="text-align: left; max-width: 800px">
        <br>
        What is your age in years?
        <br>
        <input name="age" type="number" />
        <br>
        <br>
        With which gender do you identify?
        <div>
            <input name="gender" type="radio" value="man" id="man" />
            <label for="man">Man</label>
        </div>
        <div>
            <input name="gender" type="radio" value="woman" id="woman" />
            <label for="woman">Woman</label>
        </div>
        <div>
            <input name="gender" type="radio" value="nonbinary" id="nonbinary" />
            <label for="nonbinary">Nonbinary person</label>
        </div>
        <div>
            <input name="gender" type="radio" value="not_listed" id="not_listed" />
            <label for="not_listed">An identity not listed</label>
            <input name="unlisted_gender" type="text" />
        </div>
        <div>
            <input name="gender" type="radio" value="not_disclose_gender" id="not_disclose_gender" />
            <label for="not_disclose_gender">Prefer not to disclose</label>
        </div>
        <br>
        Please indicate how you identify yourself (Choose all that apply).
        <div>
            <input name="black_african_american" id="black_african_american" type="checkbox" />
            <label for="black_african_american">Black or African American</label>
        </div>
        <div>
            <input name="east_asian" id="east_asian" type="checkbox" />
            <label for="east_asian">East Asian</label>
        </div>
        <div>
            <input name="hispanic_latinx" id="hispanic_latinx" type="checkbox" />
            <label for="hispanic_latinx">Hispanic or Latina/o/x/e</label>
        </div>
        <div>
            <input name="ind_amer_amer_indian_alaska" id="ind_amer_amer_indian_alaska" type="checkbox" />
            <label for="ind_amer_amer_indian_alaska">Indigenous American, American Indian, or Alaska Native</label>
        </div>
        <div>
            <input name="middle_eastern_north_african" id="middle_eastern_north_african" type="checkbox" />
            <label for="middle_eastern_north_african">Middle Eastern or North African</label>
        </div>
        <div>
            <input name="native_hawaiian_pacific_islander" id="native_hawaiian_pacific_islander" type="checkbox" />
            <label for="native_hawaiian_pacific_islander">Native Hawaiian or other Pacific Islander</label>
        </div>
        <div>
            <input name="south_asian" id="south_asian" type="checkbox" />
            <label for="south_asian">South Asian</label>
        </div>
        <div>
            <input name="southeast_asian" id="southeast_asian" type="checkbox" />
            <label for="southeast_asian">Southeast Asian</label>
        </div>
        <div>
            <input name="white" id="white" type="checkbox" />
            <label for="white">White</label>
        </div>
        <div>
            <input name="other_race_ethnicity" id="other_race_ethnicity" type="checkbox" />
            <label for="other_race_ethnicity">Other</label>
            <input name="other_race_ethnicity_text" type="text" />
        </div>
        <div>
            <input name="not_disclose_race_ethnicity" id="not_disclose_race_ethnicity" type="checkbox" />
            <label for="not_disclose_race_ethnicity">Prefer not to disclose</label>
        </div>
        <br>
        What is your household income per year?
        <div>
            <input name="income" type="radio" id="00000" value="00000" />
            <label for="00000">< $10,000</label>
        </div>
        <div>
            <input name="income" type="radio" id="10000" value="10000" />
            <label for="10000">$10,000 to $19,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="20000" value="20000" />
            <label for="20000">$20,000 to $29,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="30000" value="30000" />
            <label for="30000">$30,000 to $39,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="40000" value="40000" />
            <label for="40000">$40,000 to $49,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="50000" value="50000" />
            <label for="50000">$50,000 to $59,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="60000" value="60000" />
            <label for="60000">$60,000 to $69,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="70000" value="70000" />
            <label for="70000">$70,000 to $79,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="80000" value="80000" />
            <label for="80000">$80,000 to $89,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="90000" value="90000" />
            <label for="90000">$90,000 to $99,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="100000" value="100000" />
            <label for="100000">$100,000 to $109,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="110000" value="110000" />
            <label for="110000">$110,000 to $119,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="120000" value="120000" />
            <label for="120000">$120,000 to $129,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="130000" value="130000" />
            <label for="130000">$130,000 to $139,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="140000" value="140000" />
            <label for="140000">$140,000 to $149,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="150000" value="150000" />
            <label for="150000">$150,000 to $159,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="160000" value="160000" />
            <label for="160000">$160,000 to $169,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="170000" value="170000" />
            <label for="170000">$170,000 to $179,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="180000" value="180000" />
            <label for="180000">$180,000 to $189,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="190000" value="190000" />
            <label for="190000">$190,000 to $199,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="200000" value="200000" />
            <label for="200000">> $200,000</label>
        </div>
        <br>
        What is the highest level of education you have received? (If you're currently enrolled in school, please indicate the highest degree you have received.)
        <div>
            <input name="education" type="radio" id="less_hs" value="0" />
            <label for="less_hs">Less than a high school diploma</label>
        </div>
        <div>
            <input name="education" type="radio" id="hs" value="1" />
            <label for="hs">High school degree or equivalent (e.g., GED)</label>
        </div>
        <div>
            <input name="education" type="radio" id="some_college" value="2" />
            <label for="some_college">Some college, no degree</label>
        </div>
        <div>
            <input name="education" type="radio" id="assoc" value="3" />
            <label for="assoc">Associate Degree (e.g., AA, AS)</label>
        </div>
        <div>
            <input name="education" type="radio" id="bachelor" value="4" />
            <label for="bachelor">Bachelor's Degree (e.g., BA, BS)</label>
        </div>
        <div>
            <input name="education" type="radio" id="post_grad" value="5" />
            <label for="post_grad">Postgraduate Degree (e.g., Master's Degree, Professional Degree, Doctorate Degree)</label>
        </div>
        <br>
        Think of this ladder as representing where people stand in the United States. 
        At the top of the ladder are the people who have the most money, most education, and most respected jobs. 
        At the bottom are the people who have the least money, least education, and least respected jobs/ no job. 
        The higher up you are on this ladder, the closer you are to the people at the very top. 
        The lower you are, the closer you are to the people at the very bottom.
        <img src="Macarthur_subjective_SES" alt="Socio-economic ladder">
        <br>
        Please indicate below where you would place yourself on this ladder.
        <div>
            <input name="ses" type="radio" id="1" value="1" />
            <label for="1">1 (bottom rung)</label>
        </div>
        <div>
            <input name="ses" type="radio" id="2" value="2" />
            <label for="2">2</label>
        </div>
        <div>
            <input name="ses" type="radio" id="3" value="3" />
            <label for="3">3</label>
        </div>
        <div>
            <input name="ses" type="radio" id="4" value="4" />
            <label for="4">4</label>
        </div>
        <div>
            <input name="ses" type="radio" id="5" value="5" />
            <label for="5">5</label>
        </div>
        <div>
            <input name="ses" type="radio" id="6" value="6" />
            <label for="6">6</label>
        </div>
        <div>
            <input name="ses" type="radio" id="7" value="7" />
            <label for="7">7</label>
        </div>
        <div>
            <input name="ses" type="radio" id="8" value="8" />
            <label for="8">8</label>
        </div>
        <div>
            <input name="ses" type="radio" id="9" value="9" />
            <label for="9">9</label>
        </div>
        <div>
            <input name="ses" type="radio" id="10" value="10" />
            <label for="10">10 (top rung)</label>
        </div>
        <br>
        In politics today, do you consider yourself a:
        <div>
            <input name="party" type="radio" id="rep" value="rep" />
            <label for="rep">Republican</label>
        </div>
        <div>
            <input name="party" type="radio" id="dem" value="dem" />
            <label for="dem">Democrat</label>
        </div>
        <div>
            <input name="party" type="radio" id="ind" value="ind" />
            <label for="ind">Independent</label>
        </div>
        <div>
            <input name="party" type="radio" id="other_party" value="other_party" />
            <label for="other_party">Something else</label>
            <input name="other_party_text" type="text" />
        </div>
        <br>
        Politically, how liberal or conservative are you?
        <div>
            <input name="politics" type="radio" id="vlib" value="0" />
            <label for="vlib">Very liberal</label>
        </div>
        <div>
            <input name="politics" type="radio" id="lib" value="1" />
            <label for="lib">Liberal</label>
        </div>
        <div>
            <input name="politics" type="radio" id="slib" value="2" />
            <label for="slib">Somewhat liberal</label>
        </div>
        <div>
            <input name="politics" type="radio" id="mod" value="3" />
            <label for="mod">Moderate</label>
        </div>
        <div>
            <input name="politics" type="radio" id="scon" value="4" />
            <label for="scon">Somewhat conservative</label>
        </div>
        <div>
            <input name="politics" type="radio" id="con" value="5" />
            <label for="con">Conservative</label>
        </div>
        <div>
            <input name="politics" type="radio" id="vcon" value="6" />
            <label for="vcon">Very conservative</label>
        </div>
        <br>
        To what extent do you consider yourself to be religious?
        <div>
            <input name="religiosity" type="radio" id="nonrel" value="0" />
            <label for="nonrel">Not at all religious</label>
        </div>
        <div>
            <input name="religiosity" type="radio" id="srel" value="1" />
            <label for="srel">Slightly religious</label>
        </div>
        <div>
            <input name="religiosity" type="radio" id="mrel" value="2" />
            <label for="mrel">Moderately religious</label>
        </div>
        <div>
            <input name="religiosity" type="radio" id="vrel" value="3" />
            <label for="vrel">Very religious</label>
        </div>
        <div>
            <input name="religiosity" type="radio" id="unknown_rel" value="4" />
            <label for="unknown_rel">Don't know</label>
        </div>
    </div>
`

const feedback_questions = `
    <div style="text-align: left; max-width: 800px">
        <br>
        How easy or hard was it to understand the game you observed in this study?
        <div>
            <input name="understandable" type="radio" value="0" id="easy" />
            <label for="easy">Easy</label>
        </div>
        <div>
            <input name="understandable" type="radio" value="1" id="some_easy" />
            <label for="some_easy">Somewhat easy</label>
        </div>
        <div>
            <input name="understandable" type="radio" value="2" id="not_easy_not_hard" />
            <label for="not_easy_not_hard">Neither easy nor hard</label>
        </div>
        <div>
            <input name="understandable" type="radio" value="3" id="some_hard" />
            <label for="some_hard">Somewhat hard</label>
        </div>
        <div>
            <input name="understandable" type="radio" value="4" id="hard" />
            <label for="hard">Hard</label>
        </div>
        <br>
        Did you find anything in this study confusing?
        <br>
        <textarea name="confusing" id="confusing" rows="4" cols="100"> </textarea>
        <br>
        <br>
        Did you find anything in this study unpleasant or annoying?
        <br>
        <textarea name="annoying" id="annoying" rows="4" cols="100"> </textarea>
        <br>
        <br>
        Did you run into any technical issues or see anything that looked like an error?
        <br>
        <textarea name="issues" id="issues" rows="4" cols="100"> </textarea>
        <br>
        <br>
        Do you have any other feedback for us?
        <br>
        <textarea name="other_feedback" id="other_feedback" rows="4" cols="100"> </textarea>
        <br>
        <br>
    </div>
`

const debrief_html = `
<div style="text-align: left; width: 60%; margin: auto">
    <strong>What was this study about?</strong>
    <br>
    In this study, we were trying to better understand how people decide what information should qualify as true or false.
    <br>
    <br>
    It's important to note that the decisions you saw from a "previous player" were not in fact from a previous player. 
    We chose which option was selected in each round that you observed. We also determined what the approximate amount shown in Option 2 was. 
    These approximations were not in fact determined by previous participants.
    <br>
    <br>
    We said that these two features were determined by previous participants because we're interested in how people evaluate the truth of information in real-world scenarios.
    We wanted our participants in this study to believe that they were seeing approximations that real people had created and the downstream decisions that real people made based on those approximations.
    <br>
    <br>
    <strong>Why does it matter?</strong>
    <br>
    Your participation helps us answer research questions, which in turn has implications for public figures, policy, and law.
    We are committed to sharing our research findings in ways that are accessible and relevant to the public.
    <br>
    <br>    
    <strong>How to contact us:</strong>
    <br>
    Feel free to visit our <a href="https://moralitylab.bc.edu/" target="_blank">website</a> to learn more about our research.
    If you have any concerns or questions about the study you just completed, please reach out to the lab at lypsychlab@gmail.com.
    <br>
    <br>
    <strong>To learn more about your rights as a research participant:</strong>
    <br>
    If you have any concerns about research-related ethics or harm, or would like to learn more about the ethical constraints under which this study was conducted, 
    please contact the Boston College Office for Research Protections at irb@bc.edu or 617-552-4778.
    <br>
    <br>
    <i>Thank you for your participation!</i>
    <br>
    <br>
</div>
`