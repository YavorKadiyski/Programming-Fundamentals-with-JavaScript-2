function rounding(number, precision) {

    if (precision > 15) {
        precision = 15;
    }
    let finalRezult = number.toFixed(precision);

    console.log(parseFloat(finalRezult));

}
rounding(10.5, 3);
