const root = document.getElementById('root');

root.insertAdjacentHTML('afterbegin',
'<div class="accordion" id="accordionExample"></div>'
);

const accordion = root.querySelector(".accordion");

const methods = [
	{
		name: "push", 
		desc: `добавляет элементы в конец`
	}, 
	{
		name: "pop", 
		desc: `извлекает элемент с конца`
	}, 
	{
		name: "shift", 
		desc: `извлекает элемент с начала`
	}, 
	{
		name: "unshift", 
		desc: `добавляет элементы в начало`
	}, 
	{
		name: "splice", 
		desc: `начиная с индекса pos, удаляет deleteCount элементов и вставляет items.`
	}, 
	{
		name: "slice", 
		desc: `создаёт новый массив, копируя в него элементы с позиции start до end (не включая end).`
	}, 
	{
		name: "concat", 
		desc: `возвращает новый массив: копирует все члены текущего массива и добавляет к нему items.`
	}, 
	{
		name: "indexOf", 
		desc: `ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.`
	}, 
	{
		name: "includes", 
		desc: `возвращает true, если в массиве имеется элемент value, в противном случае false.`
	}, 
	{
		name: "find", 
		desc: `фильтрует элементы через функцию и отдаёт первое значение, при прохождении которых через функцию возвращается true.`
	}, 
	{
		name: "filter", 
		desc: `фильтрует элементы через функцию и отдаёт все значения, при прохождении которых через функцию возвращается true.`
	}, 
	{
		name: "findIndex", 
		desc: `похож на find, но возвращает индекс вместо значения.`
	}, 
	{
		name: "forEach", 
		desc: `вызывает func для каждого элемента.`
	}, 
	{
		name: "map", 
		desc: `создаёт новый массив из результатов вызова func для каждого элемента.`
	},
	{
		name: "sort", 
		desc: `сортирует массив`
	},
	{
		name: "reverse", 
		desc: `меняет порядок следования элементов на противоположный`
	},
	{
		name: "split", 
		desc: `преобразует строку в массив`
	},
	{
		name: "join", 
		desc: `преобразует массив в строку`
	},
	{
		name: "reduce", 
		desc: `вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.`
	}
];

let accordItems = methods.map((method) => {
	return (
		`<div class="accordion-item">
			<h2 class="accordion-header" id="heading-${method.name}">
				<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#${method.name}"
					aria-expanded="true" aria-controls="${method.name}">
					${method.name === 'indexOf' ? 'indexOf / lastIndexOf' : method.name}
				</button>
			</h2>
			<div id="${method.name}" class="accordion-collapse collapse" aria-labelledby="heading-${method.name}"
				data-bs-parent="#accordionExample">
				<div class="accordion-body row">
					<p>${method.desc}</p>
					<div class="row">
						<div class="col-3">
							<input class="field" value="1,2,3,4,5">
						</div>
						<div class="col-3">
							<button class="opr">${method.name}</button>
							${method.name === 'indexOf' ? '<button class="opr" id="lastIndexOf">lastIndexOf</button>' : ""}
							<button class="reset">reset</button>
						</div>
						<div class="result"></div>
					</div>
				</div>
			</div>
		</div>`
	)
});

for (item of accordItems) {
	accordion.insertAdjacentHTML('beforeend', item);
}

function addHTML(elem, content) {

	return elem.querySelector(".field").insertAdjacentHTML('afterend', content);

}

const splice = document.getElementById('splice');

addHTML(splice, `
	<input name="start" placeholder="pos" type="number">
	<input name="deleteCount" placeholder="delete count" type="number">
	<input name="insertItems" placeholder="items">
`);

const slice = document.getElementById('slice');

addHTML(slice, `
	<input name="start" placeholder="start" type="number">
	<input name="end" placeholder="end" type="number">
`);

const concat = document.getElementById('concat');

addHTML(concat, `
	<input name="addItems" placeholder="items">
`);

const indexOf = document.getElementById('indexOf');

addHTML(indexOf, `
	<input name="indexOfItem" placeholder="item">
	<input name="pos" placeholder="pos">
`);

const includes = document.getElementById('includes');

addHTML(includes, `
	<input name="includesValue" placeholder="value">
`);

