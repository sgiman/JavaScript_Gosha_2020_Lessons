/****************************************************************************************
 * 011 – События и обработчик событий в JavaScript
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

// Основные атрибуты событий: onclick, ondblclick, onmouseover, onmouseout, onload, oninput

/*
function onClickButton() {
    alert ("Вы нажали на меня")
}
*/

// --- onClickButton ---
let counter = 0     // global
function onClickButton(el) {
    counter++

    // Передать дынные внутрь элемента НTML (<button>)
    el.innerHTML = "Вы нажали на кнопку: " + counter

    // Новый стиль (<button>)
    //el.style.background = "red"
    //el.style.color = "yellow"
    el.style.cssText = "background: red; color: yellow; border-radius: 0px; border: 0; font-size: 32px"

    // Консоль
    console.log(counter)
    console.log(el.name)            // значение атрибута "name"
    //console.log(el.onclick)       // значение атрибута-cобытия "onclick"
}

// --- onInput ---
function onInput (el) {
    if (el.value == "Hello")
        alert("И тебе привет!")
    console.log(el.value)       // значение ввода (value) для тега <input>
}
