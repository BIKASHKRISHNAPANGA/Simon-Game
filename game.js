var gamePattern=[];
var userClickedPattern=[];
var buttonColours=["red","blue","green","yellow"];
var started=false;
var level=0;

$("#start-button").click(function (){
    if(!started){
        $("#level-title").text("level "+ level);
        nextSequence();
        started=true;
        $("#start-button").hide(); 
    }
});


$(".btn").click(function (){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
    if(userClickedPattern.length === gamePattern.length){
        setTimeout(function(){
            nextSequence();
        },1000);
    }}
    else
    {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game over , Press reastart ");
    
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200)

        startOver();
    }
    }
    


function nextSequence(){
    var k;
    level++;
    userClickedPattern=[];
    $("#level-title").text("Level " + level);
    var i=Math.round( Math.random()*100);
    if(i<=25)
    k=0;
    if(i>25 && i<=50)
    k=1;
    if(i>50 && i<=75)
    k=2;
    if(i>75 && i<=99)
    k=3;
    // var randomNumber = Math.floor(Math.random() * 4);
     var randomNumber=k;
    var randomChosenColour=buttonColours[randomNumber];
gamePattern.push(randomChosenColour);
$("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);
}


function playSound(name){
    var audio =new Audio("sounds/"+ name +".mp3");
    audio.play();
}


function animatePress(currentColour){
$("#"+currentColour).addClass("pressed");
setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function startOver(){
    level=0;
    gamePattern=[];
    started=false;
    $("#start-button").text("RESTART");
    $("#start-button").show();
}
