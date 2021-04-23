'use strict';


/* Можете не проверять, честно списал, так как очень плохо далась эта тема, хоть я и пытался 
понять и делать по своему с применением всего, что было циклы, массивы, объекты, но явно имеются 
пробелы в знаниях, к примеру использование let result = interviewer.askQuestion(questions[this.level]); из этого задания, в
ообщем потратил 3 дня и не вышло :(, может на будущих уроках все прояснится для меня. */

let game = {
	score: 0,
	try: 5,
	level: 0,

	start(){
		if (!this.havelevel()){
			console.log(`Игра окончена, ваш счет: ${this.score}`);
			this.level = 0;
			this.score = 0;
			if(confirm(`Ваш счет: ${this.score}\nХотите сыграть ещё раз?`)){
				this.start();
			}
			return;
		}
		let interviewer = {
			askQuestion(question){
				let variations = "";
				for (let key in question.variants){
					variations += `${key}: ${question.variants[key]}\n`
				}
				let answer = prompt(`Ваш счет: ${game.score}\n${question.text},\nварианты ответа:\n${variations}\nДля выхода, нажмите "Отмена"`);
				return answer === question.correctVariant;
			}
		};
		let result = interviewer.askQuestion(questions[this.level]);
		if(result){
			this.score++;
		}else{
			if(interviewer.askQuestion(questions[this.answer]) === null && result === false){
				return;
			}else{
				this.level++;
				game.start();
			}
		}
	},
	// Методы
	havelevel(){
		return questions[this.level] !== undefined;
	}
};
game.start();