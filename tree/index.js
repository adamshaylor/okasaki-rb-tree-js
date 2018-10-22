import search from './search/index.js';
import insert, { insertBatch } from './insert/index.js';

const rbTreePrototype = {
  search,
  insert,
  insertBatch,
  make(newProperties = {}) {
    return createRbTree({
      ...this,
      ...newProperties,
    });
  },
};

const createRbTree = ({
  root = null,
  aEqualsB = (a, b) => a === b,
  aIsLessThanB = (a, b) => a < b,
} = {}) => {
  const properties = {
    root: {
      value: root,
      enumerable: true,
    },
    aEqualsB: {
      value: aEqualsB,
      enumerable: true,
    },
    aIsLessThanB: {
      value: aIsLessThanB,
      enumerable: true,
    },
  };

  return Object.create(rbTreePrototype, properties);
};

export {
  rbTreePrototype,
  createRbTree as default,
};
