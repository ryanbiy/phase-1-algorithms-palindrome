function isPalindrome(str) {

    const strLower = str.toLowerCase();
    let left = 0;
    let right = strLower.length - 1;
    
    while (left < right) {
      if (strLower[left] !== strLower[right]) {
        return false;
      }

      left++;
      right--;
      
    }
    return true;
  }
  