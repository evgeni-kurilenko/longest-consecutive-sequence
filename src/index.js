module.exports = function longestConsecutiveLength(array) {
    // your solution here
    function compareNumbers(a, b) {
        return a - b;
    }

    var ll = [];
    var max = 0, l=0;
    array.sort(compareNumbers);

    if (array.length > 1) {
        max = 1;
        l = 1;
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i]==array[i+1] - 1) {
                l++;
            } else if (array[i+1]-array[i]>1) {
                l=1;
            }
            ll.push(l);

            //console.log("l = "+ "" + l );
        }

        ll.sort(compareNumbers);
        max = ll.pop();

        ///console.log(ll);
    } else if (array.length == 0) {
        max = 0;
    } else if (array.length == 1) {
        max = 1;
    }

    return max;
}
