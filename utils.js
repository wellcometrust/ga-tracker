/**
 * Converts a NodeList to an Array
 *
 * @param      {NodeList}  nl      The NodeList to convert
 * @return     {array}  The array containing nodes
 */
const nodeList = nl => [].slice.call(nl || []);

export { nodeList };
