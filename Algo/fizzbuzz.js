
const fizzbuzz = (n) => {
    let number = 1
    if (typeof n !== 'number') return console.error(`Error: you must given a integer, you give ${typeof n}`);

    while (number <= n) {
        let displayN = '';
        
            // check number is divisible by 3 OR by 5
            if ((number % 3 === 0) || (number % 5 === 0) ) {
                if ( number % 3 === 0) {
                    displayN += 'Fizz';
                }
                if (number % 5 === 0) {
                    displayN += 'Buzz';
                } 
            // else stock the number
            } else {
               displayN = number;   
            }
                    
        console.log(displayN);
        number++;
    }
    return;
}

// fizzbuzz(15)
// fizzbuzz(30)
// fizzbuzz('false')
// fizzbuzz(false)
