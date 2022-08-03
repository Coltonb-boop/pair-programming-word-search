// Colton and Mustafa

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

    return false;
}

module.exports = wordSearch