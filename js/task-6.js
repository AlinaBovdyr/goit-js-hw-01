let input;
let total = 0;
let message;

do {
  input = prompt('Введите число');

  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
    total = 0;
  } else if (Number(input)) {
    total += Number(input);
  }
  console.log(input);
} while (input !== null);
console.log(`Общая сумма чисел равна ${total}`);
message = `Общая сумма чисел равна ${total}`;
alert(message);
