const consent_html = `
    <p style="text-align:left;">
        You are being asked to participate in a research study titled "Truth in Games." 
        You were selected to participate in this project because you are an adult over age 18. 
        This study is sponsored by Boston College and the John Templeton Foundation.
    </p>
    <p style="text-align: left;">
        The purpose of this study is to understand how we weigh information what other people say. 
        This study will be conducted through this online survey. 
        The survey should take you about <span style="font-weight: bold;">20 minutes</span> to complete. 
        There are no direct benefits to you, 
        but you may feel gratified knowing that you helped further the scholarly work in this research area, 
        and you will be compensated <span style="font-weight: bold;">$3.17</span> (with up to <span style="font-weight: bold;">$2.30 bonus available</span> as well) for your participation. 
        There are no costs to you associated with your participation.
    </p>
    <p style="text-align: left;">
        The researchers do not believe participation would entail any risks or discomforts beyond those ordinarily encountered in everyday life.
    </p>
    <p style="text-align: left;">
        This Principal Investigator, Dr. Liane Young, will exert all reasonable efforts to keep your responses and your identity confidential. 
        We will not maintain within our research data any information that uniquely identifies you, such as your name, location, or Internet Protocol (IP) address. 
        In any report we publish, we will not include any information that will make it possible to identify a participant. 
        Data collected from the experiment will be coded to remove your name and any other personal identifiers. 
        All records will be secured in a locked cabinet in our lab. 
        The Institutional Review Board at Boston College and internal Boston College auditors may review the research records. 
        State or federal laws or court orders may also require that information from research study records be released. 
        Otherwise, the researchers will not release to others any information that could indicate your identity unless you give your permission, 
        or unless the researchers become legally required to do so.
    </p>
    <p style="text-align: left;">
        Although the survey will not prompt you directly to identify yourself by name, email address or the like, 
        the survey will include several items that would prompt you to provide certain demographic information, 
        such as your age, gender, ethnicity, education level and the like. 
        In combination, responses to such questions could suggest your identity. 
        Regardless, please know that the researchers will make no purposeful effort to discern your identity based on such information. 
        Additionally, please note that you may opt to leave any such questions blank.
    </p>
    <p style="text-align: left;">
        Your participation is voluntary. If you choose not to participate it will not affect your relations with Boston College. 
        Some questions on the survey, such as comprehension questions, may be required in order to complete the survey and receive compensation. 
        However, you may still choose to end your participation in the study at any time. 
        If you have questions or concerns concerning this research you may contact the Principal Investigator at 
        <a href="tel:16175520240">+1 (617) 552-0240</a> or <a href="mailto:liane.young@bc.edu">liane.young@bc.edu</a>. 
        If you have questions about your rights as a research participant, you may contact the Office for Research Protections, Boston College, at 
        <a href="tel:16175524778">+1 (617) 552-4778</a> or <a href="mailto:irb@bc.edu">irb@bc.edu</a>.
    </p>
    <p style="text-align: left;">
        If you agree to the statements above and agree to participate in this study, please select the "Consent given" button below to continue.
    </p>
`
const no_ai_preamble = `
    <p style="text-align:left;">
        Thank you so much for participating in this study!
    </p>
    <p style="text-align: left;">
        We have one request: please complete all parts of this study using only your own thoughts and words, without the help of AI tools or assistants. 
    </p>
    <p style="text-align: left;">
        AI-assisted responses can invalidate our data. After all, your authentic perspective is what makes this research valuable. We're genuinely interested in your thinking, not an AI's.
    </p>
    <p style="text-align: left;">
        Thank you for understanding!
    </p>
`

const instructions_page1 = `
    <div class="instructions-box">
    </div>
    <hr>
    <p style="text-align: left;">
        In this study you will be playing a betting game with another research participant and answering questions about information from the game. 
        You will not be playing live with the other participant. 
        They have already made their decisions in the game, and you will make decisions that affect a future participant.
    </p>
`

const instructions_page1_norep = `
    <div class="instructions-box">
    </div>
    <hr>
    <p style="text-align: left;">
        In this study you will be playing a betting game with another research participant and answering questions about information from the game. 
        You will not be playing live with the other participant. 
        They have already made their decisions in the game.
    </p>
`

const instructions_page2 = `
    <div class="instructions-box">
        <div><span style="font-weight: bolder; font-size: 30px;">&darr;</span></div>
            <div id="wheel" class="has-pin" style="background-image: conic-gradient(lightgreen 60%, black 0);"><div id="pin"></div></div>
    </div>
    <hr>
    <p style="text-align: left;">
        The game involves spinning a wheel with black and green sections. 
        Players win when the wheel lands with the arrow on green, but they lose when it lands with the arrow on black. 
        <br>
        <br>
        So, the chance of winning is equal to the percentage of the wheel that is green. 
        For example, if you spin a wheel that is 60% green and 40% black, the probability of you winning is 60%. 
    </p>
`

const instructions_page2_norep = `
    <div class="instructions-box">
        <div><span style="font-weight: bolder; font-size: 30px;">&darr;</span></div>
            <div id="wheel" class="has-pin" style="background-image: conic-gradient(lightgreen 60%, black 0);"><div id="pin"></div></div>
    </div>
    <hr>
    <p style="text-align: left;">
        The game involves spinning a wheel with black and green sections. 
        Players win when the wheel lands with the arrow on green, but they lose when it lands with the arrow on black. 
        <br>
        <br>
        So, the chance of winning is equal to the percentage of the wheel that is green. 
        For example, if you spin a wheel that is 60% green and 40% black, the probability of you winning is 60%. 
    </p>
`

const instructions_page3 = `
    <div class="instructions-box">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div id="reporter-avatar" class="avatar">
            <div class="head"></div>
            <div class="shoulders">
                <br>
                <br>
                Reporter
            </div>
        </div>
        <div id="decider-avatar" class="avatar">
            <div class="head"></div>
            <div class="shoulders">
                <br>
                <br>
                Decider
            </div>
        </div>
    </div>
    <hr>
    <p style="text-align: left;">
        There are two roles in the game: the Reporter and the Decider. 
        You will first play the role of the Reporter and then the role of the Decider.
    </p>
`

