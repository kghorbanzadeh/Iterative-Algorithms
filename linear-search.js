function linearSearch(array, searchTerm) {
	let reads = 0;
	let index = 0;
	//search for the searchTerm here, you must call "reads++"
	//any time you check the value of an element

	/*
	 ** Check each element from start to finish
	 */
	 while(index < array.length){
		reads++
		if(array[index] === searchTerm){
			return { index: index, reads: reads };
		}
		index++
	}
	return false
}

module.exports = linearSearch;
