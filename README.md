# okasaki-rb-tree

An implementation of the Okasaki red-black tree in JavaScript

## Overview

In 1999, Chris Okasaki wrote a research paper called [functional pearls: red-black trees in a functional setting](https://www.cs.tufts.edu/~nr/cs257/archive/chris-okasaki/redblack99.pdf). In it, he demonstrated a functional, immutable way to implement a [red-black tree](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree) in Haskell.

This is an implementation of Okasaki’s work—specifically his rotations—in JavaScript. The names of the rotations in the library are based on an in-order traversal of the the imbalanced subtrees described in figure 1 on page 3.

All the data structures generated in this library are done so with `Object.create()`. Although JavaScript will let you add your own properties to them, its own are immutable.

## Example

```javascript
import createTree from 'okasaki-rb-tree';
const emptyTree = createTree();
const threeTree = emptyTree.insert(3);
emptyTree.root; // null
threeTree.root; // {color: "black", value: 3, left: null, right: null}
```

## API

### `createTree(options)`

* `options.root`: the root node of the tree (_default:_ `null`).
* `options.aEqualsB`: the equality function used for searches and insertions, e.g. for case-insensitivity (_default:_ `(a, b) => a === b`).
* `options.aIsLessThanB`: the comparator function used for searches and insertions (_default:_ `(a, b) => a < b`).

### `tree`

* `tree.root`: `node` or `null`.
* `tree.aEqualsB`: see `createTree(options)`.
* `tree.aIsLessThanB`: see `createTree(options)`.
* `tree.search(value)`: returns the value if found, `null` if not.
* `tree.insert(value)`: returns a new, rebalanced tree with the new value. _NB:_ tree instances are immutable; the original tree will remain unchanged.
* `tree.insertBatch(values)`: pass an array and it returns a new, rebalanced tree with its values.
* `tree.make(properties)`: returns a new, rebalanced tree with `properties` merged with the original.

### `node`

* `node.color`: `"red"` or `"black"`.
* `node.value`: an arbitrary `insert`-ed value.
* `node.leftChild`: `node` or `null`.
* `node.rightChild`: `node` or `null`.
* `node.make(properties)`: returns a new, rebalanced subtree with `properties` merged with the original.

## Todo

- [ ] Write unit tests for `node`.
- [ ] Write unit tests for `rotations`.
- [ ] Switch extensions from `.js` to `.mjs` to support node’s [experimental module mode](https://nodejs.org/docs/latest-v11.x/api/esm.html) once [Jest is ready](https://github.com/facebook/jest/issues/7018).
- [ ] Plan how to handle falsey insertion values. (Disallow or configure?)
- [ ] Add `tree.remove()`. (Okasaki’s original paper didn’t include one.)
- [ ] Add Rollup to convert to CommonJS?
