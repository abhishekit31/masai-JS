# Problem : Body Mass Index (BMI) Calculator

## Problem Statement:

Create a program to calculate the Body Mass Index (BMI) based on user input for weight in kilograms and height in meters.

## Requirements:

Calculate the BMI using the formula: BMI = Weight/(Height \* Height)

Print the BMI, rounded to two decimal places, formatted as: "Your BMI is: X."

# Test Cases:

### Test Case 1:

Weight = 70, Height = 1.75. Expected output: "Your BMI is: 22.86"

### Test Case 2:

Weight = 55, Height = 1.60. Expected output: "Your BMI is: 21.48"

### Test Case 3:

Weight = 90, Height = 1.80. Expected output: "Your BMI is: 27.78"

# Edge Cases:

## Edge Case 1:

What if height is zero (to prevent division by zero error)? Handle this by printing: "Invalid input, height cannot be zero."

## Edge Case 2:

What if negative values are entered? The program should handle this by printing: "Invalid input, height and weight must be positive numbers."
