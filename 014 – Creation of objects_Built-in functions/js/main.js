/****************************************************************************************
 * 014 – Создание объектов. Встроенные функции
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

/*==============
      DATE
===============*/
let date = new Date()   // создать объект "date" класса "Date" (выделение памяти)

// --- GET ---
console.log("Year: " + date.getFullYear())
console.log("Mouth: " + (date.getMonth() + 1)) // отчёт месяцев ведётся с "нуля"
console.log("Date: " + date.getDate())
console.log("Hours: " + date.getHours())
console.log("Minutes: " + date.getMinutes())
console.log("Seconds: " + date.getSeconds())

// --- SET ---
date.setHours(23)
date.getMinutes(23)

console.log("============")
console.log("Время: " + date.getHours() + ":" + date.getMinutes())
console.log("============")

/*==============
      ARRAY
===============*/
let arr = [8, 90, 5, 7, 0, 8 , 9]
console.log(arr)                        // array
console.log(arr.length)                 // длина
console.log(arr.join(", "))             // объединить в строку с разделителем ", "
console.log(arr.sort())                 // сортировка
console.log(arr.reverse())              // обратная сортировка
console.log(arr.reverse().join(", "))   // объединение методов

let stroka = arr.reverse().join(", ")    // строка
console.log(stroka.split(", "))         // разделить строку на символы в массив элементов

/*==============
      КЛАСС
===============*/
class Person {
    constructor(name, age, happiness) {
        this.name = name
        this.age = age
        this.happiness = happiness
    }

    // Method
    info() {
        console.log("Человек: " + this.name + ". Возраст: " + this.age)
    }
}

alex = new Person('Alex', 45, true)  // объект "alex" класса "Person" (выделить память)
console.log("\n============")
console.log(alex.name)
console.log(alex.age)
console.log(alex.happiness)


alex.name = "Alex2"
console.log("\n============================")
alex.info()
console.log("============================")
alex.info()

bob = new Person("Bob", 24, false)
console.log("============================")
bob.info()
console.log("============================")

console.log("\nPerson 1: " + alex.name)
console.log("Person 2: " + bob.name)
