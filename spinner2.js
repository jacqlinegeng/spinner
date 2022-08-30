let animation = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ','\n'];

let time = 0;

for (let spinner of animation) {
  setTimeout(() => {
    process.stdout.write(spinner);
  }, time);
  time = time + 200;
}