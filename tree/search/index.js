export default function search(value) {
  const recursiveSearch = (node) => {
    if (!node) {
      return false;
    }
    if (this.aEqualsB(value, node.value)) {
      return node.value;
    }
    if (this.aIsLessThanB(value, node.value)) {
      return recursiveSearch(node.left);
    }
    return recursiveSearch(node.right);
  };
  return recursiveSearch(this.root);
}
