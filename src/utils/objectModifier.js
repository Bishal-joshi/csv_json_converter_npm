/**
 * This function converts the keys of an object to lower case
 * for example: input= {"Apple":1,"Ball":2,"CAT":3} then output={"apple":1,"ball":2,"cat":3}
 * @param {Object} object
 * @returns
 */
export function convertObjectKeysToLowerCase(object) {
  return Object.keys(object).reduce((acc, key) => {
    acc[key.toLowerCase()] = object[key];
    return acc;
  }, {});
}
