let mover = {
	// Бордер 
	border(nextPoint){
		return nextPoint.x >= 0 && nextPoint.y >= 0 && nextPoint.x <= config.rowsCount && nextPoint.y <= config.colsCount;
	}, 

	getDirection(){
		const avilableDirections = [1,2,3,4,6,7,8,9];
		while (true) {
			let direction = parseInt(prompt("Введите число (1, 2, 3, 4, 6, 7, 8, 9), куда вы хотите переместиться"));
			if (isNaN(direction)){
				return null;
			}
			if (!avilableDirections.includes(direction)){
				alert("Для перемещения необходимо ввести одно из чисел: 1, 2, 3, 4, 6, 7, 8, 9.");
				continue;
			}
			return direction;
		}
	},

	getNextPosition (direction){
		const nextPosition = {
			x: player.x,
			y: player.y
		};
		switch (direction) {
			case 1: // вниз и влево
				nextPosition.x--;
				nextPosition.y++;
				break;
			case 2: // вниз
				nextPosition.y++;
				break;
			case 3: // вниз и вправо
				nextPosition.x++;;
				nextPosition.y++;
				break;
			case 4: // налево
				nextPosition.x--;
				break;
			case 6: // направо
				nextPosition.x++;
				break;
			case 7: // вверх и влево
				nextPosition.x--;;
				nextPosition.y--;
				break;
			case 8: //вверх
				nextPosition.y--;
				break;
			case 9: //вверх и вправо
				nextPosition.x++;;
				nextPosition.y--;
				break;
		}
		return nextPosition;
	}
};