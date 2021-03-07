module.exports = array => {
  if (array instanceof Array) {
    array.map(element => {
      element.id = element._id.toString();
      delete element._id;
      delete element.__v;

      return element;
    });
  }

  return array;
}