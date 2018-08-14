export default class StringUtils {
  /*
    convert the first character in each word to Uppercase and remaining characters to Lowercase in string and returns new string.
    */
  static title = string => {
    const words = string
      .split(" ")
      .map(str => str[0].toUpperCase() + str.slice(1).toLowerCase());
    return words.join(" ").trim();
  };
}
