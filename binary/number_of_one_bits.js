var hammingWeight = function(n) {
    var count = 0;
    var arr = n.toString(2).split("");
    for (var i in arr) {
        if(arr[i] % 2 == 1) {
            count ++;
        }
    }
    return count;
};