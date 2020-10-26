/**
 *   @author Tristan Werden
 *   @version 0.0.1
 *   @summary Slot Machine = cool!
 *   @todo null
 */

"use strict";


const PROMPT = require('readline-sync');
let continueResponse;
let cash, totalCashInput, output, totalOutput;
let word1, word2, word3;

main();

function main() {
  setContinueResponse();
  while (continueResponse === `continue`) {
    inputCash();
    calcTotalInput();
    setWords();
    wordIfLogic();
    calcTotalOutput();
    setContinueResponse();
  }
  printGoodbye();
}

function setContinueResponse() {
  let keyInResponse = ['continue', 'end program'], index;

  if (continueResponse === `continue` || continueResponse === `end program`) {
    index = PROMPT.keyInSelect(keyInResponse, 'Would you like to continue?');
    continueResponse = keyInResponse[index];
    while (continueResponse !== `continue` && continueResponse !== `end program`) {
      console.log(`${continueResponse} is an incorrect value. Please try again.`);
      index = PROMPT.keyInSelect(keyInResponse, 'Would you like to continue?');
      continueResponse = keyInResponse[index];
    }
  } else {
    continueResponse = `continue`;
  }
}

function inputCash(){
  cash = Number(PROMPT.question(`How much would you like to insert into the machine?`));
  console.log(`You have inserted ` + cash + ` dollars.`);
}

function calcTotalInput(){
  if (totalCashInput === undefined){
    totalCashInput = cash;
  } else {
  totalCashInput = Number(totalCashInput + cash);

}}

function setWords(){
  let words = [`Cherries`, `Oranges`, `Plums`, `Bells`, `Melons`, `Bars`];
  let wordGen1, wordGen2, wordGen3;
  wordGen1 = Math.floor(Math.random() * Math.floor(6));
  wordGen2 = Math.floor(Math.random() * Math.floor(6));
  wordGen3 = Math.floor(Math.random() * Math.floor(6));
  word1 = words[wordGen1];
  word2 = words[wordGen2];
  word3 = words[wordGen3];
  console.log(`Word 1 is` + word1);
  console.log(`Word 2 is` + word2);
  console.log(`Word 3 is` + word3);
}

function wordIfLogic(){
  const JACKPOT = 3;
  const SCORE = 2;
  if (word1 === word2 === word3){
    output = cash * JACKPOT;
    console.log(`You won ` + output + ` dollars!`);
  } else if (word1 === word2 || word1 === word3 || word2 === word3) {
    output = cash * SCORE;
    console.log(`You won ` + output + ` dollars!`);
  }else{
    output = 0;
    console.log(`Better luck next time!`);
  }

}

function calcTotalOutput(){
  if (totalOutput === undefined){
    totalOutput = output;
  } else {
    totalOutput = Number(totalOutput + output);
  }
}

function printGoodbye(){
  console.log(`You input a total of ` + totalCashInput + ` dollars`);
  console.log(`You won a total of ` + totalOutput + ` dollars`);
}


