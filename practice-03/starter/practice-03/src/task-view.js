
import { getTaskStats } from "./task-service.js";

// Создаёт DOM-элемент одной задачи.
export function createTaskElement(task) {
  const li = document.createElement("li");
  li.className = "task-card";
  li.dataset.taskId = String(task.id);

  const title = document.createElement("h3");
  title.className = "task-title";
  title.textContent = task.title;

  const status = document.createElement("p");
  status.className = "task-status";
  status.textContent = task.completed ? "Выполнено" : "Осталось";

  const priority = document.createElement("p");
  priority.className = "task-priority";
  priority.textContent = `Приоритет: ${task.priority}`;

  const toggleButton = document.createElement("button");
  toggleButton.type = "button";
  toggleButton.dataset.action = "toggle";
  toggleButton.textContent = task.completed
    ? "Вернуть в невыполненные"
    : "Отметить выполненной";

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.dataset.action = "delete";
  deleteButton.textContent = "Удалить";

  li.append(title, status, priority, toggleButton, deleteButton);

  return li;
}

// Отображает карточки задач, сохраняя сам элемент списка.
export function renderTaskList(listElement, tasks) {
  const taskElements = tasks.map((task) => createTaskElement(task));
  listElement.replaceChildren(...taskElements);
}

// Обновляет сводку по всему массиву задач.
export function renderSummary(summaryElement, tasks, visibleCount) {
  const stats = getTaskStats(tasks);

  const values = {
    total: stats.total,
    completed: stats.completed,
    pending: stats.pending,
    progress: `${Number(stats.progress.toFixed(1))}%`,
    visible: visibleCount,
  };

  for (const [name, value] of Object.entries(values)) {
    const element = summaryElement.querySelector(
      `[data-stat="${name}"]`
    );

    if (element) {
      element.textContent = String(value);
    }
  }
}

// Показывает сообщение, если список или результат фильтра пуст.
export function renderEmptyState(messageElement, total, visibleCount) {
  if (total === 0) {
    messageElement.textContent = "Задач пока нет.";
    messageElement.hidden = false;
  } else if (visibleCount === 0) {
    messageElement.textContent = "Нет задач, подходящих под фильтр.";
    messageElement.hidden = false;
  } else {
    messageElement.textContent = "";
    messageElement.hidden = true;
  }
}
