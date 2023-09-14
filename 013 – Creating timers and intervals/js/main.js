/****************************************************************************************
 * 013 – Создание таймеров и интервалов
 * --------------------------------------------------------------------------------------
 * PhpStorm 2023.1
 * HTML, CSS, JavaScript
 * --------------------------------------------------------------------------------------
 * Уроки JavaScript для начинающих с нуля!
 * Gosha Dudar (2020)
 * https://www.youtube.com/watch?v=fHl7UyRjOf0&list=PLDyJYA6aTY1kJIwbYHzGOuvSMNTfqksmk
 *
 ****************************************************************************************
 * Writing by sgiman @ 2023
 */

// --- ИНТЕРВАЛ ---

let counter = 0

// Задать интервал: 1 сек
let id = setInterval(my_func, 1000)

//---------------
//    my-func
//---------------
function my_func() {
    counter++
    console.log("Counter: " + counter)

    // Остановить!
    if (counter === 5 )
        clearInterval(id)
}

/*********************************************
// Для анонимной функции
setInterval(function (){
    counter++
    console.log("Прошло секунд: " + counter)
}, 1000)
 *********************************************/

// --- ТАЙМЕРЫ ---

/***************************************
// Ананимно
setTimeout(function (){
    console.log("Timer is working")
}, 2000)
**************************************/

// Функция
setTimeout(new_func,5000)
function new_func(){
    console.log("Timer is working")
}
