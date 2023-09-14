/****************************************************************************************
 * 010 – Функции в языке JavaScript
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
var glob = "GLOBAL (var)"       // устарел
let glob_1 = "GLOBAL (let)"     // вместо var
glob_2 = "GLOBAL"

// Функция и метод объекта (класса)  - это одно и то тоже...

function msg (word) {
    console.log("Привет " + word + ' !')
}

function sum (a, b) {
    var res =  a + b
    //console.log("SUMMА = " + res)
    msg (res)
}

msg ("sgiman")

sum (5,7)

// --- Summa array elements ---
function summa (arr) {
    sum = 0
    for (var i = 0; i < arr.length; i++)
        sum += arr[i]
    //console.log("SUMMA ARRAY = " + sum)
    return sum
}

array = [6, 8, 1]
array_2 = [6, 8, 1, 7]
array_3 = [6, 8, 1, 90]

res = summa (array)
res *= 2
console.log("Результуат: " + res)
//summa (array_2)
//summa (array_3)