const instructions_page3_norep = `
    <div class="instructions-box">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div id="reporter-avatar" class="avatar">
            <div class="head"></div>
            <div class="shoulders">
                <br>
                <br>
                Reporter
            </div>
        </div>
        <div id="decider-avatar" class="avatar">
            <div class="head"></div>
            <div class="shoulders">
                <br>
                <br>
                Decider
            </div>
        </div>
    </div>
    <hr>
    <p style="text-align: left;">
        There are two roles in the game: the Reporter and the Decider. 
        You will play the role of the Decider. 
        But before you do that, we will first explain the role of the Reporter, so that you understand the full game.
    </p>
`

const instructions_page4 = `
    <div class="instructions-box">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="reporter-inst-wheel-container">
            <div class="small-wheel" style="background-image: conic-gradient(lightgreen 55%, black 0);"></div>
        </div>
        <div class="reporter-inst-spacer"></div>
        <div class="reporter-inst-arrow">
            &rarr;
        </div>
        <div class="reporter-inst-spacer"></div>
        <div class="reporter-inst-text-container">
            What is the chance of winning with the wheel that you just saw?
        </div>
        <br>
        <div style="display: inline-block; width: 250px; text-align: center;">
            1 second
        </div>
        <div style="display: inline-block; width: 50px;"></div>
        <div style="display: inline-block; width: 50px;"></div>
        <div style="display: inline-block; width: 50px;"></div>
        <div style="display: inline-block; width: 250px; text-align: center;"></div>
    </div>
    <hr>
    <p style="text-align: left;">
        When you're the Reporter, you get to see the wheel for 1 second. 
        After 1 second, the wheel disappears and you need to estimate the chance of winning when that wheel is spun 
        (remember, this is the same number as the percentage of the wheel that is green). 
        <br>
        <br>
        You will be given a bonus depending on how accurate your estimate is. 
        The estimations that you make as a Reporter will be used in another participant's Decider rounds.
    </p>
`

const instructions_page4_norep = `
    <div class="instructions-box">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="reporter-inst-wheel-container">
            <div class="small-wheel" style="background-image: conic-gradient(lightgreen 55%, black 0);"></div>
        </div>
        <div class="reporter-inst-spacer"></div>
        <div class="reporter-inst-arrow">
            &rarr;
        </div>
        <div class="reporter-inst-spacer"></div>
        <div class="reporter-inst-text-container">
            What is the chance of winning with the wheel that you just saw?
        </div>
        <br>
        <div style="display: inline-block; width: 250px; text-align: center;">
            1 second
        </div>
        <div style="display: inline-block; width: 50px;"></div>
        <div style="display: inline-block; width: 50px;"></div>
        <div style="display: inline-block; width: 50px;"></div>
        <div style="display: inline-block; width: 250px; text-align: center;"></div>
    </div>
    <hr>
    <p style="text-align: left;">
        The Reporter gets to see the wheel for 1 second. 
        After 1 second, the wheel disappears and the Reporter needs to estimate the chance of winning when that wheel is spun 
        (remember, this is the same number as the percentage of the wheel that is green). 
        <br>
        <br>
        The participant who played as the Reporter was given a bonus depending on how accurate their estimate was.
    </p>
`

const instructions_page5 = `
    <div class="instructions-box">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div id="reporter-avatar" class="avatar">
            <div class="head"></div>
            <div class="shoulders">
                <br>
                <br>
                Reporter
            </div>
        </div>
    </div>
    <hr>
    <p style="text-align: left;">
        Let's do two practice rounds where you play the role of the Reporter.
    </p>
`

const instructions_page6 = `
    <div class="instructions-box">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div id="decider-avatar" class="avatar">
            <div class="head"></div>
            <div class="shoulders">
                <br>
                <br>
                Decider
            </div>
        </div>
    </div>
    <hr>
    <p style="text-align: left;">
        This completes your practice Reporter rounds.
        <br>
        <br>
        Now let's learn how to play the role of the Decider.
    </p>
`

const instructions_page6_norep = `
    <div class="instructions-box">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div id="decider-avatar" class="avatar">
            <div class="head"></div>
            <div class="shoulders">
                <br>
                <br>
                Decider
            </div>
        </div>
    </div>
    <hr>
    <p style="text-align: left;">
        Now let's learn how to play the role of the Decider.
    </p>
`

const instructions_page7 = `
    <div class="instructions-box">
        <div id="text-container" class="container">
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">If money is on the line, this is how much you will win or lose.</span>
            </div>
            <strong>Amount at Stake: </strong> 15&#162;
            <br>
            <br>
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">This is how much money you currently have.</span>
            </div>
            <strong>Your Wallet: </strong> 100&#162;
            <br>
            <br>
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">This is the smallest chance of winning you are willing to accept. If the reporter's estimate is higher than this, money will be on the line.</span>
            </div>
            <strong>Your Threshold: </strong> <input id="minimum" class="percentage-enter" name="minimum" type="number" max="75" min="25" placeholder="53" readonly="true"/> % chance of winning
        </div>
        <div id="wheel-container" class="container">
            <div><span style="font-weight: bolder; font-size: 30px;">&darr;</span></div>
            <div id="wheel" class="masked">???</div>
            <br>
            <br>
        </div>
    </div>
    <hr>
    <p style="text-align: left;">
        When you're the Decider, you start with a wallet that has 100&#162; in it, 
        and each round you have the opportunity to grow the amount of money in your wallet by betting on the spin of the wheel. 
        <br>
        <br>
        At the beginning of each round, a new "amount at stake" is set and a wheel with a random chance of winning is chosen. 
        However, unlike the Reporter, you won't get to see the wheel immediately. 
        <br>
        <br>
        Instead, your job is to decide the smallest chance of winning where you would be willing to bet the amount at stake. 
        In other words, you must complete the sentence, 
        "I am willing to bet the amount at stake if my chances of winning are at least ___." 
        This number is called your "threshold." 
        <br>
        <br>
        <u>NOTE:</u> There is never a right or wrong answer for your threshold. 
        It is simply about how much risk you are willing to take with the amount at stake for the round.
        <br>
        <br>
        To keep it interesting, your threshold must be between 25% and 75%, 
        but the wheel can give anywhere from a 0% to 100% chance of winning.
    </p>
`

