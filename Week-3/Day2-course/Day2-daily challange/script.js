

let sentence="the movie is not so much so bad , i hate it   "


let wordNot= sentence.indexOf("not")
let wordBad= sentence.indexOf("bad")

let sentenceLenght = sentence.lentgh
// console.log(difference)

let incompleteSentence=(`${sentence.slice(0,wordNot)} good ${sentence.slice(wordBad+3)}`)

console.log(incompleteSentence)


// let newSentence=(`${incompleteSentence} good`)

// console.log(newSentence)



let newWay=sentence.replace(wordNot,wordBad)

console.log(newWay)