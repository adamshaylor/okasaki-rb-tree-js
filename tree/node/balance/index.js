/**
 * Chris Okasaki
 * Functional pearls: red-black trees in a functional setting
 *
 * https://www.cs.tufts.edu/~nr/cs257/archive/chris-okasaki/redblack99.pdf
 *
 * See figure 1 on p. 3. Names of imbalances are based on a pre-order traversal
 * of the subtree.
 */

import identifyImbalance from './identify-imbalance/index.js';
import rotations from './rotations/index.js';

const balance = (node) => {
  const imbalanceType = identifyImbalance(node);
  const rotate = rotations[imbalanceType];
  if (!rotate) {
    throw new Error(`Unknown imbalance type: ${imbalanceType}`);
  }
  return rotate(node);
};

export {
  identifyImbalance,
  rotations,
  balance as default,
};
