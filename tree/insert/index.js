import createNode from '../node/index.js';

function insert(value) {
  const recursiveInsert = (node) => {
    if (!node) {
      return createNode({
        color: 'red',
        value,
      });
    }
    if (this.aEqualsB(value, node.value)) {
      return createNode({
        ...node,
      });
    }
    if (this.aIsLessThanB(value, node.value)) {
      return createNode({
        ...node,
        left: recursiveInsert(node.left),
      });
    }
    return createNode({
      ...node,
      right: recursiveInsert(node.right),
    });
  };

  const root = recursiveInsert(this.root).make({ color: 'black' });
  return this.make({ root });
}

function insertBatch(values) {
  return values.reduce((tree, value) => tree.insert(value), this);
}

export {
  insert as default,
  insertBatch,
};
