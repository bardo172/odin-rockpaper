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

    DISPLAY "To play again, use command 'playGame'"


Example Round:
Input: Player chooses "Rock."
Output:
    Round number: 1/5
    Human selected: Rock
    Computer selected: Scissors
    Result: "Human Wins!" 
    Human Score: 1, Computer Score: 0

Example Game Result:
Output: 
    The Winner is Human

    To play again, use command 'playGame'

Conclusion:
This pseudocode serves as a blueprint for developing a Rock-Paper-Scissors game. Future improvements could include adding features like a graphical interface or support for more players.

*/


// CODE