const instructions_page8 = `
    <div class="instructions-box">
        <div id="text-container" class="container">
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">If money is on the line, this is how much you will win or lose.</span>
            </div>
            <strong>Amount at Stake: </strong> 15&#162;
            <br>
            <br>
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">This is how much money you currently have.</span>
            </div>
            <strong>Your Wallet: </strong> 100&#162;
            <br>
            <br>
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">This is the smallest chance of winning you are willing to accept. If the reporter's estimate is higher than this, money will be on the line.</span>
            </div>
            <strong>Your Threshold: </strong> <input id="minimum" class="percentage-enter" name="minimum" type="number" max="75" min="25" placeholder="53" readonly="true"/> % chance of winning
            <br>
            <br>
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">After seeing the wheel for one second, the reporter estimated that the chance of winning was this %.</span>
            </div>
            <strong>Reporter's Estimate: </strong> 56% chance of winning
            <div style="text-align: center;">
                <br>
                <br>
                <strong><u>MONEY ON THE LINE</u></strong>
                <br>
                <span style="font-size: 15px">Reporter's estimate was <u>higher</u> than your threshold</span>
            </div>
        </div>
        <div id="wheel-container" class="container">
            <div><span style="font-weight: bolder; font-size: 30px;">&darr;</span></div>
            <div id="wheel" class="masked">???</div>
            <br>
            <br>
        </div>
    </div>
    <hr>
    <p style="text-align: left;">
        Once you enter your threshold, you will learn two new pieces of information. 
        <br>
        <br>
        First, you will see the Reporter's estimate of the chance of winning. 
        If the Reporter's estimate is greater than or equal to your threshold (as in the example above), 
        the amount at stake will be on the line when the wheel is spun. This means that you will win or lose depending on the outcome of the spin.
        <br>
        <br>
        If the Reporter's estimate is lower, no money will be on the line for the round. This means that you will not win or lose any money, regardless of the outcome of the spin.
        <br>
        <br>
        Below the Reporter's estimate, you will see text indicating whether the amount at stake is on the line or not.
    </p>
`

const instructions_page9 = `
    <div class="instructions-box">
        <div id="text-container" class="container">
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">If money is on the line, this is how much you will win or lose.</span>
            </div>
            <strong>Amount at Stake: </strong> 15&#162;
            <br>
            <br>
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">This is how much money you currently have.</span>
            </div>
            <strong>Your Wallet: </strong> 100&#162;
            <br>
            <br>
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">This is the smallest chance of winning you are willing to accept. If the reporter's estimate is higher than this, money will be on the line.</span>
            </div>
            <strong>Your Threshold: </strong> <input id="minimum" class="percentage-enter" name="minimum" type="number" max="75" min="25" placeholder="53" readonly="true"/> % chance of winning
            <br>
            <br>
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">After seeing the wheel for one second, the reporter estimated that the chance of winning was this %.</span>
            </div>
            <strong>Reporter's Estimate: </strong> 56% chance of winning
            <div style="text-align: center;">
                <br>
                <br>
                <strong><u>MONEY ON THE LINE</u></strong>
                <br>
                <span style="font-size: 15px">Reporter's estimate was <u>higher</u> than your threshold</span>
            </div>
        </div>
        <div id="wheel-container" class="container">
            <div><span style="font-weight: bolder; font-size: 30px;">&darr;</span></div>
            <div id="wheel" class="has-pin" style="background-image: conic-gradient(lightgreen 52%, black 0);"><div id="pin"></div></div>
            <div id="true-value"><strong>Exact chance of winning:</strong> 52%</div>
        </div>
    </div>
    <hr>
    <p style="text-align: left;">
        Second, the exact chance of winning will be revealed. 
        You will see both the wheel itself and the exact chance of winning written out as a number.
    </p>
`

const instructions_page10 = `
    <div class="instructions-box">
        <br>
        <br>
        <br>
        <br>
        <div style="font-size: 30px;">If money is on the line</div>
        <br>
        <div class="bet-exp-wheel-container">
            <div class="small-pointer">&darr;</div>
            <div class="small-wheel" style="background-image: conic-gradient(lightgreen 55%, black 0); rotate: 340deg;"></div>
            <br>
            Win the amount at stake
        </div>
        <div class="bet-exp-vline-container"></div>
        <div class="bet-exp-wheel-container">
            <div class="small-pointer">&darr;</div>
            <div class="small-wheel" style="background-image: conic-gradient(lightgreen 55%, black 0); rotate: 20deg;"></div>
            <br>
            Lose the amount at stake
        </div>
    </div>
    <hr>
    <p style="text-align: left;">
        Next, the wheel will be spun. 
        As a reminder, if the amount at stake is on the line, you will win that amount of money if the wheel lands on green, 
        but lose that amount if the wheel lands on black.
    </p>
`

const instructions_page11 = `
    <div class="instructions-box">
        <br>
        <br>
        <br>
        <br>
        <div style="font-size: 30px;">If money is not on the line</div>
        <br>
        <div class="bet-exp-wheel-container">
            <div class="small-pointer">&darr;</div>
            <div class="small-wheel" style="background-image: conic-gradient(lightgreen 55%, black 0); rotate: 340deg;"></div>
            <br>
            No change to wallet
        </div>
        <div class="bet-exp-vline-container"></div>
        <div class="bet-exp-wheel-container">
            <div class="small-pointer">&darr;</div>
            <div class="small-wheel" style="background-image: conic-gradient(lightgreen 55%, black 0); rotate: 20deg;"></div>
            <br>
            No change to wallet
        </div>
    </div>
    <hr>
    <p style="text-align: left;">
        If no money is on the line, you will not win or lose any money, regardless of the outcome of the spin.
    </p>
`

const instructions_page12 = `
    <div class="instructions-box">
        <div id="text-container" class="container">
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">If money is on the line, this is how much you will win or lose.</span>
            </div>
            <strong>Amount at Stake: </strong> 15&#162;
            <br>
            <br>
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">This is how much money you currently have.</span>
            </div>
            <strong>Your Wallet: </strong> 100&#162; <span style="font-weight: bold"> &rarr; </span> 115&#162;
            <br>
            <br>
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">This is the smallest chance of winning you are willing to accept. If the reporter's estimate is higher than this, money will be on the line.</span>
            </div>
            <strong>Your Threshold: </strong> <input id="minimum" class="percentage-enter" name="minimum" type="number" max="75" min="25" placeholder="53" readonly="true"/> % chance of winning
            <br>
            <br>
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">After seeing the wheel for one second, the reporter estimated that the chance of winning was this %.</span>
            </div>
            <strong>Reporter's Estimate: </strong> 56% chance of winning
            <div style="text-align: center;">
                <br>
                <br>
                <strong><u>MONEY ON THE LINE</u></strong>
                <br>
                <span style="font-size: 15px">Reporter's estimate was <u>higher</u> than your threshold</span>
            </div>
        </div>
        <div id="wheel-container" class="container">
            <div><span style="font-weight: bolder; font-size: 30px;">&darr;</span></div>
            <div id="wheel" class="has-pin" style="background-image: conic-gradient(lightgreen 52%, black 0);"><div id="pin"></div></div>
            <div id="true-value"><strong>Exact chance of winning:</strong> 52%</div>
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
    <hr>
    <p style="text-align: left;">
        When the wheel comes to rest, you will see a summary of the round and a number line comparing your threshold, 
        the Reporter's estimate of the chance of winning, and the exact chance of winning. 
        <br>
        <br>
        Then, you will be asked three questions about the round.
    </p>
`

