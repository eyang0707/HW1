function repeatDown(total) {
  var count = 0;
  while (count < total) {
    down();
    count = count + 1;
  }
}
function repeatUp(total) {
  var count = 0;
  while (count < total) {
    up();
    count = count + 1;
  }
}

repeatDown(9);
right();
right();
repeatUp(9);
right();
right();
repeatDown(9);
right();
right();
repeatUp(9);
right();
right();
repeatDown(8);
right();
