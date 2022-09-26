const dolphinsScore = [96,108,89]
const koalasScore = [88,91,110];

const dolphinsAvg = dolphinsScore.reduce((a,b)=> a+b,0)/dolphinsScore.length.toFixed(0);

const koalsAvg = koalasScore.reduce((a,b)=> a+b,0)/koalasScore.length.toFixed(0);

if (dolphinsAvg > koalsAvg) {
    console.log(`Dolphins win!`)
} else if (koalsAvg > dolphinsAvg) {
    console.log(`Koalas win!`)
} else {
    console.log(`It'a draw!`)
}

