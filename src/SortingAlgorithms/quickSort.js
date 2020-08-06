function quickSort(array) {
    let animations = [];

    quickSortHelper(array, animations, 0, array.length - 1);
    return animations;
}

function quickSortHelper(array, animations, startIndex, endIndex) {
    if(startIndex < endIndex)
    {
        let pivotIndex = findPivot(array, animations, startIndex, endIndex);

        quickSortHelper(array, animations, startIndex, pivotIndex-1);
        quickSortHelper(array, animations, pivotIndex+1,endIndex);
    }
}

function findPivot(array, animations, startIndex, endIndex) {
    let pivotElement = array[endIndex];

    let j = startIndex;
    for(let i=startIndex;i<=endIndex-1;i++)
    {
        if(array[i] < pivotElement)
        {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;

            animations.push([i, j]);
            animations.push([i, j]);

            j++;
        }
    }

    let temp = array[j];
    array[j] = array[endIndex];
    array[endIndex] = temp;

    animations.push([j, endIndex]);
    animations.push([j, endIndex]);

    return j;
}

export default quickSort;