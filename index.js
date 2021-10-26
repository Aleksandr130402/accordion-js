const fields = document.getElementsByClassName('field');
const operations = document.getElementsByClassName('opr');
const results = document.getElementsByClassName('result');

let currentInput;

for (let field of fields) {
	field.onkeydown = function(e) {
		if (e.key === ' ')
			e.preventDefault();
	}

	field.onchange = function() {
		currentInput = field;
	}
}

for (let opr of operations) {
	
	opr.onclick = function(e) {
		let array = [];
		let buttonName = e.target.outerText;
		let value = currentInput.value;
		let parent = currentInput.closest('.accordion-body');
		let input = parent.querySelector('.result');

		if (input.innerText != "") 
			array = input.innerText.split(',');

		switch(buttonName) {
			case 'push': 
				array.push(value.split(','));
				break;
			case 'pop':
				array = value.split(',');
				array.pop();
				break;
			case 'unshift':
				array.unshift(value.split(','));
				break;
			case 'shift':
				array = value.split(',');
				array.shift();
				break;
			default: alert('no such method!');
		}

		input.innerText = array;
	}
}