function waitFor(seconds) {
    return new Promise((resolve, reject) => {
      if (isNaN(seconds) || seconds < 1) {
        return reject("Parameter 'seconds' must be a positive number!");
      }
      setTimeout(() => {
        resolve("Success!");
      }, seconds * 1000);
    });
  }
  const wait = process.argv[2]
  waitFor(wait)
    .then((msg) => {
      console.log(`${msg} Waited ${wait}s`);
    })
    .catch((err) => {
      console.log(err);
    });