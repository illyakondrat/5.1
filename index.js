let a = +prompt("Перше число?", "");
let b = +prompt("Друге число?", "");
alert(a + b);


function random(min, max) {
  return min + Math.random() * (max - min);
}
alert(random(1, 5));
alert( random(1, 5) );
alert(random(1, 5));


function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}

alert(randomInteger(1, 3));
//завдання 5.2


function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
alert(ucFirst("василь"));


function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes("viagra") || lowerStr.includes("XXX");
}
alert(checkSpam("buy ViAgRA now"));
alert( checkSpam("free xxxxx") );
alert(checkSpam("innocent rabbit"));


function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + "…" : str;
}


function extractCurrencyValue(str) {
  return +str.slice(1);
}
//завдання 5.3