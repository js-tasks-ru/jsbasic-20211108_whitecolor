function camelize(str) {
  let wordSpit = str.split('-');
  for(let i = 0; i < wordSpit.length; i++)
  {
    if ( i == 0 ) 
      continue;
      let charArray =  wordSpit[i].split("");
      charArray[0] = wordSpit[i].charAt(0).toUpperCase();
      wordSpit[i] = charArray.join("");
  }
  str = wordSpit.join("");
  return str;
}