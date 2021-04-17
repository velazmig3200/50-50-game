//change css background-color //document.body.style.backgroundColor = 'red';

//change HTML elements // document.getElementById('id').style.property = 'new style';

let state1 = 0;
let streak1 = 0;
let headsOrTails;
const heads = 0;
const tails = 1;
let highScore = 0;

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

headsOrTails = randomNumber(2);
/*console.log(headsOrTails);*/
//////////////////////////////////////////////////////////////////////////
function button1() {
  /*console.log(heads);*/

  if (headsOrTails === heads) { //heads win case
    document.getElementById('msg1').innerHTML = 'Heads!';
    document.getElementById('msg2').innerHTML = 'you win...';
    document.body.style.color = '#5d5';

    if (state1 === 0) { //heads streak++
      streak1++;
      /*console.log(streak1);*/
      document.getElementById('msg3').innerHTML = streak1;


    }
  }
  else { //heads lose case
    document.getElementById('msg1').innerHTML = 'Tails!!';
    document.getElementById('msg2').innerHTML = 'YOU LOSE! HA!';
    document.body.style.color = '#d55';

    if (state1 === 0) { //heads streak 0
      streak1 = 0;
      document.getElementById('msg3').innerHTML = streak1;
    }
  }
  state1 = 1;

  highScoreCount();
}
///////////////////////////////////////////////////////////////////////////
function button2() {
  /*console.log(tails);*/

  if (headsOrTails === tails) { //tails win case
    document.getElementById('msg1').innerHTML = 'Tails!';
    document.getElementById('msg2').innerHTML = 'you win...';
    document.body.style.color = '#5d5';

    if (state1 === 0) { //tails streak++
      streak1++;
      /*console.log(streak1);*/
      document.getElementById('msg3').innerHTML = streak1;
    }
  }
  else { //tails lose case
    document.getElementById('msg1').innerHTML = 'Heads!!';
    document.getElementById('msg2').innerHTML = 'I WIN!!';
    document.body.style.color = '#d55';

    if (state1 === 0) { //tails streak 0
      streak1 = 0;
      document.getElementById('msg3').innerHTML = streak1;
    }
  }
  state1 = 1;

  highScoreCount();
}
//////////////////////////////////////////////////////////////////////////
function button3() {
  document.getElementById('msg1').innerHTML = 'Guess';
  document.getElementById('msg2').innerHTML = 'Heads or tails?...';
  document.body.style.color = 'gold';

  headsOrTails = randomNumber(2);
  /*console.log(headsOrTails);*/

  state1 = 0;
}
//////////////////////////////////////////////////////////////////////////
function highScoreCount() {
  if (streak1 > highScore) {
    highScore = streak1;
    document.getElementById('msg4').innerHTML = highScore;
  }
}
