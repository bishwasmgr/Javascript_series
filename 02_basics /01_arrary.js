const marvel_heros = ["iron man", "captain america", "hulk", "back widow"]
const dc_heros = ["batman", "superman", "wonder women", "aquaman"]

const collection_heros = [...marvel_heros, ...dc_heros]

console.log(Array.isArray(collection_heros))
const another_array = [1,2,3,4,5,6,[1,2,3,4,5, [6,7,8,9,10]]]

const real_another_array = another_array.flat(Infinity)

console.log(Array.from({name: "Bishwas"})) //Intersting 

console.log(real_another_array)


let score1 = 200
let score2 = 300
let score3 = 400


console.log(Array.of(score1,score2,score3))