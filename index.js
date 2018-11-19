
/**
 * BIG Method to trim the spaces of a string
 * 
 * @method BIG
 *
 * @return {string}
 *
 * @public
 */

module.exports = function BIG(string) {
	if (typeof string !== 'string') {
		throw new TypeError("BIG wants string!");
	} else {
		return string.replace(/\s/g, "");
	}	
};
