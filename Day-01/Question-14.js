let task = ["wakeup", "exercise", "bath", "breakfast", "studying"];

task.shift();

task.unshift("revision");
task.unshift("playing");

task[task.length - 1] = "playing";

console.log(task);
