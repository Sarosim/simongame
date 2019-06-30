$(document).ready(function() {
    //declaring variables
    var skillLevel = 1;
    var gameLenghts = [8, 14, 20, 31];
    var gameLenght = 8;
    var randomSequence = [];
    var userSequence = [];
    var tones = ["assets/sounds/piano_E_Low_short.mp3", "assets/sounds/piano_A_short.mp3", "assets/sounds/piano_C_sharp_short.mp3", "assets/sounds/piano_E_short.mp3"];
    var whichButton;
    var gameOver = false;
    
// Clicking the colored Play buttons

    $("#btn-1").click(function() {
        buttonClick = 1;
        myPlay(buttonClick);
    });
    $("#btn-2").click(function() {
        buttonClick = 2;
        myPlay(buttonClick);
    });
    $("#btn-3").click(function() {
        buttonClick = 3;
        myPlay(buttonClick);
    });
    $("#btn-4").click(function() {
        buttonClick = 4;
        myPlay(buttonClick);
    });

//setting skillLevel by click function on radio buttons

    $("#Level_1").click(function() {
        skillLevel = 1;
        gameLenght = gameLenghts[skillLevel - 1];
        console.log("gameLenght: ", gameLenght, "skillLevel: ", skillLevel, "gameLenghts: ", gameLenghts);
        $(this).slideUp(350).slideDown(350);
    });
    $("#Level_2").click(function() {
        skillLevel = 2;
        gameLenght = gameLenghts[skillLevel - 1];
        console.log("gameLenght: ", gameLenght, "skillLevel: ", skillLevel, "gameLenghts: ", gameLenghts);
        $(this).slideUp(350).slideDown(350);

    });
    $("#Level_3").click(function() {
        skillLevel = 3;
        gameLenght = gameLenghts[skillLevel - 1];
        console.log("gameLenght: ", gameLenght, "skillLevel: ", skillLevel, "gameLenghts: ", gameLenghts);
        $(this).fadeOut(350).fadeIn(350);
    });
    $("#Level_4").click(function() {
        skillLevel = 4;
       // debugger;
        gameLenght = gameLenghts[skillLevel - 1];
        console.log("gameLenght: ", gameLenght, "skillLevel: ", skillLevel, "gameLenghts: ", gameLenghts);
        $(this).fadeOut(350).fadeIn(350);
    });

//starting game by click function on Start button

    $("#start").click(function() {
        randomSequence = [];
        userSequence = [];
        gameOver = false;

        for (i = 0; i < gameLenght; i++) {
            var newTone = Math.ceil(Math.random() * 4);
            randomSequence.push(newTone);
        
            playSequence(randomSequence);
            userSequence = [];
            for (j = 0; j < randomSequence.length; j++) {
                //emulating user button selection 
                buttonClick = prompt("Chose a button: (1-green, 2-red, 3-yellow, 4-blue)", "?");
                buttonClick = parseInt(buttonClick);
                myPlay(buttonClick);
                //end of emulation
                    
                userSequence.push(buttonClick);
            }
                isEqual(userSequence, randomSequence);
                if (gameOver == true) {
                    alert("Lost");
                    break;
                }    
                else {    
                    alert("So far so good...");
                }
        }
        if (gameOver == false) alert("You Won");
        console.log("randomSequence:", randomSequence);
        console.log("userSequence:", userSequence);
    });


// Playing individual sounds

    function myPlay(note) {
        var sound = new Audio();
        sound.src = tones[note - 1];
        sound.play();
    }
    
// Playing sound sequences 

    function playSequence(sequence) {
        console.log("sequence:", sequence, "sequence[0]:", sequence[0]);
        
        for (k = 0; k < sequence.length; k++) {
            myPlay(sequence[k]);
        
            whichButton = "#btn-" + sequence[k];
            $(whichButton).addClass("blink").removeClass("blink");
        }
        alert("sequence played, button blinked");
    }
    
// comparing the two button-sequence arrays    

    function isEqual(value1,value2){
        var value1Len = value1.length;
        var value2Len = value2.length;
       
        if (value1Len !== value2Len) {
            alert(" oooops.. surprise, surprise, these should be equal lenght arrays...");
            return gameOver = true;
        }
        
        for (l = 0; l < value1Len; l++) {
            if (value1[l] !== value2[l]) {
                gameOver = true;
                return gameOver;
            }
        }
        gameOver = false;
        return gameOver;
    }

});
