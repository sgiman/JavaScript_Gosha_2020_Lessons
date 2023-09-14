/****************************************************************************************
 * 005 – Математические действия
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

// +, - , *, /, %

var num_1 = 5.4
var num_2 = 15

console.log("Вычитание: " + (num_1 - num_2))
console.log("Сложенине: " + (num_1 + num_2))
console.log("Умноженние: " + (num_1 * num_2))
console.log("Деление: " + (num_1 / num_2))
console.log("Остаток от деленния: " + (num_1 % num_2))

// --- Cокращение ---
var x = 5
//x = x + 7
x += 7
console.log("X = " + x)

// --- Инкримент/ Декримент ---
var y = 5
y++
console.log("Y++ = " + y)
y--
console.log("Y-- = " + y)

// --- Преобразование в число ---
var str_1 = 12
var str_2 = "2"
console.log( "Результат: " + (Number(str_1) + Number(str_2)) )

// --- Объект (класс) Math ---
console.log( "Math PI: " + Math.PI)
console.log( "Math E: " + Math.E)
console.log( "Math MIN: " + Math.min(4,-8,2,0,5,8))
console.log( "Math MIN: " + Math.max(4,-8,2,0,5,8))

