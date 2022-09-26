const bill = 40;

const tip = bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.20;

console.log(`The bill was ${bill} USD, the tip was ${tip} USD, and the total value ${bill+tip} USD`);