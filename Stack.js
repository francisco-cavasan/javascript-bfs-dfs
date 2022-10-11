module.exports = class Stack {
	constructor() {
		this.items = [];
	}

	push(element) {
		this.items.push(element);
	}

	pop() {
		return this.items.pop();
	}

	isEmpty() {
		return this.items.length == 0;
	}

	peek() {
		return this.items[this.items.length - 1];
	}

	size() {
		return this.items.length;
	}

	clear() {
		this.items = [];
	}

	toString() {
		return this.items.toString();
	}
};
