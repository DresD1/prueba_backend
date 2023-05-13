const args = process.argv.slice(2);

async function getSinOfVariables() {
    try {

        x = 0;
        y = 0;
        z = 0;

        if(args.length > 0){
            x = args[0];
        }
        if(args.length > 1){
            y = args[1];
        }
        if(args.length > 2){
            z = args[2];
        }

        let addition = x + y;
        let multiplication = addition * z;
        let sinFunction = Math.sin(multiplication);

        return sinFunction;

    } catch (error) {
        console.error(error.message);
    }
}

const result = getSinOfVariables();
console.log(result);
