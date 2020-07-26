function selectionSort(array) {
    let animations = [];

    let result = selectionSortHelper(array, animations);
    return result;
}

function selectionSortHelper(originalArray, animations) {
    for(let i=0; i<originalArray.length; i++)
    {
        let minIndex = i;
        for(let j=i; j<originalArray.length; j++)
        {
            if(originalArray[minIndex] > originalArray[j])
            {
                minIndex = j;
            }
        }

        let temp = originalArray[minIndex];
        originalArray[minIndex] = originalArray[i];
        originalArray[i] = temp;

        animations.push([i, minIndex]);     //first for changing background color
        animations.push([i, minIndex]);     //second for changing to initial color and change height
    }
    return animations;
}

export default selectionSort;