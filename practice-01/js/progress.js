
function showProgress(totalTasks, completedTasks) {
  // Проверка общего количества задач
  if (
    !Number.isInteger(totalTasks) ||
    totalTasks < 0 ||
    totalTasks > 1000
  ) {
    console.log(
      "Ошибка: totalTasks должен быть целым числом от 0 до 1000"
    );
    return;
  }

  // Проверка количества выполненных задач
  if (
    !Number.isInteger(completedTasks) ||
    completedTasks < 0 ||
    completedTasks > totalTasks
  ) {
    console.log(
      "Ошибка: completedTasks должен быть целым числом от 0 до totalTasks"
    );
    return;
  }

  // Если задач нет
  if (totalTasks === 0 && completedTasks === 0) {
    console.log("Задач пока нет");
    return;
  }

  const remainingTasks = totalTasks - completedTasks;
  const percentage = (completedTasks / totalTasks) * 100;

  let status;

  if (completedTasks === 0) {
    status = "Не начато";
  } else if (completedTasks === totalTasks) {
    status = "Завершено";
  } else {
    status = "В работе";
  }

  console.log(`Всего задач: ${totalTasks}`);
  console.log(`Выполнено: ${completedTasks}`);
  console.log(`Осталось: ${remainingTasks}`);
  console.log(`Прогресс: ${percentage.toFixed(1)}%`);
  console.log(`Статус: ${status}`);
}

// Проверка трёх случаев из задания
console.log("=== Проверка 1 ===");
showProgress(12, 5);

console.log("\n=== Проверка 2 ===");
showProgress(0, 0);

console.log("\n=== Проверка 3 ===");
showProgress(5, 6);
