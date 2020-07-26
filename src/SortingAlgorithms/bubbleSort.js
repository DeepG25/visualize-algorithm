function bubbleSort(array) {
    let animations = [];

    let result = bubbleSortHelper(array, animations);
    return result;
}

function bubbleSortHelper(originalArray, animations) {
    for(let i=0; i<originalArray.length; i++)
    {
        for(let j=0; j<originalArray.length-1-i; j++)
        {
            if(originalArray[j] > originalArray[j+1])
            {
                let temp = originalArray[j];
                originalArray[j] = originalArray[j+1];
                originalArray[j+1] = temp;
                        
                animations.push([j, j+1]);     //first for changing background color
                animations.push([j, j+1]);     //second for changing to initial color and change height
            }
        }
    }
    return animations;
}

export default bubbleSort;