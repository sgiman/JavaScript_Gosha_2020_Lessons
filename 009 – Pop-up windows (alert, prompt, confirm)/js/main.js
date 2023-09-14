/****************************************************************************************
 * 009 – Всплывающие окна (alert, prompt, confirm)
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

// --- ALERT ---
alert("Какая хорошая погода!") // "OK"

// --- CONFIRM ---
var dt = confirm("Вы сейчас дома?") // "CANCEL"(false), "OK"(true)
console.log(dt)
if (dt) {
    console.log("Вы молодец!")
}

// --- PROMPT ---
//prompt ("Скажите сколько вам лет", 20)
var data = prompt("Скажите сколько вам лет")
console.log(data)

//var var1 = null // очистить перуменную
//var person      // empty
var person = null   // empty
if (confirm ("Вы точно уверены?")) {
    person = prompt("Введите ваше имя:")
    alert("Привет, " + person)
}
else {
    alert("Вы нажали \"Отмена\"")
}
