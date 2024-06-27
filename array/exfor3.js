const arr = [11, 20, 34, 42, 5, 60, 71, 83, 96, 10];
let soma = 0;

for (let i = 0; i < arr.length; i++) {
  soma = arr[i] + soma;
  {
    console.log(soma);
  }
}
