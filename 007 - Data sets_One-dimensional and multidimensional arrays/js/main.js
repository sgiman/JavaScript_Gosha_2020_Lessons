/****************************************************************************************
 * 007 - Массивы данных.
 * Одномерные и многомерные массивы
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

// --- Одномерный массив ---
// var arr = new Array()
// var arr = []
// arr = []
arr = [5, true, "stroka", 5.7, 0, -100]
console.log(arr)
console.log(arr[3])
arr[3] = "word"
console.log(arr[3])
console.log("LENGTH = " + arr.length)

// --- Многомерный массив ---
matrix = [
    [4, 6, 8], ["stroka", 5.7], [0, -100]
]

console.log(matrix)
matrix[1][0] = "word"
console.log(matrix)


