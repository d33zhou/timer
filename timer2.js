// Interactive Timer

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

console.log("Beep machine: Press b to beep immediately, 0-9 for timed beeps, and ctrl+c to exit.");

stdin.on('data', (key) => {
  // if user pushes 'b', beep immediately
  if (key === 'b') {
    process.stdout.write('\x07');
  }

  // if user pushes a number, log countdown time and beep after X seconds
  if (key >= 0 && key <= 9) {
    console.log(`Setting timer for ${key} seconds...`);
    setTimeout(() => process.stdout.write('\x07'), key * 1000);
  }

  // if user types ctrl+c, output msg and exit program
  if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao!\n');
    process.exit();
  }
});