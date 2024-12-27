function generatePassword(
  length,
  includeNumbers = true,
  includeSpecialChars = false
) {
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "@#$!%&*?";

  let characterPool = upperCaseChars + lowerCaseChars;

  if (includeNumbers) characterPool += numberChars;
  if (includeSpecialChars) characterPool += specialChars;

  let password = "";

  for (let i = 0; i < length; i++) {
    password += characterPool[Math.floor(Math.random() * characterPool.length)];
  }

  return password;
}

// Example usage
console.log(generatePassword(10, true, true));
