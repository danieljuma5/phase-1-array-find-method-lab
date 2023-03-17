// Defining superBowlWin() function

function superbowlWin(array) {
  const found = array.find(item =>item.result === 'W');
return found ? found.year : undefined;
}