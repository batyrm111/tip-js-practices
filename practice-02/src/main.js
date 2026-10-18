
import { demoTasks, variantNumber, variantTasks } from "./data.js";

import {
  findTaskById,
  getPendingTasks,
  getTaskTitles,
  getTaskStats,
  addTask,
  setTaskCompleted,
  renameTask,
  removeTask,
} from "./task-service.js";

function showStats(tasks, title) {
  const stats = getTaskStats(tasks);

  console.log(`\n--- ${title} ---`);
  console.log("Всего задач:", stats.total);
  console.log("Выполнено:", stats.completed);
  console.log("Осталось:", stats.pending);
  console.log("Прогресс:", `${stats.progress.toFixed(1)}%`);
}

function applyResult(tasks, result) {
  if (!result.ok) {
    console.log("Ошибка:", result.error);
    return tasks;
  }

  return result.tasks;
}

// Общий сценарий
console.log("========== ОБЩИЙ СЦЕНАРИЙ ==========");

let tasks = [...demoTasks];

console.log("Названия задач:", getTaskTitles(tasks));
console.log("Невыполненные задачи:", getPendingTasks(tasks));
console.log("Поиск задачи с ID 2:", findTaskById(tasks, 2));

showStats(tasks, "Начальная статистика");

let result = addTask(tasks, 20, "Добавить проверку", "high");
tasks = applyResult(tasks, result);

result = setTaskCompleted(tasks, 1, true);
tasks = applyResult(tasks, result);

result = renameTask(tasks, 3, "Завершить практическое задание");
tasks = applyResult(tasks, result);

result = removeTask(tasks, 2);
tasks = applyResult(tasks, result);

showStats(tasks, "Итоговая статистика общего сценария");
console.log("Итоговые задачи:", tasks);
console.log("Исходные demoTasks не изменились:", demoTasks);

// Индивидуальный сценарий
console.log("\n========== ВАРИАНТ", variantNumber, "==========");

let variantCurrentTasks = [...variantTasks];

showStats(variantCurrentTasks, "Начальная статистика варианта");

result = addTask(
  variantCurrentTasks,
  80,
  "Подготовить раздаточные материалы семинара",
  "high"
);
variantCurrentTasks = applyResult(variantCurrentTasks, result);

result = setTaskCompleted(variantCurrentTasks, 41, true);
variantCurrentTasks = applyResult(variantCurrentTasks, result);

result = renameTask(
  variantCurrentTasks,
  23,
  "Составить окончательный план семинара"
);
variantCurrentTasks = applyResult(variantCurrentTasks, result);

result = removeTask(variantCurrentTasks, 37);
variantCurrentTasks = applyResult(variantCurrentTasks, result);

showStats(variantCurrentTasks, "Итоговая статистика варианта");
console.log("Итоговые задачи варианта:", variantCurrentTasks);

// Проверяем, что исходный массив остался без изменений
showStats(variantTasks, "Контроль исходных задач варианта");
