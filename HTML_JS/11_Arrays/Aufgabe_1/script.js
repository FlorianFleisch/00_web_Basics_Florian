// The program:
// The nucleotides inside a DNA sequence can be represented by a string composed by A, C, G and T. A sample string representing a DNA sequence is "ATGCTTCAGAAAAGGTCAGCG".

// Your task is to count how many times the symbols A, C, G and T appear in the string s.


// INPUT:
// A single line, composed of A, C, G and T.
// OUTPUT:
// The number of times A, C, G and T appear in the string s, separated by a space.
// CONSTRAINTS:
// 0 < len(s) < 1000
// EXAMPLE:
// Input
// AACT
// Output
// 2 1 0 1


let DNA = "ATGCTTCAGAAAAGGTCAGCG";

let countA = DNA.match((/A/g) || []).length;
let countC = DNA.match((/C/g) || []).length;
let countG = DNA.match((/G/g) || []).length;
let countT = DNA.match((/T/g) || []).length;

let result = [countA, countC, countG, countT];

console.log(result.join(" "));