const instructions_page12_full_box = `
    <div class="instructions-box">
        <div id="text-container" class="container">
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">If money is on the line, this is how much you will win or lose.</span>
            </div>
            <strong>Amount at Stake: </strong> 15&#162;
            <br>
            <br>
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">This is how much money you currently have.</span>
            </div>
            <strong>Your Wallet: </strong> 100&#162; <span style="font-weight: bold"> &rarr; </span> 115&#162;
            <br>
            <br>
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">This is the smallest chance of winning you are willing to accept. If the reporter's estimate is higher than this, money will be on the line.</span>
            </div>
            <strong>Your Threshold: </strong> <input id="minimum" class="percentage-enter" name="minimum" type="number" max="75" min="25" placeholder="53" readonly="true"/> % chance of winning
            <br>
            <br>
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">After seeing the wheel for one second, the reporter estimated that the chance of winning was this %.</span>
            </div>
            <strong>Reporter's Estimate: </strong> 56% chance of winning
            <div style="text-align: center;">
                <br>
                <br>
                <strong><u>MONEY ON THE LINE</u></strong>
                <br>
                <span style="font-size: 15px">Reporter's estimate was <u>higher</u> than your threshold</span>
            </div>
        </div>
        <div id="wheel-container" class="container">
            <div><span style="font-weight: bolder; font-size: 30px;">&darr;</span></div>
            <div id="wheel" class="has-pin" style="background-image: conic-gradient(lightgreen 52%, black 0); rotate: 340deg;"><div id="pin"></div></div>
            <div id="true-value"><strong>Exact chance of winning:</strong> 52%</div>
        </div>
        <br>
        <br>
        Money was <u>on the line</u>, so you <u>won</u> the 15&#162; at stake.
        <br>
        <br>
        <strong>Your Wallet: </strong> 100&#162; <span style="font-weight: bold"> &rarr; </span> 115&#162;
        <br>
        <br>
        <div class="number-line">
            <div class="point-number middle">53</div>
            <div class="point-number" style="left: 65%;">56</div>
            <div class="point-number" style="left: 45%;">52</div>
        </div>
        <div class="number-line">
            <div class="point middle"></div>
            <div class="point" style="left: 65%;"></div>
            <div class="point" style="left: 45%;"></div>
        </div>
        <div class="number-line">
            <div class="point-label" style="left: calc(50% - 105px); rotate: 315deg;"><span style="font-weight: bold">Your Threshold</span></div>
            <div class="point-label" style="left: calc(65% - 105px); rotate: 315deg;">Reporter's Estimate</div>
            <div class="point-label" style="left: calc(45% - 105px); rotate: 315deg;">Exact chance of winning</div>
        </div>
        <div class="number-line-visual"></div>
    </div>
`

const instructions_page13 = `
    <div class="instructions-box">
    </div>
    <hr>
    <p style="text-align: left;">
        At the end of all the rounds, however much money is in your wallet will be awarded to you as a bonus.
    </p>
`

const instructions_page14 = `
    <div class="instructions-box">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div id="decider-avatar" class="avatar">
            <div class="head"></div>
            <div class="shoulders">
                <br>
                <br>
                Decider
            </div>
        </div>
    </div>
    <hr>
    <p style="text-align: left;">
        Now let's do two practice rounds where you play the role of the Decider. 
        <br>
        <br>
        If you forget any of the rules or find something confusing, try hovering over the &#9432; icons on the left side of the screen.
        These contain short explanations of each term to remind you how the game works.
        <br>
        <br>
        <u>NOTE:</u> Remember that the chance of winning with a given wheel is the same as the percentage of that wheel that is green. 
        As you move through the rounds, think of those numbers in whichever way feels more intuitive to you!
    </p>
`

