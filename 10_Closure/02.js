function messageMaker(string) {
  return function makeMessage(nextString) {
    return string + nextString;
  };
}
