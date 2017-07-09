function sort(arr) {
    let minValue, minValueIndex;

    for (let i = 0; i < arr.length; i++) {
        minValue = arr[i];
        minValueIndex = i;

        for (let x = i + 1; x < arr.length; x++) {
            if (arr[x] < minValue) {
                minValue = arr[x];
                minValueIndex = x;
            }
        }

        if (arr[minValueIndex] !== arr[i]) {
            arr[minValueIndex] = arr[i];
            arr[i] = minValue;
        }
    }

    return arr;
}

console.log(sort([2, 1, 4, 3, 0]));