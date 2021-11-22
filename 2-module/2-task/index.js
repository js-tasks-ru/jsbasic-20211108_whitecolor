function isEmpty(obj) {
  for (let k in obj) {
    return true;
  }
  return false;
}
