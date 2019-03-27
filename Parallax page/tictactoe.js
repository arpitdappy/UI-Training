"use strict";
const CROSS = -1;
const CIRCLE = 1;
const BLANK = 0;
//var is delebtrately used instead of let as I need variables in other functions as well.
var currentMove;
var gameValues;
var blankCounter;
var matchCompleted;

document.addEventListener("DOMContentLoaded", function () {
    resetGame();
    let ticTacBlocks = document.querySelectorAll('.tic-tac-block');
    ticTacBlocks.forEach(function (ticTacBlock) {
        ticTacBlock.addEventListener('click', fillBlock,true);
    });





    function fillBlock(el) {
        let ticTacBlock
        if (!el.target.hasAttribute('position')) {
            ticTacBlock = el.target.parentElement.parentElement;
        }
        else {
            ticTacBlock = el.target;
        }
        let coordinates = ticTacBlock.getAttribute('position').split(',');
        let xCordinate = parseInt(coordinates[0]);
        let yCordinate = parseInt(coordinates[1]);
        if (!alreadyFilled(xCordinate, yCordinate)) {
            ticTacBlock.setAttribute('value', currentMove);
            gameValues[xCordinate][yCordinate] = currentMove;
            blankCounter = blankCounter - 1;
            if (blankCounter <= 4) {
                validateMatch(xCordinate, yCordinate);
            }
            if (!matchCompleted) {
                filpMove();
            }
            if (!matchCompleted && blankCounter == 0) {
                alert('Draw');
                resetGame();
            }
        }
    }

    function alreadyFilled(xCordinate, yCordinate) {
        if (gameValues[xCordinate][yCordinate] == BLANK)
            return false;
        else
            return true;
    }


    function filpMove() {
        if (currentMove == CROSS) {
            currentMove = CIRCLE;
        }
        else {
            currentMove = CROSS;
        }

    }

    function validateMatch(xCordinate, yCordinate) {
       let matched = true;
        for (let i = 0; i < 3; i++){
            if (gameValues[xCordinate][i] != gameValues[xCordinate][yCordinate])
                matched = false;
        }
        if (matched) {
            matchCompleted = true;
            winningCelebration();
            return true;
        }
        matched = true;
        for (let i = 0; i < 3; i++) {
            if (gameValues[i][yCordinate] != gameValues[xCordinate][yCordinate])
                matched = false;
        }
        if (matched) {
            matchCompleted = true;
            winningCelebration();
            return true;
        }
        matched = true;
        if (xCordinate == yCordinate) {
            for (let i = 0; i < 3; i++){
                if (gameValues[i][i] != currentMove) {
                    matched = false;
                }
            }
        }
        else {
            matched = false;
        }
        if (matched) {
            matchCompleted = true;
            winningCelebration();
            return true;
        }
        matched = true;
        if(xCordinate + yCordinate == 2) {
            if (gameValues[0][2] != currentMove) {
                matched = false;
            }
            else if (gameValues[1][1] != currentMove) {
                matched = false;
            }
            else if (gameValues[2][0] != currentMove) {
                matched = false;
            }
        }
        else {
            matched = false;
        }
        if (matched) {
            matchCompleted = true;
            winningCelebration();
            return true;
        }
        return false;
    }

    function resetGame() {
        let ticTacBlocks = document.querySelectorAll('.tic-tac-block');
        ticTacBlocks.forEach(function (ticTacBlock) {
            if (ticTacBlock.hasAttribute('value') != "BLANK") {
                ticTacBlock.setAttribute('value',"BLANK");
            }
        });
        //var is delebtrately used instead of let as I need variables in other functions as well.
        currentMove = CROSS;
        gameValues = [[BLANK, BLANK, BLANK], [BLANK, BLANK, BLANK], [BLANK, BLANK, BLANK]];
        blankCounter = 9;
        matchCompleted = false;
    }

    let promiseObject = new Promise((resolve, reject) => {
        resolve(currentMove + 'Won, But actually you lost as now you have nothing to do. LOSER');
    });

    function winningCelebration() {
        promiseObject.then((winningMessage) => {
            alert(winningMessage);
            resetGame();
        }).catch((reason) => {
            alert("some error occured" + reason);
        });
    }

   
});




