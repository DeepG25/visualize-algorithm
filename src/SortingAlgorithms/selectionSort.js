function selectionSort(array) {
    let animations = [];

    let result = selectionSortHelper(array, animations);
    return result;
}

function selectionSortHelper(slicedArray, animations) {
    for(let i=0; i<slicedArray.length; i++)
    {
        let minIndex = i;
        for(let j=i; j<slicedArray.length; j++)
        {
            if(slicedArray[minIndex] > slicedArray[j])
            {
                minIndex = j;
            }
        }

        let temp = slicedArray[minIndex];
        slicedArray[minIndex] = slicedArray[i];
        slicedArray[i] = temp;

        animations.push([i, minIndex]);     //first for changing background color
        animations.push([i, minIndex]);     //second for changing to initial color and change height
    }
    return animations;
}

export default selectionSort;