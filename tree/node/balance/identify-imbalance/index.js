import isRedWalk from './is-red-walk/index.js';

const identifyImbalance = (node) => {
  if (isRedWalk(node, 'left', 'left')) {
    return 'zyx';
  }
  if (isRedWalk(node, 'left', 'right')) {
    return 'zxy';
  }
  if (isRedWalk(node, 'right', 'right')) {
    return 'xyz';
  }
  if (isRedWalk(node, 'right', 'left')) {
    return 'xzy';
  }
  return 'none';
};

export default identifyImbalance;
