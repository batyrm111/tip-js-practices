
const demoTasks = [
  { id: 1, title: "Изучить JavaScript", completed: true, priority: "high" },
  { id: 4, title: "Сделать практическую работу", completed: false, priority: "medium" },
  { id: 7, title: "Повторить массивы", completed: false, priority: "low" },
  { id: 10, title: "Прочитать документацию", completed: true, priority: "medium" },
];

function getPendingTasks(tasks) {
  return tasks.filter((task) => task.completed === false);
}

console.log("Проверка 1: задачи demoTasks");
console.log(getPendingTasks(demoTasks));
console.log("ID невыполненных задач:", getPendingTasks(demoTasks).map((task) => task.id));

console.log("\nПроверка 2: пустой массив");
console.log(getPendingTasks([]));
