/****************************************************************************************
 * 006 – Условные операторы
 * --------------------------------------------------------------------------------------
 *  PhpStorm 2023.1
 *  HTML, CSS, JavaScript
 * --------------------------------------------------------------------------------------
 * Уроки JavaScript для начинающих с нуля!
 * Gosha Dudar (2020)
 * https://www.youtube.com/watch?v=fHl7UyRjOf0&list=PLDyJYA6aTY1kJIwbYHzGOuvSMNTfqksmk
 *
 ****************************************************************************************
 * Writing by sgiman @ 2023
 */
// Операторы сравнения:
// ==, ===, >, <, >=, <=, !=

number = 15
isHasHouse = true

// --- IF ---
if(number > 5) {
    console.log("TRUE")
    console.log("IF")
}
else {
    console.log("FALSE")
    console.log("ELSE")
}

// --- ELSE IF ---
if(number === 5)
    console.log("Number > 5")
else if (number > 10)
    console.log("Number > 10")
else if (number === 7)
    console.log("Number == 7")
else if (number >= 15)
    console.log("Number >= 15")
else
    console.log("END")

// --- ||, && ---
if(number === 5 || isHasHouse)
    console.log("||: TRUE")
else
    console.log("||: FALSE")

if(number === 5 && isHasHouse)
    console.log("&&: TRUE")
else
    console.log("&&: FALSE")

// --- SWITCH ---
stroka = "word"
switch(stroka) {
    case 4:
        console.log("Перменная со значеннием 4")
        break
    case 45:
        console.log("Перменная со значеннием 45")
        break
    case "word":
        console.log("Перменная со значеннием \"word\"")
        break
    default:
        console.log("Default")
}
