let container = document.getElementById('container');
//select the value input from user
let input = document.getElementById('input');
let enter = document.querySelector('.enter');
let user_number = 0;
let x, i;

input.addEventListener('change', (number) => {
	user_number = number.target.value;
	container.innerHTML = '';

	container.style.gridTemplateColumns = `repeat(${user_number}, 1fr)`;
	container.style.gridTemplateRows = `repeat(${user_number}, 1fr)`;

	if (user_number <= 100) {
		for (x = 0; x < user_number * user_number; x++) {
			const grid = document.createElement('div');
			grid.classList.add('box');
			container.appendChild(grid);
			let my_grid = document.querySelectorAll('.box');

			//Change color on hover
			my_grid.forEach((box) => {
				box.onmouseover = () => {
					box.style.backgroundColor = '#227c70';
				};
			});
		}
	} else {
		alert('Please a valid number!');
	}
});
