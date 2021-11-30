// Simple Timer

const times = process.argv.slice(2);

times.sort((a, b) => a - b);

for (const time of times) {
  if (time >= 0 && !isNaN(time)) {
    setTimeout(() => process.stdout.write('\x07'), time * 1000);
  }
}