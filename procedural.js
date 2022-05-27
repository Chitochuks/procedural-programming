const dotProduct1 = (arr1, arr2) => {
    if(arr1.length !== arr2.length) {
    throw new Error('Invalid')
    }
    let product = 0
    for(i = 0; i < arr1.length; i++) {
    for(j = 0; j < arr2.length; j++) {
        if(j === i){
          product += arr1[i] * arr2[i]
        }
    }
    }
    return product
    };
console.log(dotProduct1([2, 3, 1], [3, 1, -9]));