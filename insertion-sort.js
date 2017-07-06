function sort(arr) {
    var comparableValue;

    for (let i = 1; i < arr.length; i++) {
        comparableValue = arr[i];

        var index = compare(i - 1);

        if (index !== i) {
            arr[index] = comparableValue;
        }
    }

    function compare(index) {
        if (comparableValue < arr[index]) {
            move(index);

            if (arr.hasOwnProperty(index - 1)) {
                return compare(index - 1);
            } else {
                return index;
            }

        } else {
            return index + 1;
        }
    }

    function move(index) {
        arr[index + 1] = arr[index];
    }

    return arr;
}

console.log(sort([3, 0, 2, 1]));