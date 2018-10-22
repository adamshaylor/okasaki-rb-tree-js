import createNode from '../../../index.js';
import isRedWalk from './index.js';

test('walking mixed path on empty node returns false', () => {
  const actual = isRedWalk(createNode(), 'left', 'right');
  expect(actual).toBe(false);
});

test('walking mixed colors and paths is false', () => {
  const leftLeft = createNode({ color: 'red' });
  const leftRight = createNode();
  const left = createNode({ color: 'red', left: leftLeft, right: leftRight });
  const root = createNode({ left });
  const actual = isRedWalk(root, 'left', 'right');
  expect(actual).toBe(false);
});

test('walking all red on a mixed path is true', () => {
  const leftLeft = createNode();
  const leftRight = createNode({ color: 'red' });
  const left = createNode({ color: 'red', left: leftLeft, right: leftRight });
  const root = createNode({ left });
  const actual = isRedWalk(root, 'left', 'right');
  expect(actual).toBe(false);
});
