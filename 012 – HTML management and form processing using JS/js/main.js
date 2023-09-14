/****************************************************************************************
 * 012 – Управление HTML и обработка форм при помощи JS
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

//*****************
//    HTML-CSS
//*****************
// --- getElementById (по имени ID) ---
let text = document.getElementById('text')  // получить DDM c id="text"
text.title = "New Text"
console.log(text.id)
console.log(text.title)

// --- STYLES ---
text.style.color = "blue"
text.style.backgroundColor = "orange"
text.innerHTML = "New<br>String"
document.getElementById('text').style.backgroundColor = 'blue'
document.getElementById('text').style.color = 'white'

// --- getElementsByTagName (по имени тега)  ---
spans = document.getElementsByTagName('span')
for (let i = 0; i < spans.length; i++) {
    console.log("TagName: " + spans[i].innerHTML);     // получить даннные из тега
}

// --- getElementsByClassName (по имени класса) ---
spans_2 = document.getElementsByClassName('simple-text')
for (let i = 0; i < spans_2.length; i++) {
    console.log("ClassName: " + spans_2[i].innerHTML);
}

//*****************
//   Check Form
//*****************
// Добавить прослушивание события checkForm()
// Отделить javaScript от HTML кода (onSumbit, onClick etc)
document.getElementById('main-form').addEventListener("submit", checkForm);

//function checkForm (el) {
function checkForm (event) {
    event.preventDefault()  //  откл. стандартное поведение собыитя (перезагрузка)

    // el: объект "form"
    let el = document.getElementById('main-form')

    //var name = document.getElementById('name').value
    let name = el.name.value
    let pass = el.password.value
    let repass = el.repass.value
    let state = el.state.value

    //--- CHECK ---
    let fail = ""

    if (name == "" || pass == "" || state == "")
        fail = "Заполните все поля"
    else if (name.length <= 1 || name.length > 50)
        fail = "Введите корректное имя"
    else if (pass != repass)
        fail = "Пароли должны совпадать"
    else if (pass.split("&").length > 1)
        fail = "Некорректный пароль"

    if (fail != "") {
        document.getElementById('error').innerHTML = fail
        //return false
    } else {
        alert("Все данные корректно заполнены")
        window.location = "https://google.com"
        //return true
    }

    //return false    // откл. перезагрузку текущей страницы

    //console.log(name + " - " + pass + " - " + repass + " - " + state)
    //console.log("checkForm")
    //return false    // без пререзагрузки страницы
}
