function classifyProductPrice(price) {
    return price >= 1000 ? "Expensive" : (price >= 500 ? "Moderate" : (price > 0 ? "Affordable" : (price === 0 ? "Free" : "Invalid Price")));
  }
  
  // Example usage:
  let price1 = 750;
  let price2 = 0;
  let price3 = -100;
  
  console.log(classifyProductPrice(price1)); // Output: "Moderate"
  console.log(classifyProductPrice(price2)); // Output: "Free"
  console.log(classifyProductPrice(price3)); // Output: "Invalid Price"