import balance from './balance/index.js';

const nodePrototype = {
  make(newProperties = {}) {
    return createNode({
      ...this,
      ...newProperties,
    });
  },
};

const nodeColorsToProperties = {
  red: {
    color: {
      value: 'red',
      enumerable: true,
    },
  },
  black: {
    color: {
      value: 'black',
      enumerable: true,
    },
  },
};

const createNode = ({
  color = 'black',
  value = null,
  left = null,
  right = null,
} = {}) => {
  const properties = nodeColorsToProperties[color];

  if (!properties) {
    throw new Error(`Unrecognized color: ${color}`);
  }

  if (left !== null && !Object.prototype.isPrototypeOf.call(nodePrototype, left)) {
    throw new Error('left must be null or have nodePrototype');
  }

  if (right !== null && !Object.prototype.isPrototypeOf.call(nodePrototype, right)) {
    throw new Error('right must be null or have nodePrototype');
  }

  Object.assign(properties, {
    value: {
      value,
      enumerable: true,
    },
    left: {
      value: left,
      enumerable: true,
    },
    right: {
      value: right,
      enumerable: true,
    },
  });

  const node = Object.create(nodePrototype, properties);

  // TODO: Optimize this overeager balancing. It may add some consistency and
  // simplicity, but it likely has an insertion and deletion performance cost.
  // Instead of merely balancing parents, grandparents, and piblings, we are
  // rebalancing the entire walk from the root to the insertion point. Unlike
  // Haskell, JavaScript does not come with algebraic types or pattern matching,
  // so identifying specific imbalances in a recursive context will take more
  // work.

  return balance(node);
};

export {
  nodePrototype,
  nodeColorsToProperties,
  createNode as default,
};
