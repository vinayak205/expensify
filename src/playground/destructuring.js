const arr = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ coffeeType, , cost ] = arr;

console.log(`A medium ${coffeeType} costs ${cost}`);