const input = [1, 15, 40, 0, 15, 2];
const denominator = 256;

const sums = [];
for (let z = 0; z < input.length; z++) {
    sums.push(input.slice(0, z + 1).reduce((sum, element) => {
        return sum + element;
    }, 0));
}

let scaled = [0].concat(
    sums.map(a => {
        return Math.round(a * denominator / sums[sums.length - 1]);
    }));

const numerators = scaled.slice(1).map((val, idx) => {
    return scaled[idx + 1] - scaled[idx];
});

console.log(numerators);
