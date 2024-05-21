// Palindrome code
function isPalindrome(str){
    let rev = "";
    for(let i = str.length-1 ; i>=0 ; i--){
        rev += str[i];
    }
    if(rev == str){
        return true;
    } else {
        return false;
    }
}
const string1 = isPalindrome("shriya");
console.log("shriya string is", string1);

const string2 = isPalindrome("nitin");
console.log("nitin string is", string2);