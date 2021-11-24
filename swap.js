swap = (array, indexA, indexB, swapCount) => {
	let temp = array[indexA];
	array[indexA] = array[indexB];
	array[indexB] = temp;
	swapCount[0]++;
};

module.exports = swap;
