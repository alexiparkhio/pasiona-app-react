const INVALID_KEYS = ['__v', '_id']

module.exports = array => {
  if (array instanceof Array) {
    array.map(element => {
      element.id = element._id.toString();

      for (const key of INVALID_KEYS) {
        delete element[key];
      }

      return element;
    });
  }

  return array;
}