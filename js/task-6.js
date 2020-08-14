let input;
let total = 0;
let message;

do {
  input = prompt('Введите число');
  total += Number(input);
  if (input !== null) {
    console.log(input);
  }
} while (input !== null);
console.log('Общая сумма чисел равна', total);

message = `Общая сумма чисел равна ${total}`;
alert(message);
