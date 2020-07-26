function insertionSort(array) {
    let animations = [];

    let result = insertionSortHelper(array, animations);
    return result;
}

function insertionSortHelper(originalArray, animations) {
    for(let i=1; i<originalArray.length; i++)
    {
        let temp = originalArray[i];
        let j = i-1;
        while(j>=0 && originalArray[j] > temp)
        {
            animations.push([j, j+1]);     //first for changing background color
            animations.push([j, j+1]);     //second for changing to initial color and change height
            originalArray[j+1] = originalArray[j];
            j--;
        }

        originalArray[j+1] = temp;
    }
    return animations;
}

export default insertionSort;