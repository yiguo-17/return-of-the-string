/*******************
 * YOUR CODE HERE! *
 *******************/

function yell(Str){
  return Str + '!';
}

  function getFirstCharacter(Str){
    return Str[0];
  }
  function getLastCharacter(Str){
    return Str[Str.length -1];
  }
  function getOneCharacter(Str, Num){
    return Str[Num];
  }
  function getTwoCharacters(Str, Num1, Num2){
    return Str[Num1] + Str[Num2];
  }
  function makeCapitalized(Str){
    return Str.toUpperCase();
  }
  function yellLouder(Str){
    return Str.toUpperCase() + '!!!';
  }
  function getInitials(Str){
   return Str[0] + '.' + Str[Str.indexOf(' ')+1] +'.';
  }




/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
