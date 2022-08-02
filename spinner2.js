// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r|   ');
// }, 900);

let animation = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ','\n'];

let time = 0;

for (let spinner of animation) {
  setTimeout(() => {
    process.stdout.write(spinner);
  }, time);
  time = time + 200;
}