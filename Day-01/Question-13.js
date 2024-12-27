let marks = [25, 95, 45, 30, 80, 92, 33, 75, 60, 89];

let adjustScore = [];
let count = 0;

for (let i = 0; i < marks.length; i++) {
  if (marks[i] < 40) {
    marks[i] += 20;
  } else if (marks[i] > 90) {
    marks[i] = 90;
  }
  adjustScore.push(marks[i]);

  if (marks[i] >= 50) {
    count++;
  }
}
console.log(`Number of student who can score 50 or more : ${count}`);
console.log(`Number of passed student :  ${adjustScore}`);
