const { ContentError } = require('../errors');

/**
 * Tool to validate different value fields.
 */
module.exports = {
  string(target, name, empty = true) {
    this.type(target, name, String);

    if (empty && !target.trim()) throw new ContentError(`${name} is empty`);
  },

  type(target, name, type) {
    if (type === String || type === Number || type === Boolean) {
      type = type.name.toLowerCase();
      if (typeof target === 'number' && target.toString() === 'NaN') throw new TypeError(`${name} ${target} is not a ${type}`);
      if (typeof target !== type) throw new TypeError(`${name} ${target} is not a ${type}`);
    } else if (!(target instanceof type)) throw new TypeError(`${name} ${target} is not a ${type.name}`);
  }
}