/*  Zero is even, One is Odd. For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The function should 
accept a single parameter (a positive, whole number) and return a Boolean. Test it on 50 
and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

function isEven(N) {
    if (N === 0) {
        return true;
    } else if (N === 1 || N < 0) {
        return false;
    } else {
        return isEven(N - 2);
    }
}