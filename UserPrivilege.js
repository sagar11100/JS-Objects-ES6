function determineAccessPrivileges(user) {
    return user.role === "admin" ? (user.active && user.experience > 5 && user.department === "IT" ? "Full IT Admin Access" : (user.active && user.experience > 5 ? "Full General Admin Access" : (user.active ? "Limited Admin Access" : "Admin Access Revoked"))) : (user.role === "manager" ? (user.active && user.experience > 3 && user.department === "Sales" ? "Full Sales Manager Access" : (user.active && user.experience > 3 ? "Full Manager Access" : (user.active ? "Limited Manager Access" : "Manager Access Revoked"))) : (user.role === "user" ? (user.active && user.department === "Support" ? "Priority Support Access" : (user.active ? "User Access" : "User Access Revoked")) : "Invalid Role"));
  }
  
  // Example usage:
  let person1 = { role: "admin", experience: 7, active: true, department: "IT" };
  let person2 = { role: "manager", experience: 4, active: true, department: "Marketing" };
  let person3 = { role: "user", experience: 2, active: true, department: "Support" };
  let person4 = { role: "admin", experience: 3, active: false, department: "Finance" };
  
  console.log(determineAccessPrivileges(person1)); // Output: "Full IT Admin Access"
  console.log(determineAccessPrivileges(person2)); // Output: "Full Manager Access"
  console.log(determineAccessPrivileges(person3)); // Output: "Priority Support Access"
  console.log(determineAccessPrivileges(person4)); // Output: "Admin Access Revoked"