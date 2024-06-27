for (let i = 0; i < 10000; i++) {
  console.log(i);
}
let i = 0;
for (; i < 10; i++) {
  console.log(i);
}
for (let i = 0; ; i++) {
  if (i > 10) {
    break;
  }
}
for (let i = 0; i < 10; ) {
  if (i < 5) {
    i++;
  } else {
    i += 2;
  }
}
