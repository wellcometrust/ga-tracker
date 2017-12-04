/**
 * Converts a NodeList to an Array
 *
 * @param      {NodeList}  nl      The NodeList to convert
 * @return     {array}  The array containing nodes
 */
const nodeList = nl => [].slice.call(nl || []);

/**
 * throttle wrapper which we need for scrolling listeners: http://www.ianlopshire.com/javascript-scroll-events-doing-it-right/
 *
 * @param      {Function}  callback  The function to throttle
 * @param      {Number}    wait      The minimum time that needs to pass between successive function calls
 * @return     {Function}    { the throttled function }
 */
const throttle = (callback, wait) => {
  let go = true;
  return () => {
    if (go) {
      go = false;
      setTimeout(() => {
        go = true;
        callback.call();
      }, wait);
    }
  };
};

export { nodeList, throttle };
