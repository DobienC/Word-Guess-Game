var guesses_left = 10;
var wins = 0;
var loses = 0;
var guesses = [];
var holder = [];
var ansVal = "a";
var possible ="abcdefghijklmnopqrstuvwxyz"

$(document).keypress(function(event){   //65-90
    if(guesses_left === 10){
        ansVal = possible.charAt(Math.floor(Math.random() * possible.length));
    }
    var charVal = String.fromCharCode(event.keyCode);
    for(var i = 0; i < guesses.length; i++){
        holder.push(guesses[i]);
    }
    holder.push(charVal);
    guesses = holder;
    holder = [];
    guesses_left--;
    if(ansVal === charVal){
        alert("You guessed it! The answer was: " + ansVal);
        wins++;
        guesses_left = 10;
        guesses = [];
    }
    if(guesses_left === 0){
        loses++;
        guesses_left = 10;
        guesses = [];
    }
    $('#wins').html(wins); //event.keyCode
    $('#loses').html(loses);
    $('#guesses_left').html(guesses_left);
    $('#guesses').html(guesses);
});

// $(document).ready(function(){
//     $('#wins').keypress(function() {
//         $('#wins').html(wins);
//     });

//     $('#loses').keypress(function() {
//         $('#loses').html(loses);
//     });

//     $('#guesses_left').keypress(function() {
//         $('#guesses_left').html(guesses_left);
//     });

//     $('#guesses').keypress(function() {
//         $('#guesses').html(guesses);
//     });
// });