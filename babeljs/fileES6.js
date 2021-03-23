
nums.forEach(v => {
  if (v % 5 === 0) fives.push(v);
});

function thisBinding() {
  return () => console.log(this.string);
}



