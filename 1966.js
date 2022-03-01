let fs = require("fs");
let input = fs.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");
let arr = input
	.slice(1, input.length)
	.map((el) => el.split(" ").map((el) => Number(el)));
let printBox = [];

for (let i = 0; i < arr.length; i += 2) {
	arr[i + 1][arr[i][1]] = String(arr[i + 1][arr[i][1]]);
	printBox.push(arr[i + 1]);
}

for (let i = 0; i < printBox.length; i++) {
	let count = 1;
	let box = printBox[i];
	let test = printBox[i].map((el) => Number(el));
	while (true) {
		let maxIndex = test.indexOf(Math.max(...test));
		if (maxIndex !== 0) {
			test = test.slice(maxIndex, test.length).concat(test.slice(0, maxIndex));
			box = box.slice(maxIndex, box.length).concat(box.slice(0, maxIndex));
		}
		if (typeof box[0] === "string") {
			console.log(count);
			break;
		} else {
			test.shift();
			box.shift();
			count++;
		}
	}
}