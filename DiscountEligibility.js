function checkSeniorCitizenDiscountEligibility(age) {
    if (age < 0) {
      return "Invalid Age";
    }
  
    return age >= 60 ? "Eligible for Senior Discount" : "Not Eligible for Senior Discount";
  }
  
  // Example usage:
  let age1 = 65;
  let age2 = -1;
  
  console.log(checkSeniorCitizenDiscountEligibility(age1)); // Output: "Eligible for Senior Discount"
  console.log(checkSeniorCitizenDiscountEligibility(age2)); // Output: "Invalid Age"