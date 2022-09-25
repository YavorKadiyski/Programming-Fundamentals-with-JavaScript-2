function vacation(people, typeOfThePiople, dauOfTheWeek) {

    let totalPrice = 0;

    switch (typeOfThePiople) {
        case 'Students':
            switch (dauOfTheWeek) {
                case 'Friday':
                    totalPrice = people * 8.45;
                    if (people >= 30) {
                        totalPrice *= 0.85;
                    }
                    console.log(`Total price: ${totalPrice.toFixed(2)}`);
                    break;
                case 'Saturday':
                    totalPrice = people * 9.8;
                    if (people >= 30) {
                        totalPrice *= 0.85;
                    }
                    console.log(`Total price: ${totalPrice.toFixed(2)}`);
                    break;
                case 'Sunday':
                    totalPrice = people * 10.46;
                    if (people >= 30) {
                        totalPrice *= 0.85;
                    }
                    console.log(`Total price: ${totalPrice.toFixed(2)}`);
                    break;
            }
            break;
        case 'Business':
            switch (dauOfTheWeek) {
                case 'Friday':
                    if (people >= 100) {
                        people -= 10;
                    }
                    totalPrice = people * 10.9;
                    console.log(`Total price: ${totalPrice.toFixed(2)}`);
                    break;
                case 'Saturday':
                    if (people >= 100) {
                        people -= 10;
                    }
                    totalPrice = people * 15.6;
                    console.log(`Total price: ${totalPrice.toFixed(2)}`);
                    break;
                case 'Sunday':
                    if (people >= 100) {
                        people -= 10;
                    }
                    totalPrice = people * 16;
                    console.log(`Total price: ${totalPrice.toFixed(2)}`);
                    break;
            }
            break;
        case 'Regular':
            switch (dauOfTheWeek) {
                case 'Friday':
                    totalPrice = people * 15;
                    if (people >= 10 && people <= 20) {
                        totalPrice *= 0.95;
                    }
                    console.log(`Total price: ${totalPrice.toFixed(2)}`);
                    break;
                case 'Saturday':
                    totalPrice = people * 20;
                    if (people >= 10 && people <= 20) {
                        totalPrice *= 0.95;
                    }
                    console.log(`Total price: ${totalPrice.toFixed(2)}`);
                    break;
                case 'Sunday':
                    totalPrice = people * 22.5;
                    if (people >= 10 && people <= 20) {
                        totalPrice *= 0.95;
                    }
                    console.log(`Total price: ${totalPrice.toFixed(2)}`);
                    break;
            }
            break;
    }
}
vacation(40, "Regular", "Saturday");