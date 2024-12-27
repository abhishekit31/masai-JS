# L2 - Generate Random Password with Constraints

## Problem Statement:

Write a function called generatePassword that takes three parameters: length, includeNumbers, and includeSpecialChars. The function should generate a random password of the given length. If the user doesn't specify whether to include numbers or special characters, the function should default to including them.

includeNumbers is a boolean that indicates whether to include numbers in the password. Default to true.
includeSpecialChars is a boolean that indicates whether to include special characters. Default to false.
The function should ensure that the generated password meets the following conditions:

Contains at least one uppercase letter.
If includeNumbers is true, includes at least one number.
If includeSpecialChars is true, includes at least one special character (like @, #, !).

### Example:

If generatePassword(10, true, true) is called, it might return a password like "Ab1@deF2Gh".
