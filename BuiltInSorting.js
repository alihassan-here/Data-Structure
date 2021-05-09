/*
    PseudoCode
    1: The built in sort method accepts an optional comparator function.
    2: You can use this comparator function to tell javaScript how you want it to sort.
    3: The comparator looks at pairs of elements (a dnd b), determines their sort order based on the return value
        * if it returns a negative number, a should come before b.
        * if it returns a positive number, a should come after b.
        * if it returns 0, a and b are the same as far as the sort is concerned
*/
//Number Sorting
function builtinSorting(num1, num2) {
    //ascending
    // return num1 - num2;
    //descending
    return num2-num1;
}
console.log([2, 1, 0, 6, 4, 5, 10].sort(builtinSorting));

//String Sorting
function compareByLen(str1, str2) {
    return str1.length - str2.length;
}
console.log(["ali","hassan","rafi","muhammad"].sort(compareByLen))