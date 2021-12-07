function binarySearch(array, searchTerm) {
	let reads = 0;
	let index = 0;
	let start = 0
	let end = array.length - 1
	//search for the searchTerm here, you must call "reads++"
	//any time you check the value of an element
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end
	 */
	 while(start <= end){
		reads++
		let middle = Math.floor((start + end)/2)
		if(array[middle] === searchTerm){
			return{ index: middle, reads: reads };
		}else if(searchTerm > array[middle]){
			start = middle + 1;
		}else if(searchTerm < array[middle]){
			end = middle - 1;
		} 
		//return{ index: index, reads: reads };
		}
	}

module.exports = binarySearch;
