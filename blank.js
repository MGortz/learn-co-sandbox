function outerFunction() {
  var innerVariable = "I\'m sort of a secret";
  return function innerScope() {
    var inaccessibly = "Nothing can touch me";
    return innerVariable;
  }
}