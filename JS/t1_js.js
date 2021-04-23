'use strict';

/*
1. (это задание делайте по желанию) Написать функцию, преобразующую число в объект. Передавая на
вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

/* Не знаю пойдет ли этот вариант, так как он не совсем подходит под описание задачи. 
Так же посмотрел решение, наверное должно быть другое описание задачи, для "новичков".
Так как после просмотра понятно стало, что мы должны сделать так, что какая-то функция или пользователь через prompt вводит
какое-то значение, числа 0-999 или что-то другое, то функция должна отсеять неликвидные данные. 
Поэтому сделал два варианта.
*/

function task1(){
	/*------*/
	/* Функуция рандомизатор числа 0-999 */
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}
	/* Создание объекта */
	let number = new Object(String(getRandomInt(0, 999)));
	/* Тут должна быть проверка на то, что имеются ли десятки, сотни т.е. если undefined убирать. */
	number.hundereds = number[0];
	number.tens = number[1];
	number.units = number[2];
	console.log(number);

}
task1();
/* Как должно быть */
function task1Alternative(){
	let a = 0;
	let something = +prompt("Введите число от 0 до 999.");
	if(something < 0 || something > 999 || !Number.isInteger(something)){
		console.log("Невереное число, должно быть от 0 до 999!");
		return {};
	}else{
		let number = new Object(String(something));
		/* Тут должна быть проверка на то, что имеются ли десятки, сотни т.е. если undefined убирать. */
		number.hundereds = number[0];
		number.tens = number[1];
		number.units = number[2];
		console.log(number);
		return(number);
	}
}
task1Alternative();


/*
1.1 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры
наследования -> типы на es5 и es6), 
конструктор Product, который принимает параметры name и price, сохраните их как свойства объекта. 
Также объекты типа Product должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%. 
Имейте в виду, что метод make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный объект-прототип 
(как объект transport в уроке).
*/
function taskOne1ES5(){
	function Product(standart, name, price, discount){
		let total = price - (price / 100 * parseInt(discount)); //  метод makeXPercentDiscount
		this.standart = standart;
		this.Наименование = name;
		this.Цена = total;
		this.Скидка = discount;
		
	}
	const Product1 = new Product("ECMAScript5","Майка", 1500, 25 + "%");
	console.log(Product1);
}
taskOne1ES5();

function taskOne1ES6(){
	class Product {
		constructor(standart, name,price,discount){
			let total = price - (price / 100 * parseInt(discount)); //  метод makeXPercentDiscount
			this.standart = standart;
			this.Наименование = name;
			this.Цена = total;
			this.Скидка = discount;
		}
		show(){}
	}
	const Product1 = new Product("ECMAScript6","Майка", 1500, 25 + "%");
	console.log(Product1);
}
taskOne1ES6();

/*
1.2 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры
наследования -> механика наследования),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
highlighted значение true.
*/

function taskOne2(){
	function ES5(){
		function Post(standart, author, text, date){
			this.standart = standart;
			this.author = author;
			this.text = text;
			this.date = date;
		}
		const date = new Date();
		const Post1 = new Post("ECMAScript5", "Автор", "Текст", date);
		console.log(Post1);
	}
	ES5();

	function ES6(){
		class Post{
			constructor(standart, author, text, date){
				this.standart = standart;
				this.author = author;
				this.text = text;
				this.date = date;
			}
			show(){}
		}
		const date = new Date();
		const Post1 = new Post("ECMAScript6", "Автор", "Текст", date);
		console.log(Post1);
	}
	ES6();
}
taskOne2();

/*
Задание 2 отдельно в game.html + js
*/

/* 
Задание 3 отдельно в game2.html + js
*/
