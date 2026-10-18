import { demoTasks } from "./demo-tasks.js";

function setTaskCompleted(tasks, id, completed) {
  if (!Array.isArray(tasks)) {
    return { ok: false, error: "tasks должен быть массивом" };
  }

  if (!Number.isSafeInteger(id) || id <= 0) {
    return { ok: false, error: "id должен быть положительным безопасным целым числом" };
  }

  if (completed !== true && completed !== false) {
    return { ok: false, error: "completed должен быть true или false" };
  }

  const taskExists = tasks.some((task) => task.id === id);

  if (!taskExists) {
    return { ok: false, error: "Задача с таким id не найдена" };
  }

  const updatedTasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, completed };
    }
    return task;
  });

  return { ok: true, tasks: updatedTasks };
}

// Проверка 1: меняем статус задачи с id = 4
const result = setTaskCompleted(demoTasks, 4, true);

console.log("Проверка 1: изменение статуса");
console.log("Исходная задача:", demoTasks.find((task) => task.id === 4));
console.log(
  "Новая задача:",
  result.ok ? result.tasks.find((task) => task.id === 4) : result
);

// Проверка 2: несуществующий id
console.log("\nПроверка 2: несуществующая задача");
const failedResult = setTaskCompleted(demoTasks, 777, true);
console.log("Результат:", failedResult);
console.log(
  "Исходная задача id = 4 после отказа:",
  demoTasks.find((task) => task.id === 4)
);
