
async function getSinOfVariables(x, y, z) {
    try {
        let addition = x + y;
        let multiplication = addition * z;
        let sinFunction = Math.sin(multiplication);
        return sinFunction;

    } catch (error) {
        console.error(error.message);
    }
}

console.log(getSinOfVariables(1, 2,3));
