var guesses_left = 10;
var wins = 0;
var loses = 0;
var guesses = [];
var holder = [];
var guesses_list = [];
var ansVal = "a";
var possible = ["red","blue","green","yellow",
                "pink","black","white","orange",
                "purple","teal","silver","brown"]
var word = "";

$(document).keypress(function(event){   //65-90
    if(guesses_left === 15){
        changeWord(); //possible.charAt(Math.floor(Math.random() * possible.length));
        resetHolder();
    }
    guesses_left--;
    holder = guesses;
    guesses = [];
    for(var i = 0; i < word.length; i++){
        ansVal = String.fromCharCode(event.keyCode);
        if(inWord(ansVal,i)){
            guesses.push(ansVal); 
        }else if(inList(ansVal)){
            guesses.push(holder[i]);
        } else {
            guesses.push("-");
        }
    }
    guesses_list.push(ansVal);
    if(isComplete()){
        wins++;
        guesses_left = 15;
    } else if(guesses_left <= 0){
        guesses_left = 15;
        loses++;
    }
    $('#wins').html(wins); //event.keyCode
    $('#loses').html(loses);
    $('#guesses_left').html(guesses_left);
    $('#guesses').text(guesses);
    $('#guesses_list').text(guesses_list);
});

function inWord(letter, index){
    if(letter === word.charAt(index)){
        return true;
    }
    return false;
}

function inList(letter){
    for(var i = 0; i < holder.length; i++){
        if(holder[i] !== "-"){
            return true;
        }
    }
    return false;
}

function isComplete(){
    for(var i = 0; i < word.length; i++){
        if(holder[i] === "-"){
            return false;
        }
    }
    return true;
}

function changeWord(){
    word = possible[Math.floor(Math.random() * 12)];
}

function resetHolder(){
    holder = [];
    for(var j = 0; j < word.length; j++){
        holder.push("-");
    }
    guesses = holder;
    guesses_list = [];
}
