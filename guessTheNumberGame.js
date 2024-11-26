//frame Work for userInteraction**********************************************
function putConsole(numberOfConsole) {
  for (let index = 0; index < numberOfConsole; index++) {
    console.log();
  }
}

function alginRightTextRaw(string) {
  console.log(makeFirstLineForLeftAlign());
  console.log(makeSecondLineForLeftAlign(string));
  console.log(makeFirstLineForLeftAlign());
}

function makeFirstLineForLeftAlign() {
  let firstLine = "";

  for (let index = 0; index < 127; index++) {
    if (index < 10 || index > 121) {
      firstLine = firstLine + " ";
      continue;
    }

    firstLine = firstLine + "-";
  }
  return firstLine;
}

function makeSecondLineForLeftAlign(string) {
  let secondLine = "";
  for (let index = 0; index < 127 - (string.length - 1); index++) {
    if (index === 9 || index === (127 - (string.length - 1) - 1) - 4) {
      
      secondLine = secondLine + "|";
      continue;
    }

    if (index === 11) {
      secondLine = secondLine + string;
      continue;
    }

    secondLine = secondLine + " ";
  }
  return secondLine;
}

function makeFirstLineForCenterAlign(boxType = "*") {
  let firstLine = "";

  for (let index = 0; index < 127; index++) {
    if (index < 20 || index > 107) {
      firstLine = firstLine + " ";
      continue;
    }

    firstLine = firstLine + boxType;
  }
  return firstLine;
}

function makeSecondLine(string) {
  let secondLine = "";
  let targetIndex = (21 + ((127 - (string.length - 1) - 1) - 20) - 1) / 2;
  targetIndex = Math.ceil(targetIndex);

  for (let index = 0; index < 127 - (string.length - 1); index++) {
    if (index === 20 || index === (127 - (string.length - 1) - 1) - 20) {
      secondLine = secondLine + "*";
      continue;
    }

    if (index === targetIndex) {
      secondLine = secondLine + string;
      continue;
    }

    secondLine = secondLine + " ";
  }
  
  return secondLine;
}

function alginTextCenterRaw(string, boxType) {
  const firstLine = makeFirstLineForCenterAlign(boxType);
  const secondLine = makeSecondLine(string, boxType);
  console.log(firstLine);
  console.log(secondLine);
  console.log(firstLine);
}

//gameCode ********************************************************************
function helpInGuess(randomNumber, userGuess) {
  if (+randomNumber > +userGuess) {
    alginRightTextRaw(" 💁 Help : try larger number" + "😆");
    putConsole(2);
  }

  if (+randomNumber < +userGuess) {
    alginRightTextRaw(" 💁 Help : try smaller number" + "😆");
    putConsole(2);
  }
}

function startGuessTheGame(randomNumber, totalAttempt) {
  const userGuess = +prompt("Guess the Number");

  if (randomNumber === userGuess) {
    return totalAttempt;
  }

  helpInGuess(randomNumber, userGuess);

  return startGuessTheGame(randomNumber, totalAttempt + 1);
}

function displayResult(totalAttempt) {
  putConsole(2);
  if (totalAttempt < 10) {
    alginTextCenterRaw("you made it to early 😭");
  }

  if (totalAttempt > 9) {
    alginTextCenterRaw("bad luck, try next time 😆");
  }

  console.log("Total Attempt : " + totalAttempt);
}

let matchInformation = "";

function guessTheNumber() {
  putConsole(4);
  alginTextCenterRaw("⋆༺𓆩☠︎︎𓆪༻⋆ GAME IS ⚡︎ STARTING ⋆༺𓆩☠︎︎𓆪༻⋆");
  putConsole(2);

  if (confirm("To continue : ")) {
    putConsole(2);
    console.log("{[guess the number between 0 to 100]}\n");
    const randomNumber = Math.round(Math.random() * 100);
    const totalAttempt = startGuessTheGame(randomNumber, 1);
    displayResult(totalAttempt);
  }

  if (confirm("Wanna Play Again :")) {
    guessTheNumber();
  }

  console.log("Play Later");
}

//MainCode ********************************************************************

let password = 0;

