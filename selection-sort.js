function selectionSort(array) {
	let loops = 0;
	let length = array.length
	//sort the array here, you must call "loops++"
	//inside any loops (including nested loops)
	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */
	 for(let i = 0; i < length; i++) {
            
		let minimum = i;
		for(let j = i+1; j < length; j++){
			if(array[j] < array[minimum]) {
				minimum=j; 
			}
			loops ++
		 }
		 if (minimum != i) {
			
			 let tmp = array[i]; 
			 array[i] = array[minimum];
			 array[minimum] = tmp;      
		}
	}

	return { result: array, loops: loops };
}

module.exports = selectionSort;
