/** @format */

//sort the array and the get minimum no
function sortArrayGetMin(array) {
	if (!array.length) {
		throw new Error('array should not be empty');
	} else if (array.length === 1) {
		return array[0];
	} else {
		for (let i = 0; i < array.length; i++) {
			let outerElement = array[i];
			console.log('i', 'j', ' outerElement', ' outerElement');
			for (let j = i + 1; j < array.length; j++) {
				let innerElement = array[j];
				console.log(
					'j',
					'i',
					'innerelement',
					'innerElement',
					'outerElement',
					'outerElement',
				);
				if (outerElement > innerElement) {
					array[i] = innerElement;
					outerElement[j] = outerElement;
					innerElement = array[j];
					outerElement = array[i];
				}
			}
		}
		return array[0];
	}
}
const result = sortArrayGetMin([4, 3, 1, 5]);
console.log(result);
