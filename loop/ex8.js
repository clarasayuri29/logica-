let i = 0;
const x = 10;

for (let i = 1; i <= x; i++) {
  if (x % i == 0) {
    i++;
  }
}

if (i == 2) {
  console.log("primo");
}
