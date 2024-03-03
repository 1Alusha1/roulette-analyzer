// Функция для добавления результатов в историю
function addToHistory(result, history) {
  history.push(result);
}

// Функция для расчета вероятности
function calculateProbability(sector, history) {
  const occurrences = history.filter((num) => sector.includes(num)).length;
  const totalCount = history.length;
  return totalCount === 0 ? 0 : occurrences / totalCount;
}

// Функция для вывода вероятностей
function printProbabilities(label, probabilities) {
  console.log(label + ":");
  if (Array.isArray(probabilities[0])) {
    probabilities.forEach((prob, i) => {
      const formattedProb = prob
        .map((p) => (p * 100).toFixed(2) + "%")
        .join(", ");
      return `Сектор ${i}: ${formattedProb}`;
    });
  } else {
    return `${label}: ${probabilities
      .map((p) => (p * 100).toFixed(2) + "%")
      .join(", ")}`;
  }
}

// Функция для расчета вероятности красного
function calculateRedProbability(history) {
  const redNumbers = [
    1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
  ];
  const occurrences = history.filter((num) => redNumbers.includes(num)).length;
  return occurrences / history.length;
}

// Функция для расчета вероятности черного
function calculateBlackProbability(history) {
  return 1 - calculateRedProbability(history);
}

// Функция для расчета вероятности четного
function calculateEvenProbability(history) {
  const occurrences = history.filter((num) => num % 2 === 0).length;
  return occurrences / history.length;
}

// Функция для расчета вероятности нечетного
function calculateOddProbability(history) {
  return 1 - calculateEvenProbability(history);
}

// Функция для нахождения трех наиболее вероятных чисел
function findTopNumbers(history) {
  const occurrencesMap = {};
  history.forEach((num) => {
    occurrencesMap[num] = occurrencesMap[num] ? occurrencesMap[num] + 1 : 1;
  });
  const sortedNumbers = Object.keys(occurrencesMap).sort(
    (a, b) => occurrencesMap[b] - occurrencesMap[a]
  );
  return sortedNumbers.slice(0, 3).map(Number);
}

// Создаем массив для хранения истории результатов
const history = [];

// Пример секторов и колонок в европейской рулетке
const sectorsEuropean = [
  [0], // Сектор "0"
  [...Array(12).keys()].map((x) => 1 + 3 * x), // Первая колонка
  [...Array(12).keys()].map((x) => 2 + 3 * x), // Вторая колонка
  [...Array(12).keys()].map((x) => 3 + 3 * x), // Третья колонка
];

// Пример номеров в колонках
const numbersEuropean = [];

// Пример секторов и колонок в американской рулетке
const sectorsAmerican = [
  [0, 37], // Сектор "0" и "00"
  [...Array(12).keys()].map((x) => 1 + 3 * x), // Первая колонка
  [...Array(12).keys()].map((x) => 2 + 3 * x), // Вторая колонка
  [...Array(12).keys()].map((x) => 3 + 3 * x), // Третья колонка
];

// Пример номеров в колонках для американской рулетки
const numbersAmerican = [];

// Функция для расчета вероятности для каждой колонки отдельно
function calculateColumnProbability(column, history) {
  const occurrences = history.filter((num) => column.includes(num)).length;
  return occurrences / history.length;
}

// Пример номеров в колонках
const columnsEuropean = [
  [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34], // Первая колонка
  [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35], // Вторая колонка
  [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36], // Третья колонка
];

// Пример номеров в колонках для американской рулетки
const columnsAmerican = [
  [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34], // Первая колонка
  [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35], // Вторая колонка
  [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36], // Третья колонка
];

// Расчет вероятностей для европейской рулетки
let sectorProbabilitiesEuropean = sectorsEuropean.map((sect) =>
  calculateProbability(sect, history)
);
let columnProbabilitiesEuropean = columnsEuropean.map((col) =>
  calculateColumnProbability(col, history)
);
let columnProbabilityEuropean = calculateProbability(
  numbersEuropean,
  history
);
let redProbabilityEuropean = calculateRedProbability(history);
let blackProbabilityEuropean = calculateBlackProbability(history);
let evenProbabilityEuropean = calculateEvenProbability(history);
let oddProbabilityEuropean = calculateOddProbability(history);
let topNumbersEuropean = findTopNumbers(history);

// Расчет вероятностей для американской рулетки
let sectorProbabilitiesAmerican = sectorsAmerican.map((sect) =>
  calculateProbability(sect, history)
);
let columnProbabilitiesAmerican = columnsAmerican.map((col) =>
  calculateColumnProbability(col, history)
);
let redProbabilityAmerican = calculateRedProbability(history);
let blackProbabilityAmerican = calculateBlackProbability(history);
let evenProbabilityAmerican = calculateEvenProbability(history);
let oddProbabilityAmerican = calculateOddProbability(history);
let topNumbersAmerican = findTopNumbers(history);
