const dolphinsScore = [110,108,89]
const koalasScore = [88,91,110];

const dolphinsAvg = dolphinsScore.reduce((a,b)=> a+b,0)/dolphinsScore.length.toFixed(0);

const koalsAvg = koalasScore.reduce((a,b)=> a+b,0)/koalasScore.length.toFixed(0);

const isLegit = 100;

if (dolphinsAvg > koalsAvg && dolphinsAvg >= isLegit) {
    console.log(`Dolphins win!`)
} else if (koalsAvg > dolphinsAvg && koalsAvg >= isLegit) {
    console.log(`Koalas win!`)
} else if (koalsAvg === dolphinsAvg && koalsAvg >= isLegit && dolphinsAvg >= isLegit) {
    console.log(`It'a draw!`)
} else {
    console.log(`No one wins the trophy!`)
}

