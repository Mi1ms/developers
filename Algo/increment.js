const increment = (number) => {
    
    let reverseArr = number.reverse();
    let isIncrement = false; 
    let idx = 0;

    // if isIncrement is false
    while (!isIncrement) {
        if (reverseArr[idx] == 9) {
            reverseArr[idx] = 0;
            idx++;
        } else {
            
            (reverseArr[idx] !== undefined) ? reverseArr[idx] += 1 : reverseArr[idx] = 1;
            isIncrement = true;
        }
    }
    
    return reverseArr.reverse();
}

// console.log(increment([1, 9]));
// increment([1, 9]);
// increment([9, 9]);

