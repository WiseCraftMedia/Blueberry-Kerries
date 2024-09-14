$("#age").text(new Date(today));
var today = new Date();
function calculateAge(today) {
  const today = new Date();
  const birth = new Date(birthDate);

  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  const dayDiff = today.getDay() - birth.getDay();

  // Check if the birth date hasn't occurred yet this year
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}

// Example usage:
const birthDate = "2023-03-15"; // Replace with actual birth date (YYYY-MM-DD)
console.log(`Current age: ${calculateAge(today)} years old`);
