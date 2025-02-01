function bouncingBall(h, bounce, window) {
  // your code here

  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    let counter = 0;
    while (h > window) {
      h = h * bounce;
      counter++;
    }
    return counter * 2 - 1;
  } else {
    return -1;
  }
}

console.log(bouncingBall(3, 0.66, 1.5));
