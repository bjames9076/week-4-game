

var ruby;

var emerald;

var sapphire;

var diamond;

var guessTotal;

var total;

var winCount = 0;

var lossCount = 0;


function newGame(){

    total = Math.floor((Math.random() * 12) + 1);

    ruby = Math.floor((Math.random() * 12) + 1);
    
    emerald = Math.floor((Math.random() * 12) + 1);
    
    sapphire = Math.floor((Math.random() * 12) + 1);
    
    diamond = Math.floor((Math.random() * 12) + 1);

    total = Math.floor((Math.random() * 120) + 1);

    guessTotal = 0;

    document.getElementById("total").innerHTML = total;

    document.getElementById("guessTotal").innerHTML = guessTotal;

    document.getElementById("winCount").innerHTML = "Wins: " + winCount;

    document.getElementById("lossCount").innerHTML = "Losses: " + lossCount;

}



function myRuby() {
    document.getElementById("alert").innerHTML = " ";
    guessTotal = guessTotal + ruby;
    if(guessTotal >= total){
        if(guessTotal === total){
            document.getElementById("guessTotal").innerHTML = guessTotal;
            document.getElementById("alert").innerHTML = "You win!!";
            newGame();
            winCount++;
            return;
            
        }
        lossCount++;
        document.getElementById("alert").innerHTML = "You lose.";
        newGame();
    }
    document.getElementById("guessTotal").innerHTML = guessTotal;
}

function myEmerald() {
    document.getElementById("alert").innerHTML = " ";
    guessTotal = guessTotal + emerald;
    if(guessTotal >= total){
        if(guessTotal === total){
            document.getElementById("guessTotal").innerHTML = guessTotal;
            document.getElementById("alert").innerHTML = "You win!!";
            newGame();
            winCount++;
            return;

        }
        lossCount++;                
        document.getElementById("alert").innerHTML = "You lose.";
        newGame()
        
    }
    document.getElementById("guessTotal").innerHTML = guessTotal;
}

function mySapphire() {
    document.getElementById("alert").innerHTML = " ";
    guessTotal = guessTotal + sapphire;
    if(guessTotal >= total){
        if(guessTotal === total){
            document.getElementById("guessTotal").innerHTML = guessTotal;
            document.getElementById("alert").innerHTML = "You win!!";
            newGame();
            winCount++;
            return;
        }
        lossCount++;
        document.getElementById("alert").innerHTML = "You lose.";
        newGame()
        
    }
    document.getElementById("guessTotal").innerHTML = guessTotal;
}

function myDiamond() {
    document.getElementById("alert").innerHTML = " ";
    guessTotal = guessTotal + diamond;
    if(guessTotal >= total){
        if(guessTotal === total){
            document.getElementById("guessTotal").innerHTML = guessTotal;
            document.getElementById("alert").innerHTML = "You win!!";
            newGame();
            winCount++;
            return;
        }
        lossCount++;
        document.getElementById("alert").innerHTML = "You lose.";
        newGame();
        
    }
    document.getElementById("guessTotal").innerHTML = guessTotal;
}