function recoverPasswordWithNumber(number) {
  putConsole(2);
  const recoveryNumber = prompt("enter recovery Number :");
  if (recoveryNumber === number) {
    password = prompt("enter new password : ");
    const reenterdPassword = prompt("Enter password Again :");
    putConsole(1);

    if (password === reenterdPassword) {
      console.log("password Changed successfully");
      login();
    } else {
      console.log("again enterd Password and password should be same");
      console.log("");
      confirm("Press Enter To Continue");
      console.clear;
      forgetPassword();
    }
  }
}

function recoverPasswordWithQuestion(quesion,answer) {
  putConsole(2);
  const recoveryAnswer = prompt(quesion);
  if (recoveryAnswer === answer) {
    password = prompt("enter new password : ");
    const reenterdPassword = prompt("Enter password Again :");
    putConsole(1);

    if (password === reenterdPassword) {
      console.log("password Changed successfully");
      login();
    } else {
      console.log("again enterd Password and password should be same");
      forgetPassword();
    }
  }
}



function forgetPassword(number, question, answer) {
  putConsole(1);

  if (confirm("To recover With Recovery Number")) {
    recoverPasswordWithNumber(number);
  }

  putConsole(1);

  if (confirm("To recover With Recovery Question")) {
    recoverPasswordWithQuestion(question, answer);
  }

  putConsole(1);

  alginTextCenterRaw("try with another ID");
}

function login(id, password, number, question, answer, name) {
  console.clear();
  putConsole(2);
  alginTextCenterRaw("LOGIN 🌐");
  putConsole(2);
  const enterID = prompt("\n👤 ╰┈➤ Enter Id To Login");
  const enterdPassword = prompt("\n🔐 ╰┈➤ Enter the Password");
  let message = "login successfully";

  if (enterID !== id) {
    message = "invalid ID";
  }

  if (enterdPassword !== password) {
    message = "invalid password";
  }

  if (message === "login successfully") {
    console.clear();
    console.log("Login Successfully ✅");
    putConsole(2);
    console.log("三三ᕕ( ᐛ )ᕗ  USER INFORMATION");
    alginRightTextRaw("USER NAME : " + name + "|");
    alginRightTextRaw("USER ID : " + id + "|");
    alginRightTextRaw("USER NUMBER : " + number + "|");
    return guessTheNumber();
  }

  putConsole(2);
  alginTextCenterRaw(message, "🔴");
  putConsole(2);

  if (confirm("For Recovery Of Id")) {
    forgetPassword(number, question, answer);
  }

  putConsole(1);

  console.log("Try Again later");
}


/*
  "
  dheeraj|10
  sakib|8"
*/

function signup() {
  putConsole(2);
  alginTextCenterRaw("SIGN UP 🔗");
  putConsole(2);

  const name = prompt("💁 ╰┈➤ Enter Name :");
  const id = prompt("\n👤 ╰┈➤ Enter Gmail ID :");
  password = prompt("\n🔐 ╰┈➤ Enter Password :");
  const forgetPasswordQuestion = prompt("\n🤔 ╰┈➤ Enter Question To Recover ID In Case Password Is Forgetten :");
  const answerToQuestion = prompt("\n👀╰┈➤Enter Answer :");
  const number = prompt("\n╰┈➤📞Enter Phone Number :");
  
  login(id, password, number, forgetPasswordQuestion, answerToQuestion, name);
}

putConsole(2);
alginTextCenterRaw('👋 | WELCOME To "Number Guess Game" 🤔🔮?🧑🏼‍🎓🧠🍪');
putConsole(2);

if (confirm(" 💁 have account ?")) {
  login();
} else {
  signup();
}


//10
// 0 - 9
// 0 - 8  length = 2, -1  --> 0,1 {2,3,4,5,6} 7,8 
//0 - 7  lenth = 3 , -2   --> 0,1 {3,4,5} 6,7
//12
// 0 - 11
//0 - 10 length = 2 , -1 --> 0,1 {3,4,5,6,7} 8,10
//11
// 0 10--> length =  2 , 0 9 --> 0,1 {2,3,4,5,6,7} 8,9


