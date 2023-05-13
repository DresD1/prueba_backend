const args = process.argv.slice(2);

function getOddNumbers(n) {
    const oddNumbers = [];

    for (let i = 1; i <= n; i += 2) {
        oddNumbers.push(i);
    }

    return oddNumbers;
}
if(args.length > 0 && args.length <= 1){
    const resultado = getOddNumbers(args);
    console.log(resultado);
}else if(args.length == 0){
    console.log('No number passed as an argument');
}else if(args.length > 1){
    console.log('To many arguments');
}
