// Colton and Mustafa
// const arr = [ 
// ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
// ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
// ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
// ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
// ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
// ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
// ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
// ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
// ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// ];

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))

    for (let c = 0; c < letters[0].length; c++){
        let verticalJoin = "";
        for (let r = 0; r < letters.length; r++){
            verticalJoin += letters[r][c];
            if (verticalJoin.includes(word)) return true;
        }
    }
  
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }

    // search vertically
    // nested for loop
    // for row
    //  for column
    //      string += array[row][column];
    //      if string includes word return true


    return false;
}

// wordSearch(arr, "ssss")

module.exports = wordSearch