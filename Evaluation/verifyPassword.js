function verifyPassword(password) {
  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialChar = /[@#$!%&*?]/.test(password);
  const isValidLength = password.length >= 8;

  if (
    hasLowerCase &&
    hasUpperCase &&
    hasDigit &&
    hasSpecialChar &&
    isValidLength
  ) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
verifyPassword("Masai@12");
verifyPassword("MasaiSchool");
verifyPassword("CodingsFun");
