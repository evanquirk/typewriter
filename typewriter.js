const sentence = "hello there from lighthouse labs";
length = sentence.length
for (let i = 0; i < length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, 50*i);
};
setTimeout(() => {
  console.log(`\n`)
}, length*50);

