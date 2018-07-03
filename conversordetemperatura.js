// coloca variável com valor fixo
const kelvin = 100;
console.log(kelvin);
//converte de kelvin para celsius
let celsius = kelvin-273;
console.log(celsius);
// converte celsius para fahrenheit
let fahrenheit = celsius*(9/5)+32;
//Arredonda o numero
farenheit = Math.floor(fahrenheit);
console.log(fahrenheit);
// Aqui eu usei o math.floor aplicado direto na hora de setar a variável
let newton = Math.floor(celsius*(33/100));
console.log("Em newtons:" + newton);
console.log(`The tempereture is ${farenheit} degrees Farenheit. And is ${celsius} ou ${newton} em Newtons`);
