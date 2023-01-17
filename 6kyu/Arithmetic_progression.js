//An Arithmetic Progression is defined as one in which
// there is a constant difference between the consecutive
// terms of a given series of numbers. You are provided
// with consecutive elements of an Arithmetic Progression.
// There is however one hitch: exactly one term from the
// original series is missing from the set of numbers
// which have been given to you. The rest of the given
// series is the same as the original AP. Find the
// missing term.
//
// You have to write a function that receives a
// list, list size will always be at least 3 numbers.
// The missing term will never be the first or last one.
//
// Example
//
// findMissing([1, 3, 5, 9, 11]) == 7

function find(seq) {
    let low = seq[0];
    let high = low;
    for (let i of seq) {
        if (i < low) low = i;
        else if (i > high) high = i;
    }
    let step = (high - low) / seq.length;
    let set = new Set(seq);
    for (let i = low + step; i < high; i += step) {
        if (!set.has(i)) return i;
    }
}

console.log(find([1, 3, 5, 9, 11]));