function incorrect_response_stimulus() {
    let checked = [["", "", "", ""], ["", "", "", ""], ["", "", "", ""]]
    let colors = ["black", "black", "black"]

    for (let i = 0; i < 3; i++) {
        checked[i][options[i].indexOf(last_answers[i])] = "checked"

        if (!last_answers_correct[i]) {
            colors[i] = "firebrick"
        }
    }

    let string = `
        <div style="text-align: left">
            You answered at least one question incorrectly. 
            In order to make sure our data is valid, we need to know that you understand the game.
            The questions that you answered incorrectly are highlighted below in red. 
            Please look back through the instructions <a href="instructions.html" target="_blank">here</a> to find the answers to those questions.
            Thank you for your cooperation!
            <br>
            <br>
            <form autocomplete="off">
                <div style="color: ${colors[0]}">
                    <p>What is the Reporter trying to do?</p>
                    <div>
                        <label>
                            <input ${checked[0][0]} disabled type="radio">
                            Estimate the percentage of the wheel that is black
                        </label>
                    </div>
                    <div>
                        <label>
                            <input ${checked[0][1]} disabled type="radio">
                            Guess what number the Decider will enter
                        </label>
                    </div>
                    <div>
                        <label>
                            <input ${checked[0][2]} disabled type="radio">
                            Estimate the chance of winning
                        </label>
                    </div>
                    <div>
                        <label>
                            <input ${checked[0][3]} disabled type="radio">
                            Guess whether money will be on the line or not
                        </label>
                    </div>
                </div>
                <div style="color: ${colors[1]}">
                    <p>What is the Decider trying to do?</p>
                    <div>
                        <label>
                            <input ${checked[1][0]} disabled type="radio">
                            Decide which color to bet on
                        </label>
                    </div>
                    <div>
                        <label>
                            <input ${checked[1][1]} disabled type="radio">
                            Decide the smallest chance of winning where they are willing to bet the amount at stake
                        </label>
                    </div>
                    <div>
                        <label>
                            <input ${checked[1][2]} disabled type="radio">
                            Decide whether or not the wheel will be spun
                        </label>
                    </div>
                    <div>
                        <label>
                            <input ${checked[1][3]} disabled type="radio">
                            Decide the amount of money at stake for each round
                        </label>
                    </div>
                </div>
                <div style="color: ${colors[2]}">
                    <p>When will a bet go through?</p>
                    <div>
                        <label>
                            <input ${checked[2][0]} disabled type="radio">
                            Every round, regardless of what numbers the Decider and the Reporter enter
                        </label>
                    </div>
                    <div>
                        <label>
                            <input ${checked[2][1]} disabled type="radio">
                            On randomly chosen rounds, regardless of what numbers the Decider and the Reporter enter
                        </label>
                    </div>
                    <div>
                        <label>
                            <input ${checked[2][2]} disabled type="radio">
                            Only when the Reporter's estimate is lower than the number the Decider enters
                        </label>
                    </div>
                    <div>
                        <label>
                            <input ${checked[2][3]} disabled type="radio">
                            Only when the Reporter's estimate is greater than or equal to the number the Decider enters
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

function show_wheel_stimulus(percent) {
    let string = `
        <div id="wheel" class="has-pin" style="background-image: conic-gradient(lightgreen ${percent}%, black 0);"><div id="pin"></div></div>
        <div>
            <br>
            <br>
            <br>
            <br>
            <br>
        </div>
    `

    return string
}

function reporter_feedback_stimulus(percent) {
    let progress_text = ["see the next wheel", "finish"]

    let string = `
        <div id="wheel" class="has-pin" style="background-image: conic-gradient(lightgreen ${percent}%, black 0);"><div id="pin"></div></div>
        <div>
            <br>
            <strong>Exact chance of winning:</strong> ${percent}%
            <br>
            <strong>Your Estimate:</strong> ${current_estimate}% (${current_distance} away)
            <br>
            <br>
            Press space to ${progress_text[Math.floor(reporter_count / 7)]}.
        </div>
    `

    return string
}

function move_to_decider_stimulus() {
    let string = `
        You have finished playing as the Reporter. Overall, you earned ${earnings}&#162; for the accuracy of your estimates.
        <br>
        <br>
        Now, you will play as the Decider for 8 rounds.
        <br>
        <br>
        If you forget any of the rules or find something confusing, try hovering over the &#9432; icons on the left side of the screen.
        These contain short explanations of each term to remind you how the game works.
        <br>
        <br>
        When you are ready, press space to begin playing as the Decider.
    `

    return string
}

function set_global_vars(minimum, bet, outcome, cons, error) {
    bet = Boolean(bet)
    outcome = Boolean(outcome)
    cons = Boolean(cons)

    let report_diff = Math.floor(Math.random() * (error - 1)) + 1

    if (bet) {
        current_report = minimum + report_diff
        if (cons) {
            current_truth = current_report - error
        } else {
            current_truth = current_report + error
        }
    } else {
        current_report = minimum - report_diff
        if (cons) {
            current_truth = current_report + error
        } else {
            current_truth = current_report - error
        }
    }

    // set rotation using truth and outcome
    let spin_padding = 2

    if (outcome) {
        current_rotation = (Math.floor(Math.random() * (current_truth - 2 * spin_padding)) + 100 - current_truth + spin_padding) * 3.6
    } else {
        current_rotation = (Math.floor(Math.random() * (100 - current_truth - 2 * spin_padding)) + spin_padding) * 3.6
    }
}

function minimum_stimulus(buyin) {
    let string = `
        <div id="text-container" class="container">
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">If money is on the line, this is how much you will win or lose.</span>
            </div>
            <strong>Amount at Stake: </strong> ${buyin}&#162;
            <br>
            <br>
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">This is how much money you currently have.</span>
            </div>
            <strong>Your Wallet: </strong> ${pot}&#162;
            <br>
            <br>
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">This is the smallest chance of winning you are willing to accept. If the reporter's estimate is higher than this, money will be on the line.</span>
            </div>
            <strong>Your Threshold: </strong> <input id="minimum" class="percentage-enter" name="minimum" type="number" max="75" min="25" required="true"/> % chance of winning
        </div>
        <div id="wheel-container" class="container">
            <div><span style="font-weight: bolder; font-size: 30px;">&darr;</span></div>
            <div id="wheel" class="masked">???</div>
            <br>
            <br>
        </div>
        <br>
        <br>
    `

    return string
}

function see_report_stimulus(buyin, bet) {
    bet = parseInt(bet)

    let go_thru = ["NOT ", ""]
    let low_high = ["lower", "higher"]

    let string = `
        <div id="text-container" class="container">
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">If money is on the line, this is how much you will win or lose.</span>
            </div>
            <strong>Amount at Stake: </strong> ${buyin}&#162;
            <br>
            <br>
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">This is how much money you currently have.</span>
            </div>
            <strong>Your Wallet: </strong> ${pot}&#162;
            <br>
            <br>
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">This is the smallest chance of winning you are willing to accept. If the reporter's estimate is higher than this, money will be on the line.</span>
            </div>
            <strong>Your Threshold: </strong> <input id="minimum" class="percentage-enter" name="minimum" type="number" max="75" min="25" placeholder="${current_minimum}" readonly="true"/> % chance of winning
            <br>
            <br>
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">After seeing the wheel for one second, the reporter estimated that the chance of winning was this %.</span>
            </div>
            <strong>Reporter's Estimate: </strong> ${current_report}% chance of winning
            <div style="text-align: center;">
                <br>
                <br>
                <strong><u>MONEY ${go_thru[bet]}ON THE LINE</u></strong>
                <br>
                <span style="font-size: 15px">Reporter's estimate was <u>${low_high[bet]}</u> than your threshold</span>
            </div>
        </div>
        <div id="wheel-container" class="container">
            <div><span style="font-weight: bolder; font-size: 30px;">&darr;</span></div>
            <div id="wheel" class="masked">???</div>
            <br>
            <br>
        </div>
        <br>
        <br>
    `

    return string
}

function see_wheel_stimulus(buyin, bet) {
    bet = parseInt(bet)

    let go_thru = ["NOT ", ""]
    let low_high = ["lower", "higher"]

    let string = `
        <div id="text-container" class="container">
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">If money is on the line, this is how much you will win or lose.</span>
            </div>
            <strong>Amount at Stake: </strong> ${buyin}&#162;
            <br>
            <br>
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">This is how much money you currently have.</span>
            </div>
            <strong>Your Wallet: </strong> ${pot}&#162;
            <br>
            <br>
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">This is the smallest chance of winning you are willing to accept. If the reporter's estimate is higher than this, money will be on the line.</span>
            </div>
            <strong>Your Threshold: </strong> <input id="minimum" class="percentage-enter" name="minimum" type="number" max="75" min="25" placeholder="${current_minimum}" readonly="true"/> % chance of winning
            <br>
            <br>
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">After seeing the wheel for one second, the reporter estimated that the chance of winning was this %.</span>
            </div>
            <strong>Reporter's Estimate: </strong> ${current_report}% chance of winning
            <div style="text-align: center;">
                <br>
                <br>
                <strong><u>MONEY ${go_thru[bet]}ON THE LINE</u></strong>
                <br>
                <span style="font-size: 15px">Reporter's estimate was <u>${low_high[bet]}</u> than your threshold</span>
            </div>
        </div>
        <div id="wheel-container" class="container">
            <div><span style="font-weight: bolder; font-size: 30px;">&darr;</span></div>
            <div id="wheel" class="has-pin" style="background-image: conic-gradient(lightgreen ${current_truth}%, black 0);"><div id="pin"></div></div>
            <div id="true-value"><strong>Exact chance of winning:</strong> ${current_truth}%</div>
        </div>
        <br>
        <br>
    `

    return string
}

function spin_stimulus(buyin, bet) {
    bet = parseInt(bet)

    let go_thru = ["NOT ", ""]
    let low_high = ["lower", "higher"]

    let string = `
        <div id="text-container" class="container">
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">If money is on the line, this is how much you will win or lose.</span>
            </div>
            <strong>Amount at Stake: </strong> ${buyin}&#162;
            <br>
            <br>
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">This is how much money you currently have.</span>
            </div>
            <strong>Your Wallet: </strong> ${pot}&#162;
            <br>
            <br>
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">This is the smallest chance of winning you are willing to accept. If the reporter's estimate is higher than this, money will be on the line.</span>
            </div>
            <strong>Your Threshold: </strong> <input id="minimum" class="percentage-enter" name="minimum" type="number" max="75" min="25" placeholder="${current_minimum}" readonly="true"/> % chance of winning
            <br>
            <br>
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">After seeing the wheel for one second, the reporter estimated that the chance of winning was this %.</span>
            </div>
            <strong>Reporter's Estimate: </strong> ${current_report}% chance of winning
            <div style="text-align: center;">
                <br>
                <br>
                <strong><u>MONEY ${go_thru[bet]}ON THE LINE</u></strong>
                <br>
                <span style="font-size: 15px">Reporter's estimate was <u>${low_high[bet]}</u> than your threshold</span>
            </div>
        </div>
        <div id="wheel-container" class="container">
            <div><span style="font-weight: bolder; font-size: 30px;">&darr;</span></div>
            <div id="wheel" class="has-pin" style="background-image: conic-gradient(lightgreen ${current_truth}%, black 0);"><div id="pin"></div></div>
            <div id="true-value"><strong>Exact chance of winning:</strong> ${current_truth}%</div>
        </div>
        <br>
        <br>
    `

    return string
}

function outcome_stimulus(buyin, bet, outcome) {
    bet = parseInt(bet)
    outcome = parseInt(outcome)

    let go_thru = ["NOT ", ""]
    let low_high = ["lower", "higher"]
    let result = [["did not lose", "did not win"], ["lost", "won"]]

    let cents = "cent"
    if (buyin > 1) {
        cents += "s"
    }

    let string = `
        <div id="text-container" class="container">
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">If money is on the line, this is how much you will win or lose.</span>
            </div>
            <strong>Amount at Stake: </strong> ${buyin}&#162;
            <br>
            <br>
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">This is how much money you currently have.</span>
            </div>
            <strong>Your Wallet: </strong> ${pot}&#162; <span style="font-weight: bold"> &rarr; </span> ${pot + buyin * bet * (outcome * 2 - 1)}&#162;
            <br>
            <br>
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">This is the smallest chance of winning you are willing to accept. If the reporter's estimate is higher than this, money will be on the line.</span>
            </div>
            <strong>Your Threshold: </strong> <input id="minimum" class="percentage-enter" name="minimum" type="number" max="75" min="25" placeholder="${current_minimum}" readonly="true"/> % chance of winning
            <br>
            <br>
            <div class="tooltip">
                &#9432;
                <span class="tooltiptext">After seeing the wheel for one second, the reporter estimated that the chance of winning was this %.</span>
            </div>
            <strong>Reporter's Estimate: </strong> ${current_report}% chance of winning
            <div style="text-align: center;">
                <br>
                <br>
                <strong><u>MONEY ${go_thru[bet]}ON THE LINE</u></strong>
                <br>
                <span style="font-size: 15px">Reporter's estimate was <u>${low_high[bet]}</u> than your threshold</span>
            </div>
        </div>
        <div id="wheel-container" class="container">
            <div><span style="font-weight: bolder; font-size: 30px;">&darr;</span></div>
            <div id="wheel" class="has-pin" style="background-image: conic-gradient(lightgreen ${current_truth}%, black 0); rotate: ${current_rotation}deg"><div id="pin"></div></div>
            <div id="true-value"><strong>Exact chance of winning:</strong> ${current_truth}%</div>
        </div>
        <br>
        <br>
        Money was <u>${go_thru[bet].toLowerCase()}on the line</u>, so you <u>${result[bet][outcome]}</u> the ${buyin}&#162; at stake.
        <br>
        <br>
        <strong>Your Wallet: </strong> ${pot}&#162; <span style="font-weight: bold"> &rarr; </span> ${pot + buyin * bet * (outcome * 2 - 1)}&#162;
        <br>
        <hr>
        <div class="number-line">
            <div class="point-number middle">${current_minimum}</div>
            <div class="point-number" style="left: ${50 - 4 * (current_minimum - current_report)}%;">${current_report}</div>
            <div class="point-number" style="left: ${50 - 4 * (current_minimum - current_truth)}%;">${current_truth}</div>
        </div>
        <div class="number-line">
            <div class="point middle"></div>
            <div class="point" style="left: ${50 - 4 * (current_minimum - current_report)}%;"></div>
            <div class="point" style="left: ${50 - 4 * (current_minimum - current_truth)}%;"></div>
        </div>
        <div class="number-line">
            <div class="point-label" style="left: calc(50% - 105px); rotate: 315deg;"><span style="font-weight: bold">Your Threshold</span></div>
            <div class="point-label" style="left: calc(${50 - 4 * (current_minimum - current_report)}% - 105px); rotate: 315deg;">Reporter's Estimate</div>
            <div class="point-label" style="left: calc(${50 - 4 * (current_minimum - current_truth)}% - 105px); rotate: 315deg;">Exact chance of winning</div>
        </div>
        <div class="number-line-visual"></div>
    `

    return string
}

function update_pot(buyin, bet, outcome) {
    bet = parseInt(bet)
    outcome = parseInt(outcome)
    
    pot += buyin * bet * (outcome * 2 - 1)
}

const q_manip_check = `
    Was the exact chance of winning lower or higher than your threshold?
    <br>
    <label for="manip_check_low">
        <div class="vmulti">
            <input name="manip_check" type="radio" value="lower" id="manip_check_low" required />
            Lower
        </div>
    </label>
    <label for="manip_check_equal">
        <div class="vmulti">
            <input name="manip_check" type="radio" value="equal" id="manip_check_equal" required />
            They were equal
        </div>
    </label>
    <label for="manip_check_higher">
        <div class="vmulti">
            <input name="manip_check" type="radio" value="higher" id="manip_check_higher" required />
            Higher
        </div>
    </label>
    <br>  
`

const q_truth_lk = `
    How true or false would you consider the information provided by the reporter to be?
    <br>
    <div class="hlikert-container">
        <label class="hlikert-label" for="truth_lk_0">
            <div class="hlikert">
                1
                <br>
                Completely false
                <br>
                <input name="truth_lk" type="radio" value="0" id="truth_lk_0" required />
            </div>
        </label>
        <label class="hlikert-label" for="truth_lk_1">
            <div class="hlikert">
                2
                <br>
                <input name="truth_lk" type="radio" value="1" id="truth_lk_1" required />
            </div>
        </label>
        <label class="hlikert-label" for="truth_lk_2">
            <div class="hlikert">
                3
                <br>
                <input name="truth_lk" type="radio" value="2" id="truth_lk_2" required />
            </div>
        </label>
        <label class="hlikert-label" for="truth_lk_3">
            <div class="hlikert">
                4
                <br>
                <input name="truth_lk" type="radio" value="3" id="truth_lk_3" required />
            </div>
        </label>
        <label class="hlikert-label" for="truth_lk_4">
            <div class="hlikert">
                5
                <br>
                <input name="truth_lk" type="radio" value="4" id="truth_lk_4" required />
            </div>
        </label>
        <label class="hlikert-label" for="truth_lk_5">
            <div class="hlikert">
                6
                <br>
                <input name="truth_lk" type="radio" value="5" id="truth_lk_5" required />
            </div>
        </label>
        <label class="hlikert-label" for="truth_lk_6">
            <div class="hlikert">
                7
                <br>
                Completely true
                <br>
                <input name="truth_lk" type="radio" value="6" id="truth_lk_6" required />
            </div>
        </label>
    </div>
    <br>
`

const outcome_questions = [`
    <div class="prevent-select" style="text-align: left;">
        <br>
        ${q_manip_check}
        ${q_truth_lk}
    </div>
`]

function bonus_report_stimulus() {
    let string = `
        This concludes your Decider rounds. The final amount in your wallet was ${pot}&#162;.
        <br>
        <br>
        Adding this to your Reporter score of ${earnings}&#162;, your bonus for this experiment will be ${pot + earnings}&#162;.
        <br>
        <br>
    `

    return string
}

const less_than_half_questions = `
    <div style="text-align: left; max-width: 800px">
        <br>
        When playing as the decider, we saw that you entered at least one threshold under 50%. Could you tell us why? 
        <br>
        <br>
        <textarea name="low_thresholds" id="low_thresholds" rows="4" cols="100"> </textarea>
        <br>
        <br>
    </div>
`

const truth_survey_general_questions = `
    <div style="text-align: left; max-width: 800px">
        <br>
        Outside of the context of the game you just played, imagine some said something that was close to the truth, but was not perfectly accurate.
        <br>
        <br>
        In general, if this inaccuracy changed the outcome of the situation, would that influence how <strong>you</strong> classify the truth of the person's statement?
        <div>
            <input name="self_cons" type="radio" value="0" id="self_more_true" required="true" />
            <label for="self_more_true">Yes, I would be more likely to classify it as true</label>
        </div>
        <div>
            <input name="self_cons" type="radio" value="1" id="self_more_false" />
            <label for="self_more_false">Yes, I would be more likely to classify it as false</label>
        </div>
        <div>
            <input name="self_cons" type="radio" value="2" id="self_unaffect" />
            <label for="self_unaffect">No, it would not affect how I classify it</label>
        </div>
        <div>
            <input name="self_cons" type="radio" value="3" id="self_unsure" />
            <label for="self_unsure">Unsure</label>
        </div>
        <div>
            <input name="self_cons" type="radio" value="4" id="self_not_understand" />
            <label for="self_not_understand">I don't understand the question</label>
        </div>
        <br>
        In general, if this inaccuracy changed the outcome of the situation, do you think that would influence how <strong>other people</strong> classify the truth of the person's statement?
        <div>
            <input name="others_cons" type="radio" value="0" id="others_more_true" required="true" />
            <label for="others_more_true">Yes, others would be more likely to classify it as true</label>
        </div>
        <div>
            <input name="others_cons" type="radio" value="1" id="others_more_false" />
            <label for="others_more_false">Yes, others would be more likely to classify it as false</label>
        </div>
        <div>
            <input name="others_cons" type="radio" value="2" id="others_unaffect" />
            <label for="others_unaffect">No, it would not affect how others classify it</label>
        </div>
        <div>
            <input name="others_cons" type="radio" value="3" id="others_unsure" />
            <label for="others_unsure">Unsure</label>
        </div>
        <div>
            <input name="others_cons" type="radio" value="4" id="others_not_understand" />
            <label for="others_not_understand">I don't understand the question</label>
        </div>
        <br>
        In general, if this inaccuracy changed the outcome of the situation, do you think that <strong>should</strong> (in an ideal world) influence how people classify the truth of the person's statement?
        <div>
            <input name="should_cons" type="radio" value="0" id="should_more_true" required="true" />
            <label for="should_more_true">Yes, people should be more likely to classify it as true</label>
        </div>
        <div>
            <input name="should_cons" type="radio" value="1" id="should_more_false" />
            <label for="should_more_false">Yes, people should be more likely to classify it as false</label>
        </div>
        <div>
            <input name="should_cons" type="radio" value="2" id="should_unaffect" />
            <label for="should_unaffect">No, it should not affect how people classify it</label>
        </div>
        <div>
            <input name="should_cons" type="radio" value="3" id="should_unsure" />
            <label for="should_unsure">Unsure</label>
        </div>
        <div>
            <input name="should_cons" type="radio" value="4" id="should_not_understand" />
            <label for="should_not_understand">I don't understand the question</label>
        </div>
        <br>
    </div>
`

const truth_survey_specific_questions = `
<div style="text-align: left; max-width: 800px">
    <br>
    In the game you just played, the Reporter's estimate was often close to the correct number, but was not perfectly accurate. 
    <br>
    <br>
    Sometimes this inaccuracy didn't change whether the money was put on the line, so it didn't change the outcome of the game. 
    <br>
    <br>
    But other times, it did change the outcome. For example, the inaccuracy might have caused the money to be put on the line when, according to your threshold, it shouldn't have been.
    <br>
    <br>
    Do you think that when the inaccuracy changed the outcome of the game, it influenced how <strong>you</strong> classified the truth of the Reporter's estimate?
    <div>
        <input name="self_cons" type="radio" value="0" id="self_more_true" required="true" />
        <label for="self_more_true">Yes, I was more likely to classify it as true</label>
    </div>
    <div>
        <input name="self_cons" type="radio" value="1" id="self_more_false" />
        <label for="self_more_false">Yes, I was more likely to classify it as false</label>
    </div>
    <div>
        <input name="self_cons" type="radio" value="2" id="self_unaffect" />
        <label for="self_unaffect">No, it did not affect how I classified it</label>
    </div>
    <div>
        <input name="self_cons" type="radio" value="3" id="self_unsure" />
        <label for="self_unsure">Unsure</label>
    </div>
    <div>
        <input name="self_cons" type="radio" value="4" id="self_not_understand" />
        <label for="self_not_understand">I don't understand the question</label>
    </div>
    <br>
    Do you think that when the inaccuracy changed the outcome of the game, it would influence how <strong>most other people</strong> classify the truth of the Reporter's estimate?
    <div>
        <input name="others_cons" type="radio" value="0" id="others_more_true" required="true" />
        <label for="others_more_true">Yes, most others would be more likely to classify it as true</label>
    </div>
    <div>
        <input name="others_cons" type="radio" value="1" id="others_more_false" />
        <label for="others_more_false">Yes, most others would be more likely to classify it as false</label>
    </div>
    <div>
        <input name="others_cons" type="radio" value="2" id="others_unaffect" />
        <label for="others_unaffect">No, it would not affect how most others classify it</label>
    </div>
    <div>
        <input name="others_cons" type="radio" value="3" id="others_unsure" />
        <label for="others_unsure">Unsure</label>
    </div>
    <div>
        <input name="others_cons" type="radio" value="4" id="others_not_understand" />
        <label for="others_not_understand">I don't understand the question</label>
    </div>
    <br>
    Do you think that when the inaccuracy changed the outcome of the game, it <strong>should</strong> (in an ideal world) influence how people classify the truth of the Reporter's estimate?
    <div>
        <input name="should_cons" type="radio" value="0" id="should_more_true" required="true" />
        <label for="should_more_true">Yes, people should be more likely to classify it as true</label>
    </div>
    <div>
        <input name="should_cons" type="radio" value="1" id="should_more_false" />
        <label for="should_more_false">Yes, people should be more likely to classify it as false</label>
    </div>
    <div>
        <input name="should_cons" type="radio" value="2" id="should_unaffect" />
        <label for="should_unaffect">No, it should not affect how people classify it</label>
    </div>
    <div>
        <input name="should_cons" type="radio" value="3" id="should_unsure" />
        <label for="should_unsure">Unsure</label>
    </div>
    <div>
        <input name="should_cons" type="radio" value="4" id="should_not_understand" />
        <label for="should_not_understand">I don't understand the question</label>
    </div>
    <br>
    Outside of the context of the game you just played, imagine someone said something that was close to the truth, but was not perfectly accurate.
    <br>
    <br>
    In general, do you think that if this inaccuracy changed the outcome of the situation, it <strong>should</strong> (in an ideal world) influence how people classify the truth of the person's statement?
    <div>
        <input name="should_cons_general" type="radio" value="0" id="should_more_gen_true" required="true" />
        <label for="should_more_gen_true">Yes, people should be more likely to classify it as true</label>
    </div>
    <div>
        <input name="should_cons_general" type="radio" value="1" id="should_more_gen_false" />
        <label for="should_more_gen_false">Yes, people should be more likely to classify it as false</label>
    </div>
    <div>
        <input name="should_cons_general" type="radio" value="2" id="should_gen_unaffect" />
        <label for="should_gen_unaffect">No, it should not affect how people classify it</label>
    </div>
    <div>
        <input name="should_cons_general" type="radio" value="3" id="should_gen_unsure" />
        <label for="should_gen_unsure">Unsure</label>
    </div>
    <div>
        <input name="should_cons_general" type="radio" value="4" id="should_gen_not_understand" />
        <label for="should_gen_not_understand">I don't understand the question</label>
    </div>
    <br>
</div>
`

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
        <br>
    </div>
`

const feedback_questions = `
    <div style="text-align: left; max-width: 800px">
        <br>
        In this study, did you understand the rules for playing the role of the Decider?
        <div>
            <input name="understand" type="radio" value="0" id="no" />
            <label for="no">No</label>
        </div>
        <div>
            <input name="understand" type="radio" value="1" id="yes" />
            <label for="yes">Yes</label>
        </div>
        <div>
            <input name="understand" type="radio" value="2" id="unsure" />
            <label for="unsure">Unsure</label>
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
    <div style="text-align: left;">
        <strong>What was this study about?</strong>
        <br>
        In this study, we were trying to better understand how people decide what information should qualify as true or false.
        <br>
        <br>
        It's important to note that the estimations you saw from a "previous Reporter" were not in fact estimations made by a real person. 
        In each round, we chose both the exact % chance of winning and the Reporter's estimate based off of the threshold you entered.  
        <br>
        <br>
        We said that the estimations were determined by previous participants because we're interested in how people evaluate the truth of information in real-world scenarios.
        We wanted our participants in this study to believe that they were seeing approximations that real people had created.
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