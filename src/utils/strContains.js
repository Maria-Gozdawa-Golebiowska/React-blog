// src/utils/strContains.js

/**
 * Checks if the first string contains the second string, case insensitive.
 * @param {string} str1 - The string to be searched.
 * @param {string} str2 - The string to search for.
 * @returns {boolean} - True if str1 contains str2, ignoring case.
 */
export const strContains = (str1, str2) => {
  return str1.toLowerCase().includes(str2.toLowerCase());
};

export default strContains;