function findLargestNumber(num1, num2, num3) {
    return num1 > num2 ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3);
  }
  
  // Example usage:
  let num1 = 45, num2 = 78, num3 = 33;
  let largestNumber = findLargestNumber(num1, num2, num3);
  console.log(largestNumber); // Output: 78 (The largest number)