"use strict";
const CROSS = -1;
const CIRCLE = 1;
const BLANK = 0;
var currentMove = CROSS;
let gameValues = [[BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]];
let blankCounter = 9;


document.addEventListener("DOMContentLoaded", function () {
    let ticTacBlocks = document.querySelectorAll('.tic-tac-block');
    ticTacBlocks.forEach(function(ticTacBlock){
        ticTacBlock.addEventListener('click', fillBlock);
    });

   
   
    

    function fillBlock(el) {
        if (!alreadyFilled(el.target)) {
            el.target.setAttribute('icon', currentMove);
            filpMove();
            validateMatch();
            checkIfFull();
        }
    }

    function alreadyFilled(ticTacBlock) {
        let pos=ticTacBlock.getAttribute('position');
        arrayIndexPosition = pos.split(',');
        if(gameValues[arrayIndexPosition[0],arrayIndexPosition[1]]===BLANK)
         return false;
         else
         return true;
     }


    function filpMove() {
        if(currentMove==CROSS){
            currentMove = CIRCLE;
        }
        else{
            currentMove = CROSS;
        }
        blankCounter = blankCounter -1;

    }

    function validateMatch(currentElementPosition) {
        let pos=this.getAttribute("position");
        var numbers = pos.match(/\d+/g).map(Number);

    }

    function resetGame() {
        let ticTacBlocks = document.querySelectorAll('.tic-tac-block');
        for (let ticTacBlock in ticTacBlocks) {
            if (ticTacBlock.hasAttribute('icon') != null) {
                ticTacBlock.removeAttribute('icon');
            }
        }
    }

    function checkIfFull() {
        if(blankCounter==0){
            winningCelebration();
        }
    }

    function winningCelebration() {
        promiseObject.then((winningMessage)=>{
            alert(winningMessage);
        }).catch((reason)=>{
            alert("some error occured"+reason);
        });
    }

    let promiseObject =  new Promise((resolve,reject)=>{
        resolve('You won, But actually you lost as now you have nothing to do. LOSER');
    });
});




