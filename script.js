// console.log(history, numbersEuropean, numbersAmerican);

const form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let newNumber = form.elements["newNumber"];

//   addToHistory(Number(newNumber.value), history);
//   numbersEuropean.push(Number(newNumber.value));
//   numbersAmerican.push(Number(newNumber.value));
//   console.log(Number(newNumber.value));
//   renderNumbers();
//   newNumber.value = "";
//   if (history.length >= 4) {
//     renderResult();
//   }
// });

function renderNumbers() {
  let numbers = document.querySelector(".numbers");

  numbers.innerHTML = `
    <div class="history">
        <p>Історія: </p>
        ${[...history]}
    </div>`;
}

// function renderResult() {
//   // Пересчитываем вероятности после каждого добавления числа
//   sectorProbabilitiesEuropean = sectorsEuropean.map((sect) =>
//     calculateProbability(sect, history)
//   );
//   columnProbabilitiesEuropean = columnsEuropean.map((col) =>
//     calculateColumnProbability(col, history)
//   );
//   topNumbersEuropean = findTopNumbers(history);
//   sectorProbabilitiesAmerican = sectorsAmerican.map((sect) =>
//     calculateProbability(sect, history)
//   );
//   columnProbabilitiesAmerican = columnsAmerican.map((col) =>
//     calculateColumnProbability(col, history)
//   );
//   topNumbersAmerican = findTopNumbers(history);

//   let result = document.querySelector(".result");

//   result.innerHTML = `<div class="european">
//         <h2>Амереканська</h2>
//         <ul>
//           <li>Вірогідність червоного: ${
//             (redProbabilityEuropean * 100).toFixed(2) + "%"
//           }</li>
//           <li>Вірогідність чорного: ${
//             (blackProbabilityEuropean * 100).toFixed(2) + "%"
//           }</li>
//           <li>Вірогідність парного: ${
//             (evenProbabilityEuropean * 100).toFixed(2) + "%"
//           }</li>
//           <li>Вірогідність не парного: ${
//             (oddProbabilityEuropean * 100).toFixed(2) + "%"
//           }</li>
//           <li>Три самих ймовірних чисел: ${[...topNumbersEuropean]}</li>
//           <li>${printProbabilities("Сектор", sectorProbabilitiesEuropean)}</li>
//           <li>${printProbabilities("Колонка", columnProbabilitiesEuropean)}</li>
//         </ul>
//       </div>
//       <div class="american">
//         <h2>Європейська</h2>
//         <ul>
//           <li>Вірогідність червоного: ${
//             (redProbabilityAmerican * 100).toFixed(2) + "%"
//           }</li>
//           <li>Вірогідність чорного: ${
//             (blackProbabilityAmerican * 100).toFixed(2) + "%"
//           }</li>
//           <li>Вірогідність парного: ${
//             (evenProbabilityAmerican * 100).toFixed(2) + "%"
//           }</li>
//           <li>Вірогідність не парного: ${
//             (oddProbabilityAmerican * 100).toFixed(2) + "%"
//           }</li>
//           <li>Три самих ймовірних чисел: ${[...topNumbersAmerican]}</li>
//           <li>${printProbabilities("Сектор", sectorProbabilitiesAmerican)}</li>
//           <li>${printProbabilities("Колонка", columnProbabilitiesAmerican)}</li>
//         </ul>
//       </div>`;
// }
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let newNumber = form.elements["newNumber"];

  addToHistory(Number(newNumber.value), history);
  numbersEuropean.push(Number(newNumber.value));
  numbersAmerican.push(Number(newNumber.value));
  renderNumbers();
  newNumber.value = "";
  // Пересчитываем вероятности после каждого добавления числа
  sectorProbabilitiesEuropean = sectorsEuropean.map((sect) =>
    calculateProbability(sect, history)
  );
  columnProbabilitiesEuropean = columnsEuropean.map((col) =>
    calculateColumnProbability(col, history)
  );
  topNumbersEuropean = findTopNumbers(history);
  sectorProbabilitiesAmerican = sectorsAmerican.map((sect) =>
    calculateProbability(sect, history)
  );
  columnProbabilitiesAmerican = columnsAmerican.map((col) =>
    calculateColumnProbability(col, history)
  );
  topNumbersAmerican = findTopNumbers(history);

  // Пересчитываем вероятности красного/черного, четного/нечетного
  redProbabilityEuropean = calculateRedProbability(history);
  blackProbabilityEuropean = calculateBlackProbability(history);
  evenProbabilityEuropean = calculateEvenProbability(history);
  oddProbabilityEuropean = calculateOddProbability(history);

  redProbabilityAmerican = calculateRedProbability(history);
  blackProbabilityAmerican = calculateBlackProbability(history);
  evenProbabilityAmerican = calculateEvenProbability(history);
  oddProbabilityAmerican = calculateOddProbability(history);

  renderResult();
});

