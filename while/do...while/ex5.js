let i = 1;
cont = 0;

do {
  if (i % 2 !== 0) {
    cont = i + cont;
  }
  i++;
} while (i <= 100);
console.log(cont);
