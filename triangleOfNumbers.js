function triangleOfNumbers(numberN) {

    for (let i = 1; i <= numberN; i++) {

        let row = '';

        for (let j = 1; j <= i; j++) {

            row += `${i} `;
        }
        console.log(row);

    }
}
triangleOfNumbers(3);