function renderResult() {
  // Вывод результатов
  let result = document.querySelector(".result");
  console.log(`<div class="european">
    <h2>Амереканська</h2>
    <ul>
      <li>Вірогідність червоного: ${
        (redProbabilityEuropean * 100).toFixed(2) + "%"
      }</li>
      <li>Вірогідність чорного: ${
        (blackProbabilityEuropean * 100).toFixed(2) + "%"
      }</li>
      <li>Вірогідність парного: ${
        (evenProbabilityEuropean * 100).toFixed(2) + "%"
      }</li>
      <li>Вірогідність не парного: ${
        (oddProbabilityEuropean * 100).toFixed(2) + "%"
      }</li>
      <li>Три самих ймовірних чисел: ${[...topNumbersEuropean]}</li>
      <li>${printProbabilities("Сектор", sectorProbabilitiesEuropean)}</li>
      <li>${printProbabilities("Колонка", columnProbabilitiesEuropean)}</li>
    </ul>
  </div>
  <div class="american">
    <h2>Європейська</h2>
    <ul>
      <li>Вірогідність червоного: ${
        (redProbabilityAmerican * 100).toFixed(2) + "%"
      }</li>
      <li>Вірогідність чорного: ${
        (blackProbabilityAmerican * 100).toFixed(2) + "%"
      }</li>
      <li>Вірогідність парного: ${
        (evenProbabilityAmerican * 100).toFixed(2) + "%"
      }</li>
      <li>Вірогідність не парного: ${
        (oddProbabilityAmerican * 100).toFixed(2) + "%"
      }</li>
      <li>Три самих ймовірних чисел: ${[...topNumbersAmerican]}</li>
      <li>${printProbabilities("Сектор", sectorProbabilitiesAmerican)}</li>
      <li>${printProbabilities("Колонка", columnProbabilitiesAmerican)}</li>
    </ul>
  </div>`);
  result.innerHTML = `<div class="european">
          <h2>Амереканська</h2>
          <ul>
            <li>Вірогідність червоного: ${
              (redProbabilityEuropean * 100).toFixed(2) + "%"
            }</li>
            <li>Вірогідність чорного: ${
              (blackProbabilityEuropean * 100).toFixed(2) + "%"
            }</li>
            <li>Вірогідність парного: ${
              (evenProbabilityEuropean * 100).toFixed(2) + "%"
            }</li>
            <li>Вірогідність не парного: ${
              (oddProbabilityEuropean * 100).toFixed(2) + "%"
            }</li>
            <li>Три самих ймовірних чисел: ${[...topNumbersEuropean]}</li>
            <li>${printProbabilities(
              "Сектор",
              sectorProbabilitiesEuropean
            )}</li>
            <li>${printProbabilities(
              "Колонка",
              columnProbabilitiesEuropean
            )}</li>
          </ul>
        </div>
        <div class="american">
          <h2>Європейська</h2>
          <ul>
            <li>Вірогідність червоного: ${
              (redProbabilityAmerican * 100).toFixed(2) + "%"
            }</li>
            <li>Вірогідність чорного: ${
              (blackProbabilityAmerican * 100).toFixed(2) + "%"
            }</li>
            <li>Вірогідність парного: ${
              (evenProbabilityAmerican * 100).toFixed(2) + "%"
            }</li>
            <li>Вірогідність не парного: ${
              (oddProbabilityAmerican * 100).toFixed(2) + "%"
            }</li>
            <li>Три самих ймовірних чисел: ${[...topNumbersAmerican]}</li>
            <li>${printProbabilities(
              "Сектор",
              sectorProbabilitiesAmerican
            )}</li>
            <li>${printProbabilities(
              "Колонка",
              columnProbabilitiesAmerican
            )}</li>
          </ul>
        </div>`;
}
