// Глобальный Set для отслеживания выбранных чисел
const selectedNumbers = new Set();

// Функция для генерации случайных чисел без повторений
function generateUniqueNumbers(count, max) {
  const uniqueNumbers = new Set();
  while (uniqueNumbers.size < count) {
    const num = Math.floor(Math.random() * max) + 1;
    uniqueNumbers.add(num);
  }
  return Array.from(uniqueNumbers);
}

// Функция для отображения чисел на панели
function displayNumbersOnPanel(numbers) {
  const panel = document.getElementById("panel");
  panel.innerHTML = "";
  numbers.forEach((num) => {
    const square = document.createElement("div");
    square.classList.add("square");
    square.textContent = num;
    panel.appendChild(square);
  });
}

// Функция для анимации изменения цвета панели
function animatePanel() {
  const panel = document.getElementById("panel");
  panel.classList.add("panel-animate");
  setTimeout(() => {
    panel.classList.remove("panel-animate");
  }, 3000);
}

// Функция для вращения чисел
function spinNumbers() {
  const spinButton = document.getElementById("spinButton");

  // Обработка возможных ошибок
  const panel = document.getElementById("panel");
  if (!panel) {
    console.error("Ошибка: элемент с id 'panel' не найден.");
    return;
  }

  // Генерация случайных чисел без повторений
  const numbers = generateUniqueNumbers(5, 19);

  // Отображение чисел на панели
  displayNumbersOnPanel(numbers);

  // Анимация изменения цвета панели
  animatePanel();

  // Блокировка кнопки во время анимации
  spinButton.disabled = true;

  // Очистка Set перед следующим вращением
  selectedNumbers.clear();

  setTimeout(() => {
    spinButton.disabled = false;
  }, 3000);
}
