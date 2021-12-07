function insertionSort(array) {
	let loops = 0;

	//sort the array here, you must call "loops++"
	//inside any loops (including nested loops)
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 
	 */
	let length = array.length;
    for (let i = 1; i < length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
            loops++
        } 
        array[j + 1] = key;
    }
    return { result: array, loops: loops };

};

module.exports = insertionSort;
