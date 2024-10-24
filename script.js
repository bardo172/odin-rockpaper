/*  
Title: Rock-Paper-Scissors Game Pseudocode

Overview:
This pseudocode outlines the logic for a simple Rock-Paper-Scissors game that allows a human player to compete against the computer. The game runs for five rounds, and scores are kept to determine the overall winner.

Definitions:
- humanScore: Integer, tracks the player's score.
- computerScore: Integer, tracks the computer's score.
- humanChoice: String, stores the player's choice.
- computerChoice: Integer, stores the computer's choice.
- roundResult: String, stores the result of each round.
- humanChoiceNumeric: Integer, stores the numeric representation of humanChoice.

Input/Output Section:
Inputs:
- Commands: "playGame" to start.
- Player choices: "Rock," "Paper," "Scissors." (Can also use upper, lower and just first letter of the choice).

Outputs:
- Round results including human choice, computer choice, and result.
- Overall winner after five rounds.

Pseudocode:
FUNCTION playGame:
    INITIALIZE humanScore = 0
    INITIALIZE computerScore = 0
    INITIALIZE round = 0
    
    WHILE round < 5:
        INCREMENT round
        humanChoiceNumeric = getHumanChoice() // Get the human choice and its numeric value
        computerChoice = getComputerChoice() // Get computer choice as random number between 1 and 3
        roundResult = calculateResult(humanChoiceNumeric, computerChoice)
        UPDATE scores based on roundResult
            IF roundResult == "Human Wins!" THEN
                INCREMENT humanScore
            ELSE IF roundResult == "Computer Wins!" THEN
                INCREMENT computerScore

        DISPLAY round results with selections and outcome 
            CALL displayRoundResults(humanChoiceNumeric, computerChoice, roundResult, round)

    DISPLAY game results
        CALL displayGameResults(humanScore, computerScore)


FUNCTION getHumanChoice:
    WHILE TRUE:
        humanChoice = PROMPT("Please choose Rock, Paper, or Scissors: ") // Prompting user for input
        SET humanChoiceLower = LOWERCASE(humanChoice)
        IF humanChoiceLower is "r" OR humanChoiceLower is "rock" THEN
            RETURN 1
        ELSE IF humanChoiceLower is "p" OR humanChoiceLower is "paper" THEN
            RETURN 2
        ELSE IF humanChoiceLower is "s" OR humanChoiceLower is "scissors" THEN
            RETURN 3
        ELSE
            DISPLAY "Invalid choice, please choose Rock, Paper or Scissors."


FUNCTION getComputerChoice:
    COMPUTE random number (1-3)
    RETURN random number // Numeric value (1: Rock, 2: Paper, 3: Scissors)

FUNCTION calculateResult(humanChoiceNumeric, computerChoice):
    IF humanChoiceNumeric == computerChoice THEN
        RETURN "Tie!"
    ELSE IF (humanChoiceNumeric == 1 AND computerChoice == 3) OR
             (humanChoiceNumeric == 2 AND computerChoice == 1) OR
             (humanChoiceNumeric == 3 AND computerChoice == 2) THEN
        RETURN "Human Wins!"
    ELSE
        RETURN "Computer Wins!"

FUNCTION displayRoundResults(humanChoiceNumeric, computerChoice, roundResult, round):
    DISPLAY "Round number: " + round + "/5"
    DISPLAY "Human selected: " + humanChoice
    DISPLAY "Computer selected: " + convertChoiceToString(computerChoice)
    DISPLAY "Result: " + roundResult
    DISPLAY "Human Score: " + humanScore + ", Computer Score: " + computerScore

FUNCTION convertChoiceToString(choice):
    IF choice == 1 THEN RETURN "Rock"
    ELSE IF choice == 2 THEN RETURN "Paper"
    ELSE IF choice == 3 THEN RETURN "Scissors"

FUNCTION displayGameResults(humanScore, computerScore)
    IF humanScore == computerScore THEN
        DISPLAY "Is a Tie!"
    ELSE IF (humanScore > computerScore) THEN
        DISPLAY "The Winner is Human"
    ELSE (humanScore < computerScore) THEN
        DISPLAY "The Winner is Computer"

    DISPLAY "To play again, refresh page or use command 'playGame'"


Example Round:
Input: Player chooses "Rock."
Output:
    ┌───────────────────────────────────┐
    │ Round number: 1/5                 │
    │ Human selected: Rock              │
    │ Computer selected: Scissors       │
    │ Result: Human Wins!               │
    │ Human Score: 1, Computer Score: 0 │
    ├───────────────────────────────────┤

Example Game Result:
Output: 
    ├───────────────────────────────────┤
    │       The Winner is Human!        │
    │                                   │
    │ To play again, refresh the page   │
    │ or use the command 'playGame'     │
    └───────────────────────────────────┘

Conclusion:
This pseudocode serves as a blueprint for developing a Rock-Paper-Scissors game. Future improvements could include adding features like a graphical interface or support for more players.

*/


