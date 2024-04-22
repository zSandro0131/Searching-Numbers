function linearSearch (arr , target) {
    
    for (let i= 0 ; i < arr.length ; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}

console.log(linearSearch([0 , 5 , 4 , 8 , 10 , 3 , 2 , 9 , 1 , 6 , 7], 10))
console.log(linearSearch([0 , 5 , 4 , 8 , 10 , 3 , 2 , 9 , 1 , 6 , 7], 7))
console.log(linearSearch([0 , 5 , 4 , 8 , 10 , 3 , 2 , 9 , 1 , 6 , 7], 20))