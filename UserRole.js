function generateMessage(user) {
    return user.role === "admin" ? (user.active ? "Admin Access Granted!" : "Admin Access Revoked") : (user.role === "user" ? (user.active ? "User Access Granted!" : "User Access Revoked") : "Access Denied");
  }
  
  // Example usage:
  let user1 = { name: "Alice", role: "admin", active: false };
  let user2 = { name: "Bob", role: "user", active: true };
  
  console.log(generateMessage(user1)); // Output: "Admin Access Revoked"
  console.log(generateMessage(user2)); // Output: "User Access Granted!"