// CODE

// Function to start the game
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;

    console.log(""); //spaces just because in Chrome the prompt box gets in the way
    console.log("");
    console.log("┌───────────────────────────────────┐");


    // Play 5 rounds
    while (round < 5) {
        round++;
        let humanChoiceNumeric = getHumanChoice();  // Get the human's choice
        let computerChoice = getComputerChoice();  // Get the computer's random choice
        let roundResult = calculateResult(humanChoiceNumeric, computerChoice);  // Get the result of the round
        
        // Update scores based on the result
        if (roundResult === "Human Wins!") {
            humanScore++;
        } else if (roundResult === "Computer Wins!") {
            computerScore++;
        }

        // Display round results
        displayRoundResults(humanChoiceNumeric, computerChoice, roundResult, round, humanScore, computerScore);
    }

    // Display the overall game results
    displayGameResults(humanScore, computerScore);
}

// Function to get human's choice and convert it to a numeric value
function getHumanChoice() {
    while (true) {
        let humanChoice = prompt("Please choose Rock, Paper, or Scissors: ");
        let humanChoiceLower = humanChoice.toLowerCase();

        if (humanChoiceLower === "r" || humanChoiceLower === "rock") {
            return 1; // Rock
        } else if (humanChoiceLower === "p" || humanChoiceLower === "paper") {
            return 2; // Paper
        } else if (humanChoiceLower === "s" || humanChoiceLower === "scissors") {
            return 3; // Scissors
        } else {
            console.log("Invalid choice, please choose Rock, Paper, or Scissors.");
        }
    }
}

// Function to get a random choice for the computer (1: Rock, 2: Paper, 3: Scissors)
function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

// Function to calculate the result of the round
function calculateResult(humanChoiceNumeric, computerChoice) {
    if (humanChoiceNumeric === computerChoice) {
        return "Tie!";
    } else if (
        (humanChoiceNumeric === 1 && computerChoice === 3) || // Rock beats Scissors
        (humanChoiceNumeric === 2 && computerChoice === 1) || // Paper beats Rock
        (humanChoiceNumeric === 3 && computerChoice === 2)    // Scissors beat Paper
    ) {
        return "Human Wins!";
    } else {
        return "Computer Wins!";
    }
}

// Function to display the results of each round with aligned output
function displayRoundResults(humanChoiceNumeric, computerChoice, roundResult, round, humanScore, computerScore) {
    // Convert choices to strings and pad them for alignment
    let humanChoiceStr = convertChoiceToString(humanChoiceNumeric).padEnd(11, ' ');
    let computerChoiceStr = convertChoiceToString(computerChoice).padEnd(8, ' ');

    console.log("│ Round number: " + round + "/5                 │");
    console.log("│ Human selected: " + humanChoiceStr + "       │");
    console.log("│ Computer selected: " + computerChoiceStr + "       │");
    console.log("│ Result: " + roundResult.padEnd(25, ' ') + " │");
    console.log("│ Human Score: " + humanScore + ", Computer Score: " + computerScore + " │");
    console.log("├───────────────────────────────────┤");
}


// Function to convert the numeric choice to a string (1: Rock, 2: Paper, 3: Scissors)
function convertChoiceToString(choice) {
    if (choice === 1) return "Rock";
    if (choice === 2) return "Paper";
    if (choice === 3) return "Scissors";
}

// Function to display the final game results with box-drawing characters
function displayGameResults(humanScore, computerScore) {
    console.log("├───────────────────────────────────┤");
    if (humanScore === computerScore) {
        console.log("│           It's a Tie!             │");
    } else if (humanScore > computerScore) {
        console.log("│       The Winner is Human!        │");
    } else {
        console.log("│      The Winner is Computer!      │");
    }
    console.log("│                                   │");
    console.log("│ To play again, refresh the page   │");
    console.log("│ or use the command 'playGame()'   │");
    console.log("└───────────────────────────────────┘");
}

// Start the game
playGame();



