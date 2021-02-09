function spinner() {
  
  const spokes = ['\r/   ', '\r-  ', '\r\\   ', '\r|   ', '\r/   ', '\r-  ', '\r\\   ', '\r|   '];
  let delay = 100;
  for (let i = 0; i < spokes.length; i++) {
    setTimeout( () => {
      process.stdout.write(spokes[i]);
    }, delay);
    delay += 100;
  }
  setTimeout( () => {
    console.log('');
  }, 1700);
};

spinner();