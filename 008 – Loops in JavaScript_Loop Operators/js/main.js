/****************************************************************************************
 * 008 – Циклы в JavaScript. Операторы циклов
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

// for, while, do-while

// --- FOR ---
console.log("--- FOR 1 ---")
for(i = 0; i < 10; i++)
    console.log(i)

console.log("--- FOR 2 ---")
for(i = 1; i <= 10; i++)
    console.log(i)

console.log("--- FOR 3 ---")
for(i = 10; i > 5; i--)
    console.log(i)

console.log("--- FOR 4 ---")
for(i = 100; i > 5; i /= 2) {
    console.log(i)
}

// --- WHILE ---
console.log("--- WHILE 1 ---")
var j = 0
while (j < 10) {
    console.log(j)
    j++
}

console.log("--- WHILE 2 ---")
var j = 1000
while (j >= 100) {
    console.log(j)
    j -= 100
}

// --- DO-WHILE ---
console.log("--- DO-WHILE 1 ---")
var x = 100
do {
    console.log(x) // выпоняется хотя бы один раз
} while(x < 50)

console.log("--- DO-WHILE 2 ---")
var x = 0
do {
    console.log(x)
    x++
} while(x < 10)

console.log("--- BREAK ---")
for (var i = 10; i <= 20; i += 2) {
    if (i > 15)
        break
    console.log(i)
}

console.log("--- CONTINUE ---")
for (var i = 10; i <= 20; i++) {
    if (i % 2 === 0) // пропуск чётных чисел
        continue
    console.log(i)
}

console.log("--- ARRAY ---")
var arr = [5, 7, 3, 8, 9, "stroka"]
console.log(arr)
for (i = 0; i < arr.length; i++ ) {
    arr[i] *= 2
    console.log("Элемент массива " + (i + 1) + ": " + arr[i])
}
