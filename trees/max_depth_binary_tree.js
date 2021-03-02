var maxDepth = function (root) {
  let maxNode = (node, sum) => {
    if (node === null) {
      return sum;
    }
    return Math.max(maxNode(node.left, sum + 1), maxNode(node.right, sum + 1));
  };
  return maxNode(root, 0);
};