const find = document.getElementById('find');

addHTML(find, `
	<input name="findValue" placeholder="value">
`);

const filter = document.getElementById('filter');

addHTML(filter, `
	<input name="filterValue" placeholder="value">
`);

const findIndex = document.getElementById('findIndex');

addHTML(findIndex, `
	<input name="findIndexValue" placeholder="value">
`);

const split = document.getElementById('split');

addHTML(split, `
	<input name="separator" placeholder="separator">
`);

const join = document.getElementById('join');

addHTML(join, `
	<input name="separator" placeholder="separator">
`);

let mainInput;
let inputs;
let result;

accordion.onclick = function(e) {

	if(e.target.className === 'accordion-button') {

		let accordItem = e.target.closest('.accordion-item');
		let accordBody = accordItem.querySelector('.accordion-body');
		//получить все инпуты выбранного в аккордионе метода
		inputs = accordBody.getElementsByTagName('input');
		mainInput = accordBody.querySelector('.field');
		result = accordBody.querySelector('.result');
	}

	//отследить нажатие кнопки метода
	if(e.target.className === 'opr') {

		let array = [];
		let buttonName = e.target.outerText;
		let value = mainInput.value;

		function splitValue() {
			return value.split(',');
		}

		if (result.innerText !== "") 
			array = result.innerText.split(',');

		if (buttonName !== "push" && buttonName !== "unshift")
			array = splitValue();

		switch(buttonName) {
			
			case 'push': 
				array.push(splitValue());
				break;

			case 'pop':
				array.pop();
				break;

			case 'unshift':
				array.unshift(splitValue());
				break;

			case 'shift':
				array.shift();
				break;

			case 'splice':

				let spliceStart = inputs.start.value;
				let deleteCount = inputs.deleteCount.value;
				let insertItems = inputs.insertItems.value;

				array.splice(spliceStart, deleteCount, insertItems);
				break;

			case 'slice':

				let sliceStart = inputs.start.value;
				let sliceEnd = inputs.end.value;

				array = array.slice(sliceStart, sliceEnd);
				break;

			case 'concat': 

				let items = inputs.addItems.value;

				array = array.concat(items);
				break;

			case 'indexOf':	

				let indexOfItem = inputs.indexOfItem.value;
				let indexOfPos = inputs.pos.value;

				array = array.indexOf(indexOfItem, indexOfPos);
				break;

			case 'lastIndexOf':
				
				let lastIndexOfItem = inputs.indexOfItem.value;
				let lastIndexOfPos = inputs.pos.value;

				array = array.lastIndexOf(lastIndexOfItem, lastIndexOfPos);
				break;

			case 'includes':

				let includesValue = inputs.includesValue.value;

				array = array.includes(includesValue);
				break;

			case 'find':

				let findValue = inputs.findValue.value;

				array = array.find(i => i === findValue);
				break;

			case 'filter':

				let filterValue = inputs.filterValue.value;

				array = array.filter(i => i === filterValue);
				break;

			case 'findIndex':

				let findIndexValue = inputs.findIndexValue.value;

				array = array.findIndex(i => i === findIndexValue);
				break;

			case 'forEach':

				array.forEach(i => {
					alert("item "+i+" on position "+ array.indexOf(i));
				});
				break;

			case 'map':

				array = array.map(i => i.length);
				break;

			case 'sort': 

				array = array.sort((a, b) => a - b);
				break;

			case 'reverse': 

				array = array.reverse();
				break;

			case 'split':

				let str = array.toString();
				let splitSep = inputs.separator.value;
				
				array = str.split(splitSep);
				break;

			case 'join':

				let joinSep = inputs.separator.value;

				array = array.join(joinSep);
				break;

			case 'reduce':

				array = array.reduce((prev, current) => +prev + +current);
				break;

			default: alert('no such method!');
		}

		result.innerText = array;
	}

	//основное поле ввода
	if(e.target.className === 'field') {

		mainInput.onchange = function(e) {

			if (mainInput.key === ' '){
				e.preventDefault();
			};
		}	
	}

	if(e.target.className === 'reset') {

		for(let input of inputs) {
			input.value = '';
		}

		result.innerText = '';
	}
}