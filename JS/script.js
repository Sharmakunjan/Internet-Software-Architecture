let input = document.getElementById('input');

function append(value) {
	input.value += value;
}

function clearInput() {
	input.value = '';
}

function backspace() {
	input.value = input.value.slice(0, -1);
}

function calculate() {
	let result = eval(input.value);
	input.value = result;
}
