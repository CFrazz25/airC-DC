/* ======================================================== 
              javascript sound button set up
   ======================================================== */

var button7 = new Image();
button7.src ="/images/basstwo.png";
var buttonData7 = { name:"guitar", image:button7, x:100, y:750, w:1060, h:-500 };

var buttons = [];

var button1 = new Image();
button1.src ="images/pick.png";
var buttonData1 = { name:"strum", image:button1, x:50, y:700, w:160, h:160, class:"strum" };
buttons.push( buttonData1 );

var button2 = new Image();
button2.src ="images/g.png";
var buttonData2 = { name:"G", image:button2, x:1180, y:30, w:100, h:100 };
buttons.push( buttonData2 );

var button3 = new Image();
button3.src ="images/a.png";
var buttonData3 = { name:"A", image:button2, x:1000, y:160, w:100, h:100 };
buttons.push( buttonData3 );

var button4 = new Image();
button4.src ="images/b.png";
var buttonData4 = { name:"B", image:button2, x:800, y:300, w:100, h:100 };
buttons.push( buttonData4 );

var button5 = new Image();
button5.src ="images/d.png";
var buttonData5 = { name:"D", image:button2, x:590, y:450, w:100, h:100 };
buttons.push( buttonData5 );

var button6 = new Image();
button6.src ="images/e.png";
var buttonData6 = { name:"E_hi", image:button2, x:360, y:590, w:100, h:100 };
buttons.push( buttonData6 );

notes = ["A", "B", "D", "strum", "E_hi", "G"];
sounds = [];

for (var i =0; i < notes.length; i++) {
  sounds.push( document.getElementById(notes[i]));
}

theUrl = "https://7972657d7c.dataplicity.io/17/on"



function play() {

}

// function httpGet(theUrl)
// {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
//     xmlHttp.send( null );
//     return xmlHttp.responseText;
// }

function isStrumming(buttonName) {
  if (buttonName === "strum") {
    return true;
  }
  return false;
}

function playSound(sound){

  var audio = document.getElementById(sound);
  if (readyToPlay(audio)) {
    delay(audio);
    stopNote(sounds);
    audio.play();

    //httpGet(theUrl);
  }
 }

 function stopNote(sounds) {
    for (var i =0; i < sounds.length; i++) {
      if (sounds[i].duration > 0) {
        sounds[i].pause();
        sounds[i].currentTime = 0;
      }
    }
 }

function readyToPlay(soundTime) {
  if ((soundTime.currentTime > .20) || (soundTime.currentTime === 0)) {
    return true
  } else {
  return false
  }
}

function delay(sound) {
  if (sound.duration > 0 && !sound.paused) {
      sound.currentTime = 0;
    }
